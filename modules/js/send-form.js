const emailJSScript = document.createElement('script');
emailJSScript.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
document.head.appendChild(emailJSScript);

emailJSScript.onload = function () {
    emailjs.init({
        publicKey: "0SuMCSLgLulwtbq_m",
    });
};

function sendEmail_S(event) {
    // Prevent the default form submission
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-email-s');
    const successMessage = document.getElementById('success-message-s');

    // Очистити попередні повідомлення
    errorMessage.textContent = '';
    successMessage.textContent = '';
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address";
        errorMessage.style.display = 'block';
        return;
    }

    // Disable submit button to prevent multiple submissions
    event.target.querySelector('button').disabled = true;

    let params = {
        email: email
    };

    emailjs.send("service_nu0ag27", "template_8pbtvji", params)
        .then(function(response) {
            // Перевірка статусу більш надійна
            if (response.status === 200) {
                successMessage.textContent = "You've successfully subscribed to our newsletter!";
                successMessage.style.display = 'block';
                event.target.reset(); // Очистити форму
            } else {
                errorMessage.textContent = "An error occurred. Please try again later.";
                errorMessage.style.display = 'block';
            }
        })
        .catch(function(error) {
            console.error("Error:", error);
            errorMessage.textContent = "An error occurred. Please try again later.";
            errorMessage.style.display = 'block';
        })
        .finally(() => {
            // Завжди повертаємо кнопку до активного стану
            event.target.querySelector('button').disabled = false;
        });
}

function sendEmail(event) {
    // Prevent the default form submission
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const booking_email = document.getElementById('booking_email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const catName = document.getElementById('catName').value;
    const datePicker = document.getElementById('datePicker').value;
    const petCount = document.getElementById('petCount').value;
    const planSelect = document.getElementById('planSelect').value;
    const errorMessage = document.getElementById('error-email');
    const successMessage = document.getElementById('success-message');

    // Очистити попередні повідомлення
    errorMessage.textContent = '';
    successMessage.textContent = '';
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(booking_email)) {
        errorMessage.innerText = "Please enter a valid email address";
        errorMessage.style.display = 'block';
        return;
    }

    // Disable submit button to prevent multiple submissions
    event.target.querySelector('button').disabled = true;

    let params = {
        fullName: fullName,
        booking_email: booking_email,
        phoneNumber: phoneNumber,
        catName: catName,
        datePicker: datePicker,
        petCount: petCount,
        planSelect: planSelect,
    };

    emailjs.send("service_nu0ag27", "template_ztjd86m", params)
        .then(function(response) {
            if (response.status === 200) {
                successMessage.innerText = "Your booking has been successfully submitted!";
                successMessage.style.display = 'block';
            } else {
                errorMessage.innerText = "An error occurred. Please try again later.";
                errorMessage.style.display = 'block';
            }
        })
        .catch(function(error) {
            console.error("Error sending email:", error);
            errorMessage.innerText = "An error occurred. Please try again later.";
            errorMessage.style.display = 'block';
        })
        .finally(() => {
            // Завжди повертаємо кнопку до активного стану
            event.target.querySelector('button').disabled = false;
        });
}