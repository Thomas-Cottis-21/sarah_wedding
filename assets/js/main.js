/* ======================== HERO CONTAINER ======================== */

//set the target date (date and time of the wedding)
const targetDate = new Date("2024-05-24T17:00:00").getTime();

//run every second
const countDownInterval = setInterval(() => {
    //get the current date and time from the system
    const now = new Date().getTime();

    //calculate the remaining time
    //target date first because target date has 'more time', that way 
    //remaining is not negative
    const remaining = targetDate - now;


    //calculate days, hours, minutes, seconds
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    //render countdown
    document.getElementById("days").innerHTML = `${days}`;
    document.getElementById("hours").innerHTML = `${hours}`;
    document.getElementById("minutes").innerHTML = `${minutes}`;
    document.getElementById("seconds").innerHTML = `${seconds}`;

    //check if remaining time is up
    if (remaining < 0) {
        clearInterval(countDownInterval);
        document.getElementById("countdown").innerHTML = "WE ARE FINALLY MARRIED!!";
    }

}, 1000);

/* ======================== CONTACT FORM ======================== */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //disable button

    //get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    //init error array
    const errors = [];

    //form validation

    /* ===== NAME ===== */
    if (name.trim() === "") {
        errors.push("Name is required");
    }

    /* ===== EMAIL ===== */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        errors.push("Email is required");
    } else if (!emailPattern.test(email)) {
        errors.push("Email is invalid");
    }

    /* ===== SUBJECT ===== */
    if (subject.trim() === "") {
        errors.push("Subject is required");
    }


    /* ===== MESSAGE ===== */
    if (message.trim() === "") {
        errors.push("Message is required");
    }

    /* ===== ERROR HANDLING ==== */
    if (errors.length > 0) {
        //render errors
        renderErrors(errors);
    } else {
        clearErrors();
        //collect data
        const userData = {
            name: name,
            email: email,
            subject: subject, 
            message: message
        };

        //send api request
        sendData(userData);
    }
    
})

const clearErrors = () => {
    const errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML = "";
}

const renderErrors = (errors) => {
    //function to render errors
    const errorContainer = document.getElementById("error-container");

    //clear error container of previous errors
    errorContainer.innerHTML = "";

    errors.forEach((error) => {
        let span = document.createElement("span");
        span.textContent = error;
        errorContainer.appendChild(span);
    })
}

const sendData = (userData) => {
    const url = "../../form/form-handler.php";

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    };

    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            return response.json();
        })
        .then(data => {
            if (data == true) {
                //handle success
                handleSuccess();
            } else {
                //handle error
                handleError();
            }
        })
        .catch(error => {
            console.log("There was a problem with the request: ", error);
            handleError();
        })
}

const handleSuccess = () => {
    const form = document.getElementById("contact-form");

    const successModal = new bootstrap.Modal(document.getElementById("success-modal"));

    successModal.show();
    form.reset();
}

const handleError = () => {
    const errorModal = new bootstrap.Modal(document.getElementById("error-modal"));
    errorModal.show();
}