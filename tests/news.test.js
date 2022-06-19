const app = require('../app')
const request = require('supertest')
const generateToken = require('../middleware/userToken')


const news = {
    title: 'Test news',
    content: 'Test news content',
    image: 'imageTest.jpg'
}

const user = {
    id: 1,
    name: 'Test user',
    roleId: 1,
}

const token = generateToken(user)


describe('GET /news', () => {

    describe('Muestra todas las noticias', () => {  

        test('Deberia mostrar todas las noticias', () => {
        request(app)
            .get('/news')
            .send(news)
            .expect(200)
            .expect('Content-Type', /json/)        
        }) 
    })

    describe('Error por no encontrar noticias',  () => {
        const news = '';
    
        test('Deberia mostrar error por no encontrar ninguna noticia', () => {
            request(app)
            .get('/news')
            .send(news)
            .expect(404)
            .expect('Content-Type', /json/)        
        })
    })
})

describe('GET /news/:id', () => {

    describe('Muestra una noticia', () => {
        const news = {
            id: 1,
            title: 'Test news',
            content: 'Test news content',
            image: 'imageTest.jpg'
        }
            
    test('Deberia mostrar una noticia', () => {
    request(app)
    .get('/news/:id')
    .send(news)
    .expect(200)
    .expect('Content-Type', /json/)
    })
})

    describe('Noticia sin title', () => {
        const newsError = {
            image: 'imageTest.jpg',
            content: 'Test news content'
        }
    

    test('Deberia mostrar Error 404', () => {
        request(app)
        .get('/news/:id')
        .send(newsError)
        .expect(404)
        .expect('Content-Type', /json/)
    })
})
})

describe('POST /news', () => {

    describe('Crea una noticia', () => {
        
        test('Deberia crear una noticia', () => {
            request(app)
            .post('/news')
            .set('x-access-token', token)
            .send(news)
            .expect(200)
            .expect('Content-Type', /json/)
        })
    })

    describe('Error por no ser Administrador', () => {

        test('Deberia mostrar error por no ser Administrador', () => {
            request(app)
            .post('/news')
            .send(news)
            .expect(401)
            .expect('Content-Type', /json/)
        })
    })




})
