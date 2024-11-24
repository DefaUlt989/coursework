document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', function () {
        const items = this.parentElement.querySelector('.pricing-card-items');
        const iconPath = this.querySelector('.pricing__icon-path');

        items.classList.toggle('active');

        if (items.classList.contains('active')) {
            animateArrow(iconPath, 'M10 26.5L22 14.5L34 26.5');
            items.querySelectorAll('.pricing-card-item').forEach((item, index) => {
                item.style.animation = `slideIn 0.5s ease forwards ${index * 0.1}s`;
            });
        } else {
            animateArrow(iconPath, 'M10 17.5L22 29.5L34 17.5');
            items.querySelectorAll('.pricing-card-item').forEach(item => {
                item.style.animation = 'none';
            });
        }
    });
});

function animateArrow(iconPath, targetPath) {
    const startPath = iconPath.getAttribute('d');
    const totalLength = iconPath.getTotalLength();

    iconPath.style.strokeDasharray = totalLength;
    iconPath.style.strokeDashoffset = totalLength;

    const animation = iconPath.animate([
        { strokeDashoffset: totalLength },
        { strokeDashoffset: 0 }
    ], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    animation.onfinish = () => {
        iconPath.setAttribute('d', targetPath);
        iconPath.style.strokeDashoffset = 0;
    };
}
