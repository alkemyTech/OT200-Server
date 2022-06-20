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
    firstName: 'Test user',
    lastName: 'Test user',    
    email: 'test@test.com',
    password: 'test1234!',
    roleId: 1,
}

const token = generateToken(user)

beforeAll(async () => {

    await db.News.destroy({where:{} ,truncate: true, cascade: true })

})


describe('POST /news', () => {

    describe('Crea una noticia', () => {

        test('Deberia crear una noticia', (done) => {
            request(app)
            .post('/news')
            .set('x-access-token', token)
            .send(news)
            .expect(201)
            .expect('Content-Type', /json/)
            .end(done)
        })
    })

    describe('Error por no ser Administrador', () => {

        test('Deberia mostrar error por no ser Administrador', (done) => {
            request(app)
            .post('/news')
            .send(news)
            .expect(401)
            .expect('Content-Type', /json/)
            .end(done)
        })
    })

    describe('Error por no cumplir con las validaciones', () => {

        const news = {
            name: '',
            content: '',
            image: ''
        }

        test('Deberia mostrar error por no cumplir con las validaciones', (done) => {
            request(app)
            .post('/news')
            .set('x-access-token', token)
            .send(news)
            .expect(400)
            .expect('Content-Type', /json/)
            .end(done)
        })
    })
})

// describe('GET /news', () => {

//     describe('Muestra todas las noticias', () => {  

//         test('Deberia mostrar todas las noticias', () => {
//         request(app)
//             .get('/news')
//             .send(news)
//             .expect(200)
//             .expect('Content-Type', /json/)        
//         }) 
//     })

//     describe('Error por no encontrar noticias',  () => {
//         const news = '';
    
//         test('Deberia mostrar error por no encontrar ninguna noticia', () => {
//             request(app)
//             .get('/news')
//             .send(news)
//             .expect(404)
//             .expect('Content-Type', /json/)        
//         })
//     })
// })


describe('GET /news/:id', () => {

    describe('Muestra una noticia siendo Usuario',  () => {
        
    test('Deberia mostrar una noticia', (done) => {
        request(app)
        .get(`/news/${news.id}`)
        .send(news)
        .expect(401)
        .expect('Content-Type', /json/)
        .end(done)
    })
})

    describe('Noticia sin title', () => {
        const newsError = {
            name: '',
            image: 'imageTest.jpg',
            content: 'Test news content'
        }
    

    test('Error por no cumplir con las validaciones', (done) => {
        request(app)
        .get(`/news/${news.id}`)
        .send(newsError)
        .expect(401)
        .expect('Content-Type', /json/)
        .end(done)
    })
})
})



// describe('PUT /news/:id', () => {
    
//     describe('Actualiza una noticia', () => {
//         const news = {
//             id: 1,
//             name: 'New title',
//             content: 'New content',
//             image: 'newImageTest.jpg'
//         }

//         test('Deberia actualizar una noticia', (done) => {
//             request(app)
//             .put(`/news/${news.id}`)
//             .set('x-access-token', token)
//             .send(news)
//             .expect(200)
//             .expect('Content-Type', /json/)
//             .end(done)            
//     })
// })

//     describe('Error por no ser Administrador', () => {
            
//             test('Deberia mostrar error por no ser Administrador', (done) => {
//                 request(app)
//                 .put('/news/${news.id}`')
//                 .send(news)
//                 .expect(401)
//                 .expect('Content-Type', /json/)
//                 .end(done)
//             }
//         )
//     }
//     )

//     describe('Error por no encontrar la noticia', () => {
//         const news = {
//             id: '',
//             title: 'New title',
//             content: 'New content',
//             image: 'newImageTest.jpg'
//         }

//         test('Deberia mostrar error por no encontrar la noticia', (done) => {
//             request(app)
//             .put(`/news/${news.id}`)
//             .set('x-access-token', token)
//             .send(news)
//             .expect(404)
//             .expect('Content-Type', /json/)
//             .end(done)
//         })
//     })
// })

// describe('DELETE /news/:id', () => {

//     describe('Elimina una noticia', () => {
//         const news = {
//             id: 1
//         }
    
//     test('Deberia eliminar una noticia', (done) => {
//         request(app)
//         .delete(`/news/${news.id}`)
//         .set('x-access-token', token)
//         .expect(200)
//         .expect('Content-Type', /json/)
//         .end(done)
//     })
//     })

//     describe('Error por no encontrar la noticia', () => {
//         const news = {
//             id: ''
//         }

//         test('Deberia mostrar error por no encontrar la noticia', (done) => {
//             request(app)
//             .delete(`/news/${news.id}`)
//             .set('x-access-token', token)
//             .expect(404)
//             .expect('Content-Type', /json/)
//             .end(done)
//         })
//     })

//     describe('Error por no ser Administrador', () => {

//         test('Deberia mostrar error por no ser Administrador', (done) => {
//             request(app)
//             .delete('/news/:id')
//             .send(news)
//             .expect(401)
//             .expect('Content-Type', /json/)
//             .end(done)
//         })
//     })

// })

afterAll(async () => {
    await db.News.destroy({where: {} ,truncate: true, cascade: true })
    await db.sequelize.close()
})
