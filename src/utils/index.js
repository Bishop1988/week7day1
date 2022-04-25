// create a empty array to store data
const movieArr = []

const foodArr = []

// create Move class for title and actor object
// 'this' keyword refers to the object it belongs to 
class Movie {
    constructor(title, actor = "Not specified", genre, rating) {
        this.title = title
        this.actor = actor
        this.genre = genre
        this.rating = rating
    }
    // small function to add cli input to the movieArr
    add() {
        movieArr.push(this)
    }
}

class Food {
    constructor(food, price, color, isGood) {
        this.food = food
        this.price = price
        this.color = color
        this.isGood = isGood
    }

    addFood () {
        foodArr.push(this)
    }
}

module.exports = {
    Movie,
    movieArr,

    Food,
    foodArr
}