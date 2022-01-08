const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { get } = require('express/lib/response')

// CONSTANTS
const app = express()
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// SETUP
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// ROUTES

app.get('', (request, response) => {
     response.render('index', {
         title: "A Simple Site with APIs"
     })
})




app.get('*', (request, response) => {
     response.send('404 NOT FOUND.')
})

// LAUNCHING SERVER
app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})
