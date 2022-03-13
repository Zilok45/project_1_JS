"use strict";

const numberOfFilms = +prompt("Сколько фильмо вы уже смотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// FIRST METHOD
for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последний просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != " " && b != " " && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}
/*  SECOND METHOD
let num = 0;
while (num < 2) {

    const a = prompt("Один из последний просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != " " && b != " " && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
        num++;
    } else {
        console.log('Error');
        num--;
    }
}
*/
/* THIRD METHOD
let num = 0;
do {
    const a = prompt("Один из последний просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != " " && b != " " && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
        num++;
    } else {
        console.log('Error');
        num--;
    }
} while(num < 2);
*/


if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классный зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);