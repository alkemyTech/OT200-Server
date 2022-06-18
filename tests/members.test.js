const request = require('supertest');
const app = require('../app');
const generateToken = require('../middleware/userToken');

const user = { id: 1, name:'PruebaTest', roleId: 1 }
let token = generateToken(user);
const tokenNull = '12345';




describe('POST/members', () => {

  test('Debera crear un member, status: 201', ( done ) => {

      request(app)
      .post('/members')
      .set('x-access-token', token)
      .send({name:'pruebaTest'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) =>  {
          if (err) return done(err);
          return done();
        });

   });


  test('Debera devolver un status 400 si no se envian los campos por request', ( done ) => { 

      request(app)
      .post('/members')
      .set('x-access-token', token)
      .send({name:''})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) =>  {
          if (err) return done(err);
          return done();
        });

   });

  test('No se ah enviado el token de autenticación, status:401', (done) => {

      request(app)
      .post('/members')
      .set('x-access-token', '')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .expect({ error: "No se ha enviado el token de autenticación"})
      .end((err, res) =>  {
        if (err) return done(err);
        return done();
      });

  });

  test('Token invalido, status:400', (done) => { 


      request(app)
      .post('/members')
      .set('x-access-token', tokenNull )
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .expect({ message: "Token invalido" })
      .end((err, res) =>  {
        if (err) return done(err);
        return done();
      });

  });

});



describe("GET/members", () => {

test('Debera mostrar un listado con todos los miembros, status:200', (done) => {

    request(app)
    .get('/members')
    .set('x-access-token', token)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) =>  {
      if (err) return done(err);
      return done();
    });
    

 });

 test('No se ah enviado el token de autenticación, status:401', (done) => {

    request(app)
    .get('/members')
    .set('x-access-token', '')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(401)
    .expect({ error: "No se ha enviado el token de autenticación"})
    .end((err, res) =>  {
      if (err) return done(err);
      return done();
    });

  });

  test('Token invalido, status:400', (done) => { 


    request(app)
    .get('/members')
    .set('x-access-token', tokenNull )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(400)
    .expect({ message: "Token invalido" })
    .end((err, res) =>  {
      if (err) return done(err);
      return done();
    });

  });

  test('No tiene los permisos de adminitrador, status:403', ( done ) => { 

    user.roleId = 2;
    const tokenId2 = generateToken(user);

    request(app)
    .get('/members')
    .set('x-access-token', tokenId2 )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(403)
    .expect({  msg: 'No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración'})
    .end((err, res) =>  {
      if (err) return done(err);
      return done();
    });

   });

});



