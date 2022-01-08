const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { get } = require('express/lib/response')
const fetchTrendingCoins = require('./javascript/api')

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
    let data = fetchTrendingCoins
    
    data 
        .then(
            console.log(`\n~~~~~ ~~~~~ ~~~~~ ~~~~~\n~~~~~ ~~~~~ ~~~~~ ~~~~~\n~~~~~ ~~~~~ ~~~~~ ~~~~~\nDATA:\n ${data}`)
        )
        .then(data => {
            response.render('crypto', {
                title: "A Simple Ste with APIs",
                author: "mabus",
                data: data
            })
        })
        .catch(error => {
            console.log("\nERROR\nERROR\nERROR\nERROR")
            response.render('crypto', {
                title: "A Simple Ste with APIs",
                author: "mabus"
            })
        }) 

})


app.get('*', (request, response) => {
     response.render('404', {
        title: "A Simple Ste with APIs",
        author: "mabus"
     })
})

// LAUNCHING SERVER
app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})
