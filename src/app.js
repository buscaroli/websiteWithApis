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
app.use(express.static(publicDirPath))
hbs.registerPartials(partialsPath)


// ROUTES

app.get('', (request, response) => {
     response.render('index', {
         title: "A Simple Site with APIs",
         author: "mabus"
     })
})

app.get('/about', (request, response) => {
     response.render('about', {
         title: "A Simple Ste with APIs",
         author: "mabus"
     })
})

app.get('/crypto', (request,response) => {
     response.render('crypto', {
        title: "A Simple Ste with APIs",
        author: "mabus",
        data: 
            [
                {
                    name: "bitcoin",
                    symbol: "BTC",
                    price: "32050.25$"
                },
                {
                    name: "ethereum",
                    symbol: "ETH",
                    price: "4000.50$"
                },
                {
                    name: "cardano",
                    symbol: "ADA",
                    price: "500.20$"
                }
            ]
     })
})


app.get('*', (request, response) => {
     response.send('404 NOT FOUND.')
})

// LAUNCHING SERVER
app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})
