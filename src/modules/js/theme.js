  document.addEventListener('DOMContentLoaded', function () {
            const themeToggle = document.getElementById('theme-toggle');

            themeToggle.addEventListener('change', function () {
                document.body.classList.remove('fade-out-in');

                setTimeout(() => {
                    document.body.classList.add('fade-out-in');

                    setTimeout(() => {
                        if (this.checked) {
                            document.body.classList.add('light-theme');
                            document.body.classList.remove('dark-theme');
                            localStorage.setItem('theme', 'light');
                        } else {
                            document.body.classList.remove('light-theme');
                            document.body.classList.add('dark-theme');
                            localStorage.setItem('theme', 'dark');
                        }

                        toggleLogo();
                    }, 250);
                }, 10);
            });

            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
                themeToggle.checked = false;
            } else {
                document.body.classList.add('light-theme');
                themeToggle.checked = true;
            }

            toggleLogo();
        });

        function toggleLogo() {
            const logo = document.getElementById('logo');
            if (document.body.classList.contains('dark-theme')) {
                logo.src = logo.getAttribute('data-light');
            } else {
                logo.src = logo.getAttribute('data-dark');
            }
        }
