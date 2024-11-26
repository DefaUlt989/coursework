    document.addEventListener('DOMContentLoaded', function () {
        const carouselItems = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function updateCarousel() {
            carouselItems.forEach((item, index) => {
                item.classList.remove('active');
                if (index === currentIndex) {
                    item.classList.add('active');
                }
            });
        }

        updateCarousel();
    });