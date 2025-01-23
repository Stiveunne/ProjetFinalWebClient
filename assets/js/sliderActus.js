const indexActus = document.getElementById('actus_index');
const slider = document.querySelector('#actus_slides');
const arrowButtons = document.querySelectorAll('#actus_interactible_arrows button');
const imgs = document.querySelectorAll('.actus_image[img-url]');
const progressIndicator = document.querySelector('.progress-indicator');
const progressBar = document.getElementById('slider-progress-bar'); // Barre de progression
let actusIndex = 0;

imgs.forEach(img => {
    img.style.backgroundImage = `url(\'${img.getAttribute('img-url')}\')`;
});

function slide(nextIndex) {
    // S'assurer que l'index reste dans les limites [0, 9]
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= 10) nextIndex = 9;

    // Mettre à jour la position du slider
    slider.style.transform = `translateX(-${(nextIndex / 10) * 100}%)`;
    actusIndex = nextIndex;

    // Mettre à jour l'affichage de l'index
    indexActus.innerHTML = `<span>${actusIndex + 1}/</span>10`;

    // Calcul proportionnel de la position
    const progressWidth = progressBar.offsetWidth; // Largeur totale de la barre
    const indicatorWidth = progressIndicator.offsetWidth; // Largeur de l'indicateur
    const maxOffset = progressWidth - indicatorWidth; // Position maximale pour éviter de dépasser

    const progressPosition = (actusIndex / 9) * maxOffset; // Position proportionnelle en tenant compte de la taille de l'indicateur
    progressIndicator.style.left = `${progressPosition}px`; // Déplacer l'indicateur
}

arrowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const indexChange = +button.getAttribute('index-change');
        slide(actusIndex + indexChange);
    });
});
