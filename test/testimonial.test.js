const supertest = require("supertest");
const generateToken = require("../middleware/userToken");
const app = require("./../app");
const db = require("./../models/");
const api = supertest(app);

const adminToken = generateToken({ id: 1, roleId: 1 });

const standardToken = generateToken({ id: 2, roleId: 2 });

const emptyToken = "";

const invalidToken = "asd123";

beforeAll(async () => await db.Testimonial.destroy({ where: {}, truncate: true, force: true }));

describe("POST /testimonials", () => {

  const newTestimonial = {
    name: "Jhon test",
    image: "Jhon-test.jpg",
    content: "Hello Jhon test",    
  };

  describe("token is not send", () => {

    test("should respond with a 401 status code", async () => {

      await api
        .post("/testimonials")
        .set("x-access-token", emptyToken)
        .expect(401)
        .expect("Content-Type", /application\/json/)
        .expect((res) => {            
          expect(res.body).toEqual({error: "No se ha enviado el token de autenticación" });
         })
    });

  });

  describe("an invalid token is sent", () => {

    test("should respond with a 400 status code", async () => {

      await api
        .post("/testimonials")
        .set("x-access-token", invalidToken)
        .expect(400)
        .expect("Content-Type", /application\/json/)
        .expect((res) => {            
          expect(res.body).toEqual({ message: "Token invalido" });
         })
    });

  });

  describe("a valid testimonial is added by an admin user", () => {

    test("should respond with a 201 status code", async () => {

      await api
        .post("/testimonials")
        .set("x-access-token", adminToken)
        .send(newTestimonial)
        .expect(201)
        .expect("Content-Type", /application\/json/)
        .expect((res) => {
          const {id, name, image, content} = res.body;
          data = {id, name, image, content};          
          expect(data).toEqual({id, ...newTestimonial});
         })

    });

  });

  describe("a testimonial without name (required) is not added by an admin user", () => {
    
    const newTestimonial = {
      image: "Jhon-test.jpg",
      content: "Hello Jhon test",
    };

    test("should respond with a 400 status code", async () => {

      await api
        .post("/testimonials")
        .set("x-access-token", adminToken)
        .send(newTestimonial)
        .expect(400)
        .expect("Content-Type", /application\/json/)
        .expect((res) => {            
          expect(res.body).toEqual({
            "errors": [
              {
                "msg": "Field must exist",
                "param": "name",
                "location": "body"
              },
              {
                "msg": "Field must not be empty",
                "param": "name",
                "location": "body"
              },
              {
                "msg": "Must be at between 3 and 15 characters long",
                "param": "name",
                "location": "body"
              }
            ]
          });
         })

    });

  });

  describe("a new testimonial is not added by a standard user", () => {
    
    test("should respond with a 403 status code", async () => {

      await api
        .post("/testimonials")
        .set("x-access-token", standardToken)
        .send(newTestimonial)
        .expect(403)
        .expect("Content-Type",/application\/json/)
        .expect((res) => {            
          expect(res.body).toEqual({
            "msg": "No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración"
          });
         })
    })
    
  });

});

describe("DELETE /testimonials", () => {

  describe("token is not send", () => {

    test("should respond with a 401 status code", async () => {

      await api
        .delete(`/testimonials/${1}`)
        .set("x-access-token", emptyToken)
        .expect(401)
        .expect("Content-Type", /application\/json/)
        .expect((res) => {            
          expect(res.body).toEqual({error: "No se ha enviado el token de autenticación" });
         })

    });

  });

  describe("an invalid token is sent", () => {

    test("should respond with a 400 status code", async () => {

      await api
        .delete(`/testimonials/${1}`)
        .set("x-access-token", invalidToken)
        .expect(400)
        .expect("Content-Type", /application\/json/)
        .expect((res) => {            
          expect(res.body).toEqual({ message: "Token invalido" });
         })

    });

  });

  describe("a testimonial deleted by id", () => {

    test("should respond with a 200 status code", async () => {

      await api
        .delete(`/testimonials/${1}`)
        .set("x-access-token", adminToken)
        .expect(200)
        .expect("Content-Type", /application\/json/)
        .expect((res) => {           
          expect(res.body).toEqual({message: "Deleted", id: "1"});
         })

    });

  });

  describe("a testimonial not found", () => {

    test("should respond with a 404 status code", async () => {

      await api
        .delete(`/testimonials/${123}`)
        .set("x-access-token", adminToken)
        .expect(404)
        .expect("Content-Type", /application\/json/)
        .expect((res) => {           
          expect(res.body).toEqual({error: true, message: "Testimonial not found"});
         })

    });

  });

  describe("an id invalid is sent", () => {

    test("should respond with a 500 status code", async () => {

      await api
        .delete(`/testimonials/${"asdsad"}`)
        .set("x-access-token", adminToken)
        .expect(500)
        .expect("Content-Type", /application\/json/)
        .expect((res) => {           
          expect(res.body).toEqual({error: true, message: "An error has ocurred"});
         })

    });

  });

  describe("a testimonial is not deleted by a standard user", () => {
    
    test("should respond with a 403 status code", async () => {

      await api
        .delete(`/testimonials/${1}`)
        .set("x-access-token", standardToken)        
        .expect(403)
        .expect("Content-Type",/application\/json/)
        .expect((res) => {            
          expect(res.body).toEqual({
            "msg": "No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración"
          });
         })

    })
    
  });

});

afterAll(async () => await db.Testimonial.destroy({ where: {}, truncate: true, force: true }));
