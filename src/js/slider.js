const navButtons = document.querySelectorAll('.hero__slide-btn');
const slides = document.querySelectorAll('.hero__video-slide');

let sliderNav = function(manual){
    navButtons.forEach((navButton) => {
        navButton.classList.remove('active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[manual].classList.add('active');
    navButtons[manual].classList.add('active');
}

navButtons.forEach((navButton, i) => {
    navButton.addEventListener('click', () =>{
        sliderNav(i);
    });
});