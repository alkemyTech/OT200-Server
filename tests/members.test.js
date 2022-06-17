const request = require('supertest');
const app = require('../app');
const generateToken = require('../middleware/userToken');

const user = { id: 1, name:'PruebaTest', roleId: 1 }
const token = generateToken(user);


describe("GET/members", () => {
test('Debera mostrar un listado con todos los miembros, status:200', (done) => {
    const members = [];
     request(app)
    .get('/members')
    .send(members)
    .set('x-access-token', token)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)
    .expect([])
 });
});