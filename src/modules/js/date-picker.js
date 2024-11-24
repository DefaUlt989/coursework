  document.addEventListener('DOMContentLoaded', function () {
        const datePicker = document.getElementById('datePicker');
        const dateIcon = document.querySelector('.booking-section__date-icon');

        const fp = flatpickr(datePicker, {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            minDate: "today",
            time_24hr: true,
            disableMobile: "true",
            onClose: function (selectedDates, dateStr, instance) {
                if (selectedDates.length > 0) {
                    instance.input.value = selectedDates[0].toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false
                    });
                }
            }
        });

        dateIcon.addEventListener('click', function () {
            fp.open();
        });
    });