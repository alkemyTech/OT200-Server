const request = require('supertest');
const app = require('../app');
const generateToken = require('../middleware/userToken');
const { getAllCategory } = require('../services/categories');
const { v4: uuidv4 } = require('uuid');


const user = { id: 1, name:'PruebaTest', roleId: 1 }
let token = generateToken(user);
const tokenNull = '12345';
const name = `pruebaTest${uuidv4()}`;

const newData = {
   name,
   description: 'Esto es una descripción de prueba',
   image: 'pruebaTest.png',
} 

const updateData = {
    name,
    description: 'Esto es una actualizacion de prueba',
    image: 'pruebaTest.png',
 } 



describe('POST/categories', () => {

  test('Debera crear una categoria, status: 200', async( ) => {

     const response = await request(app)
      .post('/categories')
      .set('x-access-token', token)
      .send( newData )
      .set('Accept', 'application/json')
      expect(response.status).toEqual(200);
      expect(response.body.category.name).toEqual( name );
      expect(response.body.category.description).toEqual( 'Esto es una descripción de prueba' );
      expect(response.body.category.image).toEqual( 'pruebaTest.png' );
     
   });


  test('Debera devolver un status 400 si no se envian los campos por request', async( ) => { 

     newData.name = '';

     const response = await request(app)
      .post('/categories')
      .set('x-access-token', token)
      .send( newData )
      .set('Accept', 'application/json')
      expect(response.status).toEqual(400);
      expect(response.body.errors[0].msg).toEqual('El campo name es obligatorio');

   });

  test('No se ah enviado el token de autenticación, status:401', async() => {

     const response = await request(app)
      .post('/categories')
      .set('x-access-token', '')
      .set('Accept', 'application/json')
      expect(response.status).toEqual(401);
      expect(response.body.error).toEqual( "No se ha enviado el token de autenticación" );

  });

  test('Token invalido, status:400', async() => { 

     const response = await request(app)
      .post('/categories')
      .set('x-access-token', tokenNull )
      .set('Accept', 'application/json')
      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual( "Token invalido" );

  });

  test('No tiene los permisos de adminitrador, status:403', async() => { 

    user.roleId = 2;
    const tokenId2 = generateToken(user);

   const response = await request(app)
    .post('/categories')
    .set('x-access-token', tokenId2 )
    .set('Accept', 'application/json')
    expect(response.status).toEqual(403);
    expect(response.body.msg).toEqual( 'No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración' );

   });

});


describe("GET/categories", () => {

test('Debera mostrar un listado con todos los miembros, status:200', async() => {

   const response = await request(app)
    .get('/categories')
    .set('x-access-token', token)
    .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
    expect(response.body).toBeInstanceOf( Object );

 });

 test('No se ah enviado el token de autenticación, status:401', async() => {

   const response = await request(app)
    .get('/categories')
    .set('x-access-token', '')
    .set('Accept', 'application/json')
    expect(response.status).toEqual(401);
    expect(response.body.error).toEqual( "No se ha enviado el token de autenticación" );

  });

  test('Token invalido, status:400', async() => { 

   const response = await request(app)
    .get('/categories')
    .set('x-access-token', tokenNull )
    .set('Accept', 'application/json')
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual( "Token invalido" );
    

  });

  test('No tiene los permisos de adminitrador, status:403', async() => { 

    user.roleId = 2;
    const tokenId2 = generateToken(user);

   const response = await request(app)
    .get('/categories')
    .set('x-access-token', tokenId2 )
    .set('Accept', 'application/json')
    expect(response.status).toEqual(403);
    expect(response.body.msg).toEqual( 'No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración' );

   });

});

describe('GET/categories/:id', () => {

    test('No se ah enviado el token de autenticación, status:401', async() => {
  
     const response = await request(app)
      .get('/categories/1')
      .set('x-access-token', '')
      .set('Accept', 'application/json')
      expect(response.status).toEqual(401);
      expect(response.body.error).toEqual( "No se ha enviado el token de autenticación" );
  
    });
  
    test('Token invalido, status:400', async() => { 
  
     const response = await request(app)
      .get('/categories/1')
      .set('x-access-token', tokenNull )
      .set('Accept', 'application/json')
      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual( "Token invalido" );
     
    });
  
    test('No tiene los permisos de adminitrador, status:403', async() => { 
  
      user.roleId = 2;
      const tokenId2 = generateToken(user);
  
     const response = await request(app)
      .get('/categories/1')
      .set('x-access-token', tokenId2 )
      .set('Accept', 'application/json')
      expect(response.status).toEqual(403);
      expect(response.body.msg).toEqual( 'No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración' );
  
     });
  
    test('La categoria no existe en DB, status 404', async() => { 
  
     const response = await request(app)
        .get('/categories/ABC123')
        .set('x-access-token', token)
        .set('Accept', 'application/json')
        expect(response.status).toEqual(404);
      expect(response.body.message).toEqual( `La categoria con id: -ABC123- no existe en DB` );
  
     });
  
    test('Debera regresar la categoria solicitada, status 200', async() => { 
   
        
     const categories = await getAllCategory();
     const category = categories[categories.length - 1];
  
    const response = await request(app)
        .get(`/categories/${category.id}`)
        .set('x-access-token', token)
        .set('Accept', 'application/json')
        expect(response.status).toEqual(200)
        expect(response.body.message).toEqual( 'ok' );
        expect(response.body.category.id).toEqual( category.id );
        expect(response.body.category.name).toEqual( category.name );
        expect(response.body.category.description).toEqual( category.description );
        expect(response.body.category.image).toEqual( category.image );

     });
  
});

describe('PUT/categories/:id', () => {

    test('No se ah enviado el token de autenticación, status:401', async() => {
  
     const response = await request(app)
      .put('/categories/1')
      .set('x-access-token', '')
      .set('Accept', 'application/json')
      expect(response.status).toEqual(401);
      expect(response.body.error).toEqual( "No se ha enviado el token de autenticación" );
  
    });
  
    test('Token invalido, status:400', async() => { 
  
     const response = await request(app)
      .put('/categories/1')
      .set('x-access-token', tokenNull )
      .set('Accept', 'application/json')
      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual( "Token invalido" );
     
    });
  
    test('No tiene los permisos de adminitrador, status:403', async() => { 
  
      user.roleId = 2;
      const tokenId2 = generateToken(user);
  
     const response = await request(app)
      .put('/categories/1')
      .set('x-access-token', tokenId2 )
      .set('Accept', 'application/json')
      expect(response.status).toEqual(403);
      expect(response.body.msg).toEqual( 'No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración' );
  
     });
  
    test('La categoria no existe en DB, status 404', async() => { 
  
     const response = await request(app)
        .put('/categories/ABC123')
        .set('x-access-token', token)
        .send(updateData)
        .set('Accept', 'application/json')
        expect(response.status).toEqual(404);
  
     });

     test('Debera devolver un status 400 si no se envian los campos por request', async( ) => { 

        const response = await request(app)
         .put('/categories/ABC123')
         .set('x-access-token', token)
         .send( {name: ''} )
         .set('Accept', 'application/json')
         expect(response.status).toEqual(400);
         expect(response.body.errors[0].msg).toEqual('El campo name es obligatorio');
   
      });
  
    test('Debera actualizar una categoria, status 200', async() => { 
  
     const categories = await getAllCategory();
     const category = categories[categories.length - 1];
  
    const response = await request(app)
        .put(`/categories/${category.id}`)
        .set('x-access-token', token)
        .send(updateData)
        .set('Accept', 'application/json')
        expect(response.status).toEqual(200)
        expect(response.body.message).toEqual( 'Categoria actualizada' );

     });
  
});  

describe('DELETE/categories/:id', () => {

  test('No se ah enviado el token de autenticación, status:401', async() => {

   const response = await request(app)
    .delete('/categories/1')
    .set('x-access-token', '')
    .set('Accept', 'application/json')
    expect(response.status).toEqual(401);
    expect(response.body.error).toEqual( "No se ha enviado el token de autenticación" );

  });

  test('Token invalido, status:400', async() => { 

   const response = await request(app)
    .delete('/categories/1')
    .set('x-access-token', tokenNull )
    .set('Accept', 'application/json')
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual( "Token invalido" );
   
  });

  test('No tiene los permisos de adminitrador, status:403', async() => { 

    user.roleId = 2;
    const tokenId2 = generateToken(user);

   const response = await request(app)
    .delete('/categories/1')
    .set('x-access-token', tokenId2 )
    .set('Accept', 'application/json')
    expect(response.status).toEqual(403);
    expect(response.body.msg).toEqual( 'No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración' );

   });

  test('La categoria no existe en DB, status 404', async() => { 

   const response = await request(app)
      .delete('/categories/ABC123')
      .set('x-access-token', token)
      .set('Accept', 'application/json')
      expect(response.status).toEqual(404);
      expect(response.body.message).toEqual( "Category not found");

   });

  test('Debera eliminar una categoria, status 200', async() => { 

   const categories = await getAllCategory();
   const category = categories[categories.length - 1];

  const response = await request(app)
      .delete(`/categories/${category.id}`)
      .set('x-access-token', token)
      .set('Accept', 'application/json')
      expect(response.status).toEqual(200)
      expect(response.body.message).toEqual("Deleted")
      expect(response.body.id).toEqual( String(category.id) )
   });

});

