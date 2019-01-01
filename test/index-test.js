/* global describe, it */
const request = require('supertest')
const app = require('../app')

describe('identicon Micro Service', () => {
  describe('GET /', () => {
    it('レスポンスコード200が返されること', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
    it('Content-Typeとしてtext/html; charset=utf-8 が返されること', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })
})
