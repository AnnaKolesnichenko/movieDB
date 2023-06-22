/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

'use strict';


let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: [],
    genres: [],
    privat: true,

    start: () => {
        personalMovieDB.count = +prompt("How many movies have you seen?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies have you seen?", '');
        }
    },

    showMyDB: (privat) => {
        if(privat) {
            console.log(personalMovieDB);
        }
    },
    
    writeYourGenres: () => {

        for(let i = 0; i < 3; i ++) {
            let favorite = prompt(`What is your favorite genre ${i + 1} ?`, '');
            if(favorite == '' || favorite == null) {
                favorite = prompt(`What is your favorite genre ${i + 1} ?`, '');
            }else{
                personalMovieDB.genres[i + 1] = favorite;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre ${i} -- ${item}`);
        })
    },

    toggleVisibleMyDB: () =>{
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }personalMovieDB.privat = true;
    }

};

// personalMovieDB.start();

personalMovieDB.writeYourGenres();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);


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









