'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
	count: +numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let theLastWachedFilm = prompt('Один из последних просмотренных фильмов?', '');
let isRating = prompt('На сколько оцените его?', '');
let c = prompt('Один из последних просмотренных фильмов?', '');
let d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[theLastWachedFilm] = isRating;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);