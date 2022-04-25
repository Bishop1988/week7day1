// create a empty array to store data
const movieArr = []

// create Move class for title and actor object
// 'this' keyword refers to the object it belongs to 
class Movie {
    constructor(title, actor = "Not specified") {
        this.title = title
        this.actor = actor
    }
    // small function to add cli input to the movieArr
    add() {
        movieArr.push(this)
    }
}

module.exports = {
    Movie,
    movieArr
}