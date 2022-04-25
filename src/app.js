const yargs = require("yargs")

const { Movie, movieArr, movie1Arr, movie2Arr } = require("./utils")

const { Food, foodArr } = require("./utils")

// console.log(yargs.argv)

const app = (yargsObj) => {
    if (yargsObj.addMovie) {
        const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.genre, yargsObj.rating)
        movie.add()
        console.log(movieArr)
    } else if (yargsObj.addMany) {
        const movie1 = new Movie(yargsObj.title1, yargsObj.actor1, yargsObj.genre1, yargsObj.rating1)
        const movie2 = new Movie(yargsObj.title2, yargsObj.actor2, yargsObj.genre2, yargsObj.rating2)
        movie1.add1()
        movie2.add2()
        console.log(movie1Arr)
        console.log(movie2Arr)
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