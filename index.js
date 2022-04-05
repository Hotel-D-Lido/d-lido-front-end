const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({
  origin: ['http://localhost:3000']
}))

const publicRoutes = require('./routes')
const adminRoutes = require('./routes.admin')

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/controllers', express.static(path.join(__dirname, '/controllers')))

app.use('/admin/public', express.static(path.join(__dirname, '/admin/public')))

app.use(publicRoutes)
app.use('/admin', adminRoutes)
app.use('/adminReserva', adminRoutes)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
