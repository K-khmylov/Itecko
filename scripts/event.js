"use strict";

document.addEventListener("DOMContentLoaded", () => {

let Evenabled = localStorage.getItem("isevent")
console.log(Evenabled)
let timerDays = document.getElementById('days');
let timerHours = document.getElementById('hours');
let timerMinuts = document.getElementById('minuts');
let timerSeconds = document.getElementById('secunds');
let notificationPopUpBtn = document.querySelector('.notification_btn');
let notificationForm = document.getElementById('notification_popup');
let notificationClose = document.querySelector('.close_notification');
let notificationCloseWhereever = document.getElementById('close_whereever');

let colors = ["#216ed1", "#c41d66"];
let duration = 5 * 1000;
let end = Date.now() + duration;
function frame() {
    if (Evenabled != "enabled"){
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            colors: colors,
            origin: { x: 0 }
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            colors: colors,
            origin: { x: 1 }
          });
          if (Date.now() < end){
            requestAnimationFrame(frame);
        }
    }
};

let targetDate = new Date("Jun 14 2023 18:39:00");

function timer() {
    let now = new Date();
    let gap = targetDate - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;
    console.log(seconds)
    if (gap > 0) {
        timerDays.innerText = days;
        timerHours.innerText = hours;
        timerMinuts.innerText = minutes;
        timerSeconds.innerText = seconds;
    } else {
        clearInterval(timerf);
        if (!frameRunning) {
            frameRunning = true;
            localStorage.setItem("isevent", "enabled")
            frame();
        }
    }
}

let timerf = setInterval(timer, 1000)
let frameRunning = false;

notificationPopUpBtn.addEventListener('click', () => {
    notificationForm.classList.add('open');
})

notificationClose.addEventListener('click', () => {
    notificationForm.classList.remove('open');
})

notificationCloseWhereever.addEventListener('click', () => {
    notificationForm.classList.remove('open');
})

})