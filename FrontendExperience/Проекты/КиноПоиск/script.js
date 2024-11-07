const burgerBtn = document.querySelector('.nav__burger')
const mobileNav = document.querySelector('.nav__list-mobile')
let props=1;
const aboutUs=document.querySelector('.about__us')
// const needSection=document.querySelector('.container')
// const pageText=document.querySelector('.film-page')



burgerBtn.addEventListener('click', () => {
    if (!mobileNav.classList.contains('active')) {
        mobileNav.classList.add('active')
        burgerBtn.classList.add('active')
    } else {
        mobileNav.classList.remove('active')
        burgerBtn.classList.remove('active')
    }
})
const searchButton=document.querySelector('.form__button')
let filmList = document.querySelector('.film-list')
const filmArea = document.querySelector('.film-area')
const logo = document.querySelector('.logo')
let searchField=document.querySelector('.nav__input')

getFilms(props)
searchButton.addEventListener('click',(e)=>{
    e.preventDefault()
    let query=searchField.value;
    searchFilm(query)
    
})
function getFilms(props) {
    $.get(`https://api.themoviedb.org/3/discover/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=+${props}+`)
        .then(response => {
            drawFilms(response.results)})
            // pageText.innerHTML=`${props}`
}

logo.addEventListener('click', () => {
    const filmPage = filmArea.querySelector('.film-page')
    if (filmPage) {
        filmPage.remove()
    }
    if (!filmArea.querySelector('.film-list')) {
        filmList = document.createElement('div')
        filmList.classList.add('film-list')
        filmArea.appendChild(filmList)
        getFilms()
    }
})



function drawFilms(films) {
    const prevFilms=document.querySelectorAll('.film-list__card')
    prevFilms.forEach((film)=>{
        film.remove()
    })
    console.log(films)
    films.forEach(film => {
        const filmElement = document.createElement('div')
        filmElement.addEventListener('click', () => showFilm(film))
        filmElement.classList.add('film-list__card')
        filmElement.innerHTML = `
                <div class="film-list__card-header">
                    <div class="film-list__card-image">
                        <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="">
                    </div>
                </div>
                <div class="film-list__card-footer">
                    <div class="film-list__card-info">
                        <div class="film-list__card-title">
                            <h2>${film.title}</h2>
                        </div>
                        <div class="film-list__card-year">
                            <span>${film.release_date}</span>
                        </div>
                    </div>
                    <a href="#" class="film-list__card-button">Подробнее</a>
                </div>
        `
        filmList.appendChild(filmElement)
    })
}

function showFilm(film) {
    filmList.remove()
    let filmPage = document.createElement('div')
    filmPage.classList.add('film-page')
    filmPage.innerHTML = `
        <div class="film-page__left">
            <div class="film-page__image">
                <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="">
                <span class="film-page__rating">${film.vote_average}</span>
            </div>
            <h2 class="film-page__title">${film.title}</h2>
            
            <span class="film-page__year">${film.release_date}</span>
        </div>
        <div class="film-page__right">
            <div class="film-page__description">
                <h3 class="film-page__subtitle">Описание</h3>
                <p>Оригинальное название ${film.original_title}. ${film.overview}</p>
            </div>
            <div class="film-page__"></div>
        </div>
    `
    filmArea.appendChild(filmPage)
}
function searchFilm(query) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=" +
     ${query}+
    "&page=1`;
    let response = $.get(url)
    .then(response=>drawFilms(response.results))   
    // return response.results;
  }
function plusOdin(){
    props=props+1;
    getFilms(props)
    if(props>=500){
        props=500;
    }
}
function minusOdin(){
    props=props-1;
    getFilms(props)
    if(props<=0){
        props=1;
    }
}
function plusDesyat(){
    props=props+10;
    getFilms(props)
    if(props>=500){
        props=500;
    }
}
function minusDesyat(){
    props=props-10;
    if(props<=0){
        props=1;
    }
    getFilms(props)
}

// let thisPage = document.createElement('div')
//     thisPage.innerHTML = `
//         <span class="button">${props}</span>
//     `