const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderList = document.querySelector('.list');
const items = Array.from(sliderList.children);
const totalItems = items.length;
// Position actuelle
let currentIndex = 0; 

// Update les positions des images
function updatePositions() {
    items.forEach((item, index) => {
        const position = (index + currentIndex) % totalItems;
        item.style.setProperty('--position', position + 1); 
    });
}

// Permet de passer à l'image suivante
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updatePositions();
}

// Permet de revenir à l'image précédente
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; 
    updatePositions();
}

// Event au click
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Positions de départ
updatePositions();

