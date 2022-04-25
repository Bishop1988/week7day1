const yargs = require("yargs")

const { Movie, movieArr } = require("./utils")

const { Food, foodArr } = require("./utils")

// console.log(yargs.argv)

const app = (yargsObj) => {
    if (yargsObj.addMovie) {
        const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.genre, yargsObj.rating)
        movie.add()
        console.log(movieArr)
    } else if (yargsObj.addMany) {
        const movie1 = new Movie(yargsObj.title, yargsObj.actor, yargsObj.genre, yargsObj.rating)
        const movie2 = new Movie(yargsObj.title, yargsObj.actor, yargsObj.genre, yargsObj.rating)
        movie1.add1()
        movie2.add2()
    }  else {
        console.log("Incorrect Command")
    }

    if (yargsObj.addFood) {
        const newFood = new Food(yargsObj.food, yargsObj.price, yargsObj.color, yargsObj.isGood)
        newFood.addFood()
        console.log(newFood)
    } else {
        console.log("Incorrect Command")
    }
}

app(yargs.argv)