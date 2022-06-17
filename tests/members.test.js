const request = require('supertest');
const app = require('../app');
const generateToken = require('../middleware/userToken');

const user = { id: 1, name:'PruebaTest', roleId: 1 }
let token = generateToken(user);

const members = [];

describe("GET/members", () => {
test('Debera mostrar un listado con todos los miembros, status:200', (done) => {
     request(app)
    .get('/members')
    .set('x-access-token', token)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)
    .expect(members)
 });

 test('No se ah enviado el token de autenticación, status:401', (done) => {
    request(app)
    .get('/members')
    .set('x-access-token', '')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(401, done)
    .expect({ error: "No se ha enviado el token de autenticación"})
  });

  test('Token invalido, status:400', (done) => { 
    token = '12345'
    request(app)
    .get('/members')
    .set('x-access-token', token )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(400, done)
    .expect({ message: "Token invalido" })
  });

});