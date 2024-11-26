document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.getElementById('theme-toggle');
    const mobileThemeSwitcher = document.getElementById('theme-toggle-mobile');
    const darkCircle = document.querySelector('.darkCircle');
    const lightCircle = document.querySelector('.lightCircle');
    const body = document.body;
    const logo = document.getElementById('logo');
    const mobileMenu = document.querySelector('.neko-inn-mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    body.classList.add('no-transition');

    const defaultTheme = 'light';
    const isLightTheme = true;

    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(`${defaultTheme}-theme`);

    logo.src = logo.getAttribute('data-light');

    themeSwitcher.checked = isLightTheme;
    mobileThemeSwitcher.checked = isLightTheme;

    darkCircle.classList.toggle('grow', !isLightTheme);
    lightCircle.classList.toggle('grow', isLightTheme);

    function handleThemeChange(isChecked) {
        const newTheme = isChecked ? 'light' : 'dark';

        logo.src = isChecked
            ? logo.getAttribute('data-light')
            : logo.getAttribute('data-dark');

        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(`${newTheme}-theme`);

        darkCircle.classList.toggle('grow', !isChecked);
        lightCircle.classList.toggle('grow', isChecked);

        themeSwitcher.checked = isChecked;
        mobileThemeSwitcher.checked = isChecked;

        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    }

    function toggleTheme(event) {
        handleThemeChange(event.target.checked);
    }

    themeSwitcher.addEventListener('change', toggleTheme);
    mobileThemeSwitcher.addEventListener('change', toggleTheme);

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    requestAnimationFrame(() => {
        body.classList.remove('no-transition');
    });
});