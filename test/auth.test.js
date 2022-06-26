const app = require("../app");
const request = require("supertest");
const { v4: uuidv4 } = require('uuid');

const dummyUser = {
  firstName: "Usuario 21",
  lastName: "Demo",
  email: `test${ uuidv4() }@test21.com`,
  password: "Alkemy@123456*",
  photo:"https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
};

// Register

describe("Post/auth/register", () => {
  describe("Verify register success", () => {
    test("should bw reaturn a 201 status code", async () => {
      const response = await request(app)
        .post("/auth/register")
        .set("Content-type", "application/json")
        .send(dummyUser);
      expect(response.statusCode).toBe(201);
      expect(response.body.data.firstName).toEqual("Usuario 21");
      expect(response.body.data.lastName).toEqual("Demo");
      expect(response.body.data.email).toEqual(dummyUser.email);
      expect(response.body.data.photo).toEqual(dummyUser.photo);
    });
  });

  describe("Verify user alredy exist", () => {
    test("should be return a 400 status code", async () => {
      const response = await request(app)
        .post("/auth/register")
        .set("Content-type", "application/json")
        .send(dummyUser);
      expect(response.statusCode).toBe(400);
      expect(response.body.errors[0].msg).toEqual("Email already in use");
    });
  });

  describe("Verify empty values", () => {
    const dummyUser = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      photo:
        "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
    };
    test("Should be return a 400 status code", async () => {
      const response = await request(app)
        .post("/auth/register")
        .set("Content-type", "application/json")
        .send(dummyUser);
      expect(response.statusCode).toBe(400);
      expect(response.body.errors[0].msg).toEqual("Must be at between 8 and 15 characters long");
      expect(response.body.errors[1].msg).toEqual("Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character. ");
      expect(response.body.errors[2].msg).toEqual("Field must not be empty");
      expect(response.body.errors[3].msg).toEqual("Must be at between 3 and 20 characters long");
      expect(response.body.errors[4].msg).toEqual("Field must not be empty");
      expect(response.body.errors[5].msg).toEqual("Must be at between 3 and 20 characters long");
      expect(response.body.errors[6].msg).toEqual("Not an email");
    });
  });
});

//Login

describe("Post/auth/login", () => {
  describe("Login sucess", () => {
    const randomUser = {
      email: dummyUser.email,
      password: dummyUser.password,
    };
    test("Should be return a 200 status code", async () => {
      const response = await request(app)
        .post("/auth/login")
        .set("Content-type", "application/json")
        .send(randomUser);
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body.message).toEqual("Login exitoso");
      expect(response.body.user.email).toEqual(randomUser.email);
      expect(response.body.token).toBeDefined();
    });
  });

  describe("Incorrect Password", () => {
    const randomUser = {
      email: dummyUser.email,
      password: "123",
    };
    test("Should be return a 400 status code", async () => {
      const response = await request(app)
        .post("/auth/login")
        .set("Content-type", "application/json")
        .send(randomUser);
      expect(response.statusCode).toBe(400);
      expect(response.body.errors[0].msg).toEqual("La contraseña debe tener al menos 8 caracteres.");
    });
  });

  describe("Empty imputs", () => {
    const randomUser = {
      email: "",
      password: "",
    };
    test("Should be return a 400 status code", async () => {
      const response = await request(app)
        .post("/auth/login")
        .set("Content-type", "application/json")
        .send(randomUser);
      expect(response.statusCode).toBe(400);
      expect(response.body.errors[0].msg).toEqual("Obligatorio");
      expect(response.body.errors[1].msg).toEqual("Ingrese un email valido.");
      expect(response.body.errors[2].msg).toEqual("Obligatorio");
      expect(response.body.errors[3].msg).toEqual("La contraseña debe tener al menos 8 caracteres.");
    });
  });

  describe("Unregistered user", () => {
    const randomUser = {
      email: "unexisteduser@test.com",
      password: "test@test1.com",
    };
    test("Should be return a 400 status code", async () => {
      const response = await request(app)
        .post("/auth/login")
        .set("Content-type", "application/json")
        .send(randomUser);
      expect(response.statusCode).toBe(404);
      expect(response.body.message).toEqual('Usuario no encontrado');
    });
  });
});
