document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.neko-inn-mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeIcon = document.querySelector('.close-icon');
    const mobileThemeSwitcher = document.getElementById('theme-toggle-mobile');
    const body = document.body;

    function closeMobileMenu() {
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function handleThemeChange(isChecked) {
        const newTheme = isChecked ? 'light' : 'dark';
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.add('closing');
            setTimeout(() => {
                body.classList.remove('light-theme', 'dark-theme');
                body.classList.add(`${newTheme}-theme`);

                mobileMenu.classList.remove('open', 'closing');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }, 300);
        } else {
            body.classList.remove('light-theme', 'dark-theme');
            body.classList.add(`${newTheme}-theme`);
        }
    }

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    closeIcon.addEventListener('click', closeMobileMenu);

    mobileThemeSwitcher.addEventListener('change', function (event) {
        handleThemeChange(event.target.checked);
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', closeMobileMenu);
    });
        const bookingNow = document.querySelectorAll('.book-now-btn');
    bookingNow.forEach(item => {
        item.addEventListener('click', closeMobileMenu);
    });
});