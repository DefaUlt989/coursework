    document.addEventListener('DOMContentLoaded', function () {
        const roomTypes = document.querySelectorAll('.room');

        roomTypes.forEach(roomType => {
            roomType.addEventListener('click', function () {
                const roomContainer = this.closest('.rooms__container');
                const roomDescription = roomContainer.querySelector('.room__description');
                const iconPath = this.querySelector('.room__icon-path');

                roomDescription.classList.toggle('active');

                if (roomDescription.classList.contains('active')) {
                    animateArrow(iconPath, 'M10 26.5L22 14.5L34 26.5');
                } else {
                    animateArrow(iconPath, 'M10 17.5L22 29.5L34 17.5');
                }
            });
        });

        function animateArrow(iconPath, targetPath) {
            const startPath = iconPath.getAttribute('d');
            const startPoints = parsePathString(startPath);
            const endPoints = parsePathString(targetPath);

            const animation = iconPath.animate([
                {d: startPath},
                {d: targetPath}
            ], {
                duration: 300,
                easing: 'ease-in-out',
                fill: 'forwards'
            });

            animation.onfinish = () => {
                iconPath.setAttribute('d', targetPath);
            };
        }

        function parsePathString(pathString) {
            return pathString.match(/[0-9]+(\.[0-9]+)?/g).map(Number);
        }
    });