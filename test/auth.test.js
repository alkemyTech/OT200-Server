const app = require("../app");
const request = require("supertest");

// Register

describe("Post/auth/register", () => {
  describe("Verify register success", () => {
    const dummyUser = {
      firstName: "Usuario 21",
      lastName: "Demo",
      email: "test@test21.com",
      password: "Alkemy@123456*",
      roleId: 1,
      photo:"https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
    };
    test("should bw reaturn a 201 status code", async () => {
      const response = await request(app)
        .post("/auth/register")
        .set("Content-type", "application/json")
        .send(dummyUser);
      expect(response.statusCode).toBe(201);
      expect(response.body).toBeInstanceOf(Object);
    });
  });

  describe("Verify user alredy exist", () => {
    const dummyUser = {
      firstName: "Usuario",
      lastName: "Demo",
      email: "test@test1.com",
      password: "Alkemy@123456*",
      roleId: 1,
      photo:
        "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
    };
    test("should be return a 400 status code", async () => {
      const response = await request(app)
        .post("/auth/register")
        .set("Content-type", "application/json")
        .send(dummyUser);
      expect(response.statusCode).toBe(400);
      expect(response.body.errors).toBeInstanceOf(Array);
    });
  });

  describe("Verify empty values", () => {
    const dummyUser = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roleId: 1,
      photo:
        "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
    };
    test("Should be return a 400 status code", async () => {
      const response = await request(app)
        .post("/auth/register")
        .set("Content-type", "application/json")
        .send(dummyUser);
      expect(response.statusCode).toBe(400);
      expect(response.body.errors).toBeInstanceOf(Array);
    });
  });
});

//Login

describe("Post/auth/login", () => {
  describe("Login sucess", () => {
    const randomUser = {
      email: "test@test1.com",
      password: "Alkemy@123456*",
    };
    test("Should be return a 200 status code", async () => {
      const response = await request(app)
        .post("/auth/login")
        .set("Content-type", "application/json")
        .send(randomUser);
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
    });
  });

  describe("Incorrect Password", () => {
    const randomUser = {
      email: "test@test1.com",
      password: "123",
    };
    test("Should be return a 400 status code", async () => {
      const response = await request(app)
        .post("/auth/login")
        .set("Content-type", "application/json")
        .send(randomUser);
      expect(response.statusCode).toBe(400);
      expect(response.body.errors).toBeInstanceOf(Array);
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
      expect(response.body.errors).toBeInstanceOf(Array);
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
      expect(response.statusCode).toBe(500);
      expect(response.body).toBeInstanceOf(Object);
    });
  });
});
