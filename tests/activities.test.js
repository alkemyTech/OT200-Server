const request = require('supertest');
const generateToken = require('../middleware/userToken');
const app = require('../app');
const userAdmin = {id: 1, name: "userAdmin", roleId: 1};
const userStandar = {id: 2, name: "userStandar", roleId: 2 };
let headerAdmin = {"x-access-token": generateToken(userAdmin)};
let headerStandar = {"x-access-token": generateToken(userStandar)};


describe('POST /activities', () => {

    describe('Given name, content and image', () => {
        const infoCreate = {
            name: "Nueva Actividad create from test 1",
            content: "Content de nueva actividad Update 1",
            image: "image de nueva actividad Update 1"
        }

        test('Should respond with a 201 status code', async () => {
            const response = await request(app).post('/activities')
                .set('Content-type', 'application/json')
                .set(headerAdmin)
                .send(infoCreate);
            expect(response.statusCode).toBe(201);
            expect(response.body).toBeInstanceOf(Object);
        });
    });
    describe('Given name and content', () => {
        const infoCreate = {
            name: "Nueva Actividad create from test 2",
            content: "Content de nueva actividad Update 1"
        }

        test('Should respond with a 201 status code', async () => {
            const response = await request(app).post('/activities')
                .set('Content-type', 'application/json')
                .set(headerAdmin)
                .send(infoCreate);
            expect(response.statusCode).toBe(201);
            expect(response.body).toBeInstanceOf(Object);
        });
    });
    describe('Missing name, content or both', () => {
        const missingName = {
            content: "Content of activity",
            image: "image of activity"
        }
        const missingContent = {
            name: "Content of activity",
            image: "image of activity"
        }
        const missingBoth = {}

        test('Should respond with a 400 status code', async () => {
            const response = await request(app).post('/activities')
                .set('Content-type', 'application/json')
                .set(headerAdmin)
                .send(missingName);
            expect(response.statusCode).toBe(400);
        })
        test('Should respond with a 400 status code', async () => {
            const response = await request(app).post('/activities')
                .set('Content-type', 'application/json')
                .set(headerAdmin)
                .send(missingContent);
            expect(response.statusCode).toBe(400);
        })
        test('Should respond with a 400 status code', async () => {
            const response = await request(app).post('/activities')
                .set('Content-type', 'application/json')
                .set(headerAdmin)
                .send(missingBoth);
            expect(response.statusCode).toBe(400);
        })
    })
    describe('Without admin user', () => {
        const infoCreate = {
            name: "Nueva Actividad create from test 1",
            content: "Content de nueva actividad Update 1",
            image: "image de nueva actividad Update 1"
        }
        test('Should respond 403 status code', async () => {
            const response = await request(app).post('/activities')
                .set('Content-type', 'application/json')
                .set(headerStandar)
                .send(infoCreate);
            expect(response.statusCode).toBe(403);
        })
    })



});

describe('PUT /activities/:id', () => {

    describe('Given a name, content or image', () => {
        const infoUpdate = {
            name: "actividad Update1",
            content: "Content de nueva actividad Update 1",
            image: "image de nueva actividad Update 1"
        }

        test('Should respond with a 20 status code', async () => {
            let id = 20;
            const response = await request(app).put(`/activities/${id}`)
                .set('Content-type', 'application/json')
                .set(headerAdmin)
                .send(infoUpdate);
            expect(response.statusCode).toBe(200);
        })
    })
    describe('Given a empty object', () => {
        let id = 25;
        const infoUpdate = {};
        test('Shold respond with a 404 status code', async () => {
            const response = await request(app).put(`/activities/${id}`)
                .set('Content-type', 'application/json')
                .set(headerAdmin)
                .send(infoUpdate)
            expect(response.statusCode).toBe(404);
        })
    })

    describe('Without admin user', () => {
        const infoUpdate = {
            name: "actividad Update1",
            content: "Content de nueva actividad Update 1",
            image: "image de nueva actividad Update 1"
        }
        test('Should respond 403 status code', async () => {
            let id = 30;
            const response = await request(app).put(`/activities/${id}`)
            .set('Content-type', 'application/json')
            .set(headerStandar)
            .send(infoUpdate)
            expect(response.statusCode).toBe(403);
        })
    })
})
