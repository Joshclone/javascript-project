const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 4000;
let slideInterval;
const nextSlide = () => {
    //Get current class
    const currrent = document.querySelector('.current');
    //Remove current class
    currrent.classList.remove('current');
    //check for next slide
    if (currrent.nextElementSibling) {
        //Add current to next sibling
        currrent.nextElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    //Get current class
    const currrent = document.querySelector('.current');
    //Remove current class
    currrent.classList.remove('current');
    //check for prev slide
    if (currrent.previousElementSibling) {
        //Add current to prev sibling
        currrent.previousElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

//Button events
next.addEventListener('click', e => {
    nextSlide();

    if (auto) {

        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

});

prev.addEventListener('click', e => {
    prevSlide();

    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});


// Auto .slide.current
if (auto) {
    //Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);

}
//