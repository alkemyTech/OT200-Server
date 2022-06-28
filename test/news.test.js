const app = require('../app')
const request = require('supertest')
const generateToken = require('../middleware/userToken')
const {findAll} = require('../services/news')



const news = {
    name: 'Test news',
    content: 'Test news content',
    image: 'imageTest.jpg'
}

const user = {
    id: 1,
    name: "userAdmin",
    roleId: 1,
}
const userPublic = {
    id:2,
    name: "userPublic",
    roleId: 2,

}

const token = generateToken(user)
const tokenPublic = generateToken(userPublic)


describe('POST /news', () => {

    describe('Crea una noticia', () => {

        test('Debera crear una noticia', async () => {
            await request(app)
            .post('/news')
            .set('x-access-token', token)
            .send(news)
            .expect(201)
            .expect('Content-Type', /application\/json/)
            .expect(response => {
                expect(response.body).toBeInstanceOf( Object );
            })            
        })
    })

    describe('Error por no cumplir con las validaciones', () => {

        const news = {
            name: '',
            content: '',
            image: ''
        }

        test('Debera mostrar error por no cumplir con las validaciones', async () => {
            await request(app)
            .post('/news')
            .set('x-access-token', token)
            .send(news)
            .expect(400)
            .expect('Content-Type', /application\/json/)
            .expect(response => {
                expect(response.body).toEqual({
                    "errors": [
                        {
                            "value": '',
                            "msg": "Image is required",
                            "param": "image",
                            "location": "body"
                        },
                        {
                            "value": '',
                            "msg": "Title is required",
                            "param": "name",
                            "location": "body"
                        },
                        {
                            "value": '',
                            "msg": "Title must be between 3 and 15 characters long",
                            "param": "name",
                            "location": "body"
                        },
                        {
                            "value": '',
                            "msg": "Content is required",
                            "param": "content",
                            "location": "body"
                        },
                        {
                            "value": '',
                            "msg": "Content must be at least 10 characters long",
                            "param": "content",
                            "location": "body"
                        },
                      ]
                })                
            })             
        })
    })
})


describe('GET /news/:id', () => {

    describe('Muestra una noticia',  () => {
        
        test('Debera mostrar una noticia', async () => {
         
        const news = await findAll();

        const rowsNew = news.rows 

        const rowsId = rowsNew[rowsNew.length-1]

        await request(app)
            .get(`/news/${rowsId.id}`)        
            .set('x-access-token', token)
            .set('Accept', /application\/json/)
            .expect(200)
            .expect(response => {
                expect(response.body.message).toEqual('Noticia encontrada')
            })
    })
})

      describe('Noticia inexistente', () => {
    
      test('Error por id inexistente', async () => {
        await request(app)
          .get(`/news/${0}`)
          .set('x-access-token', token)
          .send(news)
          .expect(404)
          .expect('Content-Type', /application\/json/)
          .expect(response => {
            expect(response.body.message).toEqual('No se encontró la noticia')
        })
      })
  })
 })

describe('PUT /news/:id', () => {
    
    describe('Actualiza una noticia', () => {
        const newsUpdate = {
            name: 'New title',
            content: 'New content',
            image: 'newImageTest.jpg'
        }

        test('Debera actualizar una noticia', async () => {
            
            const news = await findAll();

            const rowsNew = news.rows 

            const rowsId = rowsNew[rowsNew.length-1]          

            await request(app)
            .put(`/news/${rowsId.id}`)
            .set('x-access-token', token)
            .send(newsUpdate)
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect(response => {
                // expect(response.body.msg).toEqual('Noticia actualizada')
                (console.log(response.body))
            })                      
    })
})

    describe('Error por no ser Administrador', () => {
            
            test('Debera mostrar error por no ser Administrador', async () => {
                await request(app)
                .put(`/news/${1}`)                
                .set('x-access-token', tokenPublic)
                .send(news)
                .expect(403)
                .expect('Content-Type', /application\/json/)
                .expect(response => {
                    expect(response.body.msg).toEqual('No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración')                    
                })                
            }
        )
    }
    )

    describe('Error por no cumplir con las validaciones', () => {

        const news = {
            name: '',
            content: '',
            image: ''
        }

        test('Deberia mostrar error por no cumplir con las validaciones', async () => {
            await request(app)
            .put(`/news/${1}`)
            .set('x-access-token', token)
            .send(news)
            .expect(400)
            .expect('Content-Type', /application\/json/)
            .expect(response => {
                expect(response.body).toEqual({
                    "errors": [
                        {
                            "value": '',
                            "msg": "Image is required",
                            "param": "image",
                            "location": "body"
                        },
                        {
                            "value": '',
                            "msg": "Title is required",
                            "param": "name",
                            "location": "body"
                        },
                        {
                            "value": '',
                            "msg": "Title must be between 3 and 15 characters long",
                            "param": "name",
                            "location": "body"
                        },
                        {
                            "value": '',
                            "msg": "Content is required",
                            "param": "content",
                            "location": "body"
                        },
                        {
                            "value": '',
                            "msg": "Content must be at least 10 characters long",
                            "param": "content",
                            "location": "body"
                        },
                      ]
                })                
            })             
        })
    })
})

describe('DELETE /news/:id', () => {

    describe('Elimina una noticia', () => {

    test('Debera eliminar una noticia', async () => {
        
        const news = await findAll();

        const rowsNew = news.rows 

        const rowsId = rowsNew[rowsNew.length-1]

        await request(app)
        .delete(`/news/${rowsId.id}`)
        .set('x-access-token', token)
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .expect(response => {
            expect(response.body.message).toEqual('Deleted')
        })         
    })
    })

    describe('Error por no encontrar la noticia', () => {
       
        test('Debera mostrar error por no encontrar la noticia', async () => {
           await request(app)
            .delete(`/news/${999}`)
            .set('x-access-token', token)
            .expect(404)
            .expect('Content-Type', /application\/json/)            
            .expect(response => {
                expect(response.body.message).toEqual('News not found')}
            )  
        })
    })

    describe('Error por no ser Administrador', () => {
        
        test('Debera mostrar error por no ser Administrador', async () => {
           await request(app)
            .delete(`/news/${1}`)
            .set('x-access-token', tokenPublic)
            .send(news)
            .expect(403)
            .expect('Content-Type', /application\/json/)            
            .expect(response => {
                expect(response.body.msg).toEqual('No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración')
            })  
        })
    })

})

