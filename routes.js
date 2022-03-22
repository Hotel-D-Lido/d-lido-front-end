const express = require('express')
const router = express.Router()
const path = require('path')
const authorizationMiddleware = require('./middlewares/authorization.middleware')

/* Home page */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})

/* About page */
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'))
})

/* Register page */
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/register.html'))
})

/* Login page */
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'))
})

/* Rooms List page */
router.get('/rooms', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/rooms.html'))
})

/* Booking page */
router.get('/rooms/:room_id/book', authorizationMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'views/booking.html'))
})

module.exports = router
