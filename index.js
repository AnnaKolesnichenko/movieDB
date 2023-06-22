

'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you seen?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you seen?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: {},
    privat: true
};

function showMyDB(privat) {
    if(privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for(let i = 0; i < 3; i ++) {
        const favorite = prompt(`What is your favorite genre ${i + 1} ?`, '');
        personalMovieDB.genres[i + 1] = favorite;
    }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);


for(let i = 0; i < 2; i++) {
    const lastMovie = prompt('One of the last seen movies?', '');
    const rating = prompt("How do you rate it?", '');

    if(lastMovie != '' && rating != '' && lastMovie != null && rating != null && lastMovie.length < 50) {
            personalMovieDB.movies[lastMovie] = rating;
    }else {

        console.log('error');
        i --;
    }
    
}

if(personalMovieDB.count < 10) {
    console.log('Watched a bit too few');
} else if(personalMovieDB.count < 30) {
    console.log("You are a classical watcher");
} else if(personalMovieDB.count >= 30) {
    console.log("You are a fan!");
} else {
    console.log("Error...something went wrong");
}



