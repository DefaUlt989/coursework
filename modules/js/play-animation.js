const toggleIcons = document.querySelectorAll('.icon-toggle');

toggleIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
    });
});