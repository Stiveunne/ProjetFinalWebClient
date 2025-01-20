function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = slider.children[0].clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}