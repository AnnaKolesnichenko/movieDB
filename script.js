/* Задания на урок:



3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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
const addInput = document.querySelector('.adding__input');
const form = document.querySelector('form.add');
const checkbox = document.querySelector('[type="checkbox"]');
const deleteBasket = document.querySelectorAll('.delete');


advertise.forEach(item => {
    item.remove();
})

genre.innerHTML = 'drama';

mainImg.style.background = "url('/img/bg.jpg')";
mainImg.style.backgroundSize = "cover";

function movieList (movies, container) {
    container.innerHTML = '';
    movies.sort();

    return movies.map((item, i) => {
        return `
            <li class="promo__interactive-item">${i + 1} * ${item}
                <div class="delete"></div>
            </li>
            ` ;  
    }).join('');
}


function addMovieToDB(e) {
    e.preventDefault();
    let inputMovie = addInput.value;
    const checkFav = checkbox.checked;

     if(inputMovie.trim() === '' || inputMovie.trim() === null) {
        return;
    }

    if(inputMovie.length > 21) {
        inputMovie.slice(0, 21);
        inputMovie += '...';
    }

    if(checkFav) {
        console.log('Add this movie to favorites');
    }

    movieDB.movies.push(inputMovie);
    movieDB.movies.sort();
    movieList(movieDB.movies, moviesList);
    const moviesInGallery = movieList(movieDB.movies, moviesList);
    moviesList.insertAdjacentHTML('beforeend', moviesInGallery);   
    form.reset(); 
}

function deleteMovie(deleteBasket) {
    deleteBasket.forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            movieDB.movies.splice(i, 1);
        });
    });
}



const moviesInGallery = movieList(movieDB.movies, moviesList);
moviesList.insertAdjacentHTML('beforeend', moviesInGallery);
form.addEventListener('submit', addMovieToDB);



