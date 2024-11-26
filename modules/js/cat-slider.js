let carouselSwiper;

function initSwiper() {
    if (window.innerWidth <= 1024) {
        if (!carouselSwiper) {
            carouselSwiper = new Swiper(".carouselSwiper", {
                effect: "cards",
                grabCursor: true,
            });
        }
    } else {
        if (carouselSwiper) {

            carouselSwiper.destroy(true, true);
            carouselSwiper = null;
        }
    }
}

window.addEventListener('load', initSwiper);


let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initSwiper, 250);
});