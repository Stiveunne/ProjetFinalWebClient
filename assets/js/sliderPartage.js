function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = slider.children[0].clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    //lié à l'affichage pour avoir une couleur sur le bouton sélectionné
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[index].classList.add('active');
}