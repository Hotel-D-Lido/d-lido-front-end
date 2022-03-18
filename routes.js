const express = require('express')
const router = express.Router()
const path = require('path')

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

module.exports = router
