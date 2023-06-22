/* Задания на урок:




4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertise = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const mainImg = document.querySelector('.promo__bg');
const moviesList = document.querySelector('.promo__interactive-list');


advertise.forEach(item => {
    item.remove();
})

genre.innerHTML = 'drama';

mainImg.style.background = "url('/img/bg.jpg')";
mainImg.style.backgroundSize = "cover";

function movieList (movies) {
    moviesList.innerHTML = '';
    movieDB.movies.sort();

    return movies.map((item, i) => {
        return `
            <li class="promo__interactive-item">${i + 1} * ${item}
                <div class="delete"></div>
            </li>
            ` ;  
    }).join('');
}
const moviesInGallery = movieList(movieDB.movies);
moviesList.insertAdjacentHTML('beforeend', moviesInGallery);



