const axios = require('axios').default

let url = "https://api.coingecko.com/api/v3"

const fetchTrendingCoins = new Promise ((resolve, reject) => {
    axios.get(url + '/search/trending')
        .then((response) => {
            if (response.status >= 200 && response.status <300) {
                // console.log(response.data.coins)
                resolve (response.data.coins)
            } else {
                // console.log("Error connecting to the Server.")
                reject ({
                    error: "Unable to fetch results. Check your connection or try again later."
                })
            }
            
        })
        .catch((error) => {
            reject({
                error: "Error accessing the server."
            })
        })
})  

// HOW TO USE
// let data = fetchTrendingCoins

// data
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

module.exports = fetchTrendingCoins