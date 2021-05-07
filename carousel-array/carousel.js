//  OWL, Slick, ... Bootstrap
// 1. function
// 2. events
// 3. Array, Number
// 4. if/else, for/while

const IMAGES = [
    "img/316-800x600.jpg",
    "img/694-800x600.jpg",
    "img/1031-800x600.jpg"
]

const TITLES = [
    "POD",
    "TREN",
    "CLADIRE"
]

let currentIndex = 0

const EFFECTS = [
    "animate__bounceInLeft",
    "animate__bounceInRight",
    "animate__fadeInLeft",
    "animate__fadeInRight"
]

function showImage( n ) {

    let i = Math.round(Math.random() * 3)

    carouselSlides.innerHTML =
        `
        <img 
            src="${IMAGES[n]}"
            class="animate__animated ${EFFECTS[i]}"
        >
        `
}

function showTitle( n ) {

    carouselTitles.innerHTML =
        `
        <h3 
            class="animate__animated animate__fadeInLeft" animate__fadeInRight"
        >${TITLES[n]}</h3>
        `
}

function showIndicators ( n ) {
    carouselIndicators.innerHTML = ``
    for (i = 0; i < IMAGES.length; i++) {
        if(i == n) {
            carouselIndicators.innerHTML += ` <i class="fas fa-dot-circle"></i> `
        } else {
            carouselIndicators.innerHTML += ` <i class="far fa-dot-circle"></i> `
        }
    }
}

function renderCarousel(n) {
    showImage(n)
    showTitle(n)
    showIndicators(n)
}

function next() {
    if (currentIndex == IMAGES.length - 1) {
        renderCarousel(currentIndex = 0)
    } else {
        renderCarousel(++currentIndex)
    }
}

function prev() {
    if (currentIndex == 0) {
        renderCarousel(currentIndex = IMAGES.length - 1)
    } else {
        renderCarousel(--currentIndex)
    }
}

function play() {
    setInterval(next, 3000)
}

function actionKeybord() {
    switch (event.key) {
        case "ArrowRight": next(); break
        case "ArrowLeft": prev(); break
        case " ": play(); break
    }
}

renderCarousel(currentIndex)