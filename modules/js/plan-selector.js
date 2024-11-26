    document.addEventListener('DOMContentLoaded', function () {
        const selectOpener = document.getElementById('selectOpener');
        const planSelect = document.getElementById('planSelect');
        let isOpen = false;

        selectOpener.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (!isOpen) {
                openSelect();
            } else {
                closeSelect();
            }
        });

        function openSelect() {
            planSelect.focus();
            if (typeof planSelect.showPicker === 'function') {
                planSelect.showPicker();
            } else {
                const keyEvent = new KeyboardEvent('keydown', {
                    bubbles: true,
                    cancelable: true,
                    keyCode: 40
                });
                planSelect.dispatchEvent(keyEvent);
            }
            isOpen = true;
        }

        function closeSelect() {
            planSelect.blur();
            isOpen = false;
        }

        document.addEventListener('click', function (event) {
            if (!planSelect.contains(event.target) && !selectOpener.contains(event.target)) {
                closeSelect();
            }
        });

        planSelect.addEventListener('change', function () {
            isOpen = false;
        });
    });