const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderList = document.querySelector('.list');
const items = Array.from(sliderList.children);
const totalItems = items.length;
let currentIndex = 0; // Position actuelle du slider

// Fonction pour ajuster les positions des images
function updatePositions() {
    items.forEach((item, index) => {
        const position = (index + currentIndex) % totalItems; // Calcul circulaire pour positionner les images
        item.style.setProperty('--position', position + 1); // Mise à jour de la position avec CSS variable
    });
}

// Fonction pour passer à l'image suivante
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems; // Défilement circulaire
    updatePositions();
}

// Fonction pour revenir à l'image précédente
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Défilement circulaire
    updatePositions();
}

// Ajouter des événements de clic pour les flèches
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Initialisation des positions au début
updatePositions();

