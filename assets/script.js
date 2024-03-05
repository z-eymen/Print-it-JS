
const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


//On definit les éléments de carrousel
const totalSlides = slides.length;
let currentSlide = 0;
const banner = document.getElementById('banner');
const bannerImg = banner.querySelector('.banner-img');
const bannerText = banner.querySelector('.banner-text');
const dotsContainer = banner.querySelector('.dots');

//Mettre à jour des points  de Carrousel
function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentSlide) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    }
}

//Mettre à jour du slader
function updateSlide() {
    const slide = slides[currentSlide];
    bannerImg.src = slide.image;
    bannerText.innerHTML = slide.tagLine;
    updateDots();
}

//Passer à la slide suivante avec la flèche
function nextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0; // passer la pemière slide
    } else {
        currentSlide++; // Passer à la slide suivante
    }
    updateSlide();
}

// Passer au slide précédente avec la flèche
function prevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1; // Passer à la slide dernière
    } else {
        currentSlide--; // Passer à la slide précédente
    }
    updateSlide();
}

//Mettre les événement 'click' sur les Flèches
const prevButton = banner.querySelector('.arrow_left');
const nextButton = banner.querySelector('.arrow_right');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

//Charger le premier slide
updateSlide();


// Ajouter des événements de clic aux points
dotsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('dot')) {
        const index = Array.from(dotsContainer.children).indexOf(event.target);
        currentSlide = index;
        updateSlide();
    }
});

