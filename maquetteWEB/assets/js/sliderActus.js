const indexActus = document.getElementById('actus_index');
const slider = document.querySelector('#actus_slides');
const arrowButtons = document.querySelectorAll('#actus_interactible_arrows button');
const imgs = document.querySelectorAll('.actus_image[img-url]');
let actusIndex = 0;

imgs.forEach(img => {
    img.style.backgroundImage = `url(\'${img.getAttribute('img-url')}\')`;
});

function slide(nextIndex) {
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= 9) nextIndex = 9;
    slider.style.transform = `translateX(-${(nextIndex/10)*99}%)`;
    actusIndex = nextIndex;
    indexActus.innerHTML = `<span>${actusIndex+1}/</span>10`; 
}

arrowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const indexChange =+ button.getAttribute('index-change');
        slide(actusIndex + indexChange);
    });
});