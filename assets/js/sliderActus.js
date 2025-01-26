const indexActus = document.getElementById('actus_index');
const slider = document.querySelector('#actus_slides');
const arrowButtons = document.querySelectorAll('#actus_interactible_arrows button');
const imgs = document.querySelectorAll('.actus_image[img-url]');
const progressIndicator = document.querySelector('.progress-indicator');
const progressBar = document.getElementById('slider-progress-bar'); 
let actusIndex = 0;

imgs.forEach(img => {
    img.style.backgroundImage = `url(\'${img.getAttribute('img-url')}\')`;
});

// Ne pas avoir d'erreur d'index
function slide(nextIndex) {
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= 10) nextIndex = 9;

    // Mettre la position à jour
    slider.style.transform = `translateX(-${(nextIndex / 10) * 100}%)`;
    actusIndex = nextIndex;

    // Mettre l'affichage à jour
    indexActus.innerHTML = `<span>${actusIndex + 1}/</span>10`;

    // Calcul proportionnel de la position
    const progressWidth = progressBar.offsetWidth; 
    const indicatorWidth = progressIndicator.offsetWidth; 
    // Position max parce que mon indicateur sortait de la barre
    const maxOffset = progressWidth - indicatorWidth; 
    // Prendre en compte la taille de l'indicateur (c'est en partie pour ça que mon indicateur sortait de la barre)
    const progressPosition = (actusIndex / 9) * maxOffset; 
    progressIndicator.style.left = `${progressPosition}px`; 
}

// Changer de slide en cliquant sur une des flèches
arrowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const indexChange = +button.getAttribute('index-change');
        slide(actusIndex + indexChange);
    });
});
