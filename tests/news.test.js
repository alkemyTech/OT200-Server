const app = require('../app')
const request = require('supertest')
const generateToken = require('../middleware/userToken')
const db = require('../models')



const news = {
    name: 'Test news',
    content: 'Test news content',
    image: 'imageTest.jpg'
}

const user = {
    id: 1,
    roleId: 1,
}
const userPublic = {
    id:2,
    roleId: 2,

}

const token = generateToken(user)
const tokenPublic = generateToken(userPublic)

beforeEach(async () => {

    await db.News.destroy({where:{} ,truncate: true, cascade: true })

})


describe('GET /news/:id', () => {

    describe('Muestra una noticia',  () => {

    const id = 1
                
    test('Deberia mostrar una noticia', async () => {
        await request(app)
        .get(`/news/${id}`)        
        .set('x-access-token', tokenPublic)
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


describe('POST /news', () => {

    describe('Crea una noticia', () => {

        test('Deberia crear una noticia', async () => {
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

        test('Deberia mostrar error por no cumplir con las validaciones', async () => {
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

// describe('GET /news', () => {

//     describe('Muestra todas las noticias', () => {  

//         test('Deberia mostrar todas las noticias', () => {
//         request(app)
//             .get('/news')
//               .set('x-access-token', tokenPublic) 
//             .send(news)
//             .expect(200)
//             .expect('Content-Type', /application\/json/)        
//         }) 
//     })

//     describe('Error por no encontrar noticias',  () => {
//         const news = '';
    
//         test('Deberia mostrar error por no encontrar ninguna noticia', () => {
//             request(app)
//             .get('/news')
//             .send(news)
//             .expect(404)
//             .expect('Content-Type', /application\/json/)        
//         })
//     })
// })


describe('PUT /news/:id', () => {
    
    describe('Actualiza una noticia', () => {
        const newsUpdate = {
            id: 1,
            name: 'New title',
            content: 'New content',
            image: 'newImageTest.jpg'
        }

        test('Deberia actualizar una noticia', async () => {
            await request(app)
            .put(`/news/${newsUpdate.id}`)
            .set('x-access-token', token)
            .send(newsUpdate)
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect(response => {
                expect(response.body.msg).toEqual('Noticia actualizada')
            })                      
    })
})

    describe('Error por no ser Administrador', () => {
            
            test('Deberia mostrar error por no ser Administrador', async () => {
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

// describe('DELETE /news/:id', () => {

//     describe('Elimina una noticia', () => {
//         const news = {
//             id: 1
//         }
    
//     test('Deberia eliminar una noticia', async () => {
//         await request(app)
//         .delete(`/news/${news.id}`)
//         .set('x-access-token', token)
//         .expect(200)
//         .expect('Content-Type', /application\/json/)         
//     })
//     })

//     describe('Error por no encontrar la noticia', () => {
//         const news = {
//             id: ''
//         }

//         test('Deberia mostrar error por no encontrar la noticia', async () => {
//            await request(app)
//             .delete(`/news/${news.id}`)
//             .set('x-access-token', token)
//             .expect(404)
//             .expect('Content-Type', /application\/json/)            
//         })
//     })

//     describe('Error por no ser Administrador', () => {

//         test('Deberia mostrar error por no ser Administrador', async () => {
//            await request(app)
//             .delete('/news/:id')
//             .send(news)
//             .expect(401)
//             .expect('Content-Type', /application\/json/)            
//         })
//     })

// })

afterAll(async () => {
    await db.News.destroy({where: {} ,truncate: true, cascade: true })
})
