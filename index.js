const express = require('express')
const { path } = require('express/lib/application')

const app = express()
const PORT = process.env.PORT || 4000

const publicRoutes = require('./routes')
const adminRoutes = require('./routes.admin')

app.use('/public', express.static(path.join(__dirname, '/public')))

app.use('/admin/public', express.static(path.join(__dirname, '/admin/public')))

app.use(publicRoutes)
app.use('/admin', adminRoutes)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
