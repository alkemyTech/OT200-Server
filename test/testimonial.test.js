const supertest = require("supertest");
const app = require("./../app");
const db = require("./../models/");
const api = supertest(app);

const initialTestimonials = [
  {
    name: "Michi 1",
    image: "Michi-1.jpg",
    content: "Hello michi 1",
  },
  {
    name: "Michi 2",
    image: "Michi-2.jpg",
    content: "Hello michi 2",
  },
];

const admin = {
  email: "admin@gmail.com.ar",
  password: "sdswA@ssds2",
};

let token = "";

beforeEach(async () => {
  await db.Testimonial.destroy({ where: {}, truncate: true, force: true });

  initialTestimonials.forEach(async (testimonial) => {
    await db.Testimonial.create(testimonial);
  });

  const response = await api.post("/auth/login").send(admin);
  token = response.body.token;
});

describe("POST /testimonials", () => {
  describe("a valid testimonial can be added", () => {
    const newTestimonial = {
      name: "Michi test",
      image: "Michi-test.jpg",
      content: "Hello michi test",
    };

    test("should respond with a 201 status code", async () => {
      await api
        .post("/testimonials")
        .set("x-access-token", token)
        .send(newTestimonial)
        .expect(201)
        .expect("Content-Type", /application\/json/);

      const response = await api
        .get("/testimonials")
        .set("x-access-token", token)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      expect(response.body).toHaveLength(initialTestimonials.length + 1);
    });
  });

  describe("a testimonial without name (required) is not added", () => {
    const newTestimonial = {
      image: "Michi-test.jpg",
      content: "Hello michi test",
    };

    test("should respond with a 400 status code", async () => {
      await api
        .post("/testimonials")
        .set("x-access-token", token)
        .send(newTestimonial)
        .expect(400)
        .expect("Content-Type", /application\/json/);
    });
  });
});

describe("DELETE /testimonials", () => {
  describe("a testimonial deleted by id", () => {
    test("should respond with a 200 status code", async () => {
      await api
        .delete(`/testimonials/${1}`)
        .set("x-access-token", token)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("a testimonial not found", () => {
    test("should respond with a 404 status code", async () => {
      await api
        .delete(`/testimonials/${123}`)
        .set("x-access-token", token)
        .expect(404)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("an id invalid", () => {
    test("should respond with a 500 status code", async () => {
      await api
        .delete(`/testimonials/${"asdsad"}`)
        .set("x-access-token", token)
        .expect(500)
        .expect("Content-Type", /application\/json/);
    });
  });
});

afterAll(async () => {
  //* TODO: cerrar tambien la base de datos
  // server.close()
  await db.Testimonial.destroy({ where: {}, truncate: true, force: true });
});
