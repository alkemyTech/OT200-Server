const request = require('supertest');
const app = require('../app');
const generateToken = require('../middleware/userToken');

const user = { id: 1, name:'PruebaTest', roleId: 1 }
let token = generateToken(user);
const tokenNull = '12345';




describe('POST/members', () => {

  test('Debera crear un miembro, status: 201', async( ) => {

     const response = await request(app)
      .post('/members')
      .set('x-access-token', token)
      .send({name:'pruebaTest'})
      .set('Accept', 'application/json')
      expect(response.status).toEqual(201);
      expect(response.body).toBeInstanceOf( Object );
     
   });


  test('Debera devolver un status 400 si no se envian los campos por request', async( ) => { 

     const response = await request(app)
      .post('/members')
      .set('x-access-token', token)
      .send({name:''})
      .set('Accept', 'application/json')
      expect(response.status).toEqual(400);

   });

  test('No se ah enviado el token de autenticación, status:401', async() => {

     const response = await request(app)
      .post('/members')
      .set('x-access-token', '')
      .set('Accept', 'application/json')
      expect(response.status).toEqual(401);
      expect(response.body.error).toEqual( "No se ha enviado el token de autenticación" );

  });

  test('Token invalido, status:400', async() => { 

     const response = await request(app)
      .post('/members')
      .set('x-access-token', tokenNull )
      .set('Accept', 'application/json')
      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual( "Token invalido" );

  });

});



describe("GET/members", () => {

test('Debera mostrar un listado con todos los miembros, status:200', async() => {

   const response = await request(app)
    .get('/members')
    .set('x-access-token', token)
    .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
    expect(response.body).toBeInstanceOf( Object );

 });

 test('No se ah enviado el token de autenticación, status:401', async() => {

   const response = await request(app)
    .get('/members')
    .set('x-access-token', '')
    .set('Accept', 'application/json')
    expect(response.status).toEqual(401);
    expect(response.body.error).toEqual( "No se ha enviado el token de autenticación" );

  });

  test('Token invalido, status:400', async() => { 

   const response = await request(app)
    .get('/members')
    .set('x-access-token', tokenNull )
    .set('Accept', 'application/json')
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual( "Token invalido" );
    

  });

  test('No tiene los permisos de adminitrador, status:403', async() => { 

    user.roleId = 2;
    const tokenId2 = generateToken(user);

   const response = await request(app)
    .get('/members')
    .set('x-access-token', tokenId2 )
    .set('Accept', 'application/json')
    expect(response.status).toEqual(403);
    expect(response.body.msg).toEqual( 'No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración' );

   });

});

describe('DELETE/members/:id', () => {

  test('No se ah enviado el token de autenticación, status:401', async() => {

   const response = await request(app)
    .delete('/members/1')
    .set('x-access-token', '')
    .set('Accept', 'application/json')
    expect(response.status).toEqual(401);
    expect(response.body.error).toEqual( "No se ha enviado el token de autenticación" );

  });

  test('Token invalido, status:400', async() => { 

   const response = await request(app)
    .delete('/members/1')
    .set('x-access-token', tokenNull )
    .set('Accept', 'application/json')
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual( "Token invalido" );
   
  });

  test('El miembro no existe en DB, status 404', async() => { 

   const response = await request(app)
      .delete('/members/ABC123')
      .set('x-access-token', token)
      .set('Accept', 'application/json')
      expect(response.status).toEqual(404);
      expect(response.body.message).toEqual( "Member not found" );

   });

  test('Debera eliminar un member, status 200', async() => { 

  const response = await request(app)
      .delete('/members/1')
      .set('x-access-token', token)
      .set('Accept', 'application/json')
      expect(response.status).toEqual(200)
      expect(response.body.message).toEqual("Deleted")
      expect(response.body.id).toEqual('1')
   });

});

