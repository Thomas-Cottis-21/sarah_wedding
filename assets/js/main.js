/* ======================== HERO CONTAINER ======================== */

//set the target date (date and time of the wedding)
const targetDate = new Date("2024-12-31T17:00:00").getTime();

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

/* ======================== IMAGE GALLERY ======================== */