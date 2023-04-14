const numbersOfFilms = prompt('Сколько фильмов вы уже посомотрели?', '');

const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const nameOfFilm = prompt('Один из последних просмотренных фильмов', '');
const rateOfFilm = prompt('Насколько оцените фильм?', '');
const nameOfFilm2 = prompt('Один из последних просмотренных фильмов', '');
const rateOfFilm2 = prompt('Насколько оцените фильм?', '');

personalMovieDB.movies[nameOfFilm] = rateOfFilm;
personalMovieDB.movies[nameOfFilm2] = rateOfFilm2;

console.log(personalMovieDB);