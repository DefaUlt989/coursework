document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('theme-toggle-mobile');
    const darkCircle = document.querySelector('.darkCircle');
    const lightCircle = document.querySelector('.lightCircle');
    const body = document.body;
    const mobileMenu = document.querySelector('.neko-inn-mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeIcon = document.querySelector('.close-icon');

    body.classList.add('no-animation');

    if (!themeToggle || !mobileThemeToggle || !mobileMenu || !menuToggle || !closeIcon) {
        console.error('Не удалось найти один или несколько элементов в DOM.');
        return;
    }

    const defaultTheme = 'light';
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(`${defaultTheme}-theme`);
    themeToggle.checked = defaultTheme === 'light';
    mobileThemeToggle.checked = defaultTheme === 'light';

    function handleThemeChange(isChecked) {
        const newTheme = isChecked ? 'light' : 'dark';

        body.classList.remove('light-theme', 'dark-theme');

        darkCircle.classList.toggle('grow', !isChecked);
        lightCircle.classList.toggle('grow', isChecked);

        setTimeout(() => {
            body.classList.add(`${newTheme}-theme`);
            lightCircle.classList.remove('grow');
            darkCircle.classList.remove('grow');

            toggleLogo();
            closeMobileMenu();
        }, 300);
    }

    themeToggle.addEventListener('change', function () {
        handleThemeChange(this.checked);
        body.classList.remove('no-animation');
    });

    mobileThemeToggle.addEventListener('change', function () {
        handleThemeChange(this.checked);
        body.classList.remove('no-animation');
    });

    function toggleLogo() {
        const logo = document.getElementById('logo');
        if (body.classList.contains('dark-theme')) {
            logo.src = logo.getAttribute('data-light');
        } else {
            logo.src = logo.getAttribute('data-dark');
        }
    }

    function closeMobileMenu() {
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    closeIcon.addEventListener('click', closeMobileMenu);

    toggleLogo();
});