'use strict';
AOS.init();
let body = document.body;
let buttonBlackMode = document.querySelector('.button_black_mode');
let darkMode = localStorage.getItem("dark-mode");
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
let mainQuestionSection = document.getElementById("main_question_block");
let openedQuestion;
let questionSection = document.querySelectorAll(".question_block");
// let questionTxt = document.querySelector('.open_question_txt')
let tabs = document.querySelectorAll('.vacance_tab');
let tabInfo = document.querySelectorAll('.vacance_info');
let form = document.querySelector('.form_div');
let formCloseWhereever = document.querySelector('.closewhereever');
let formOpen = document.querySelector('.form_open');


for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (event) => {
        // сначала нам нужно удалить активный класс именно с вкладок
        let tabsChildren = event.target.parentElement.children;
        for (let t = 0; t < tabsChildren.length; t++) {
            tabsChildren[t].classList.remove("active");
        }
        // добавляем активный класс
        tabs[i].classList.add("active");
        // теперь нужно удалить активный класс с блоков содержимого вкладок
        let tabContentChildren = event.target.parentElement.nextElementSibling.children;
        console.log(tabContentChildren)
        for (let c = 0; c < tabContentChildren.length; c++) {
            tabContentChildren[c].classList.remove("active");
        }
        // добавляем активный класс
        tabInfo[i].classList.add("active");

    });
}

// const btnAdd = (questionSection) => {
//   questionSection.classList.toggle('open');
// }

// mainQuestionSection.addEventListener('click', (event) => {
//   if(event.target.classList.contains('question_block')){
//     btnAdd(event.target)
//   };
// })

for (const element of questionSection) {
    element.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (openedQuestion === targetElement) {
            targetElement.classList.toggle('open');
        } else {
            openedQuestion?.classList.remove('open');
            openedQuestion = targetElement;
            targetElement.classList.add('open');
        }
    });
}


const enableDarkMode = () => {
    body.classList.add("black_mode");
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
    body.classList.remove("black_mode");
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode();
}

buttonBlackMode.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

// const Scrollbar = window.Scrollbar;
// let options = {
//   dumping: 0,
// };
// Scrollbar.init(document.querySelector('body'), options);

// let duration = 5 * 1000;
// let end = Date.now() + duration;
// let colors = ["#216ed1", "#c41d66"];
// let counter = 0;
// function frame() {
//   confetti({
//     particleCount: 2,
//     angle: 60,
//     spread: 55,
//     origin: { x: 0 },
//     colors: colors,
//   });
//   confetti({
//     particleCount: 2,
//     angle: 120,
//     spread: 55,
//     origin: { x: 1 },
//     colors: colors,
//   });

//   if (200 > counter) {
//     requestAnimationFrame(frame);
//   } else {
//     return;
//   }
//   console.log(counter)
//   counter++;
// }

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


// frame()
// function timer() {
    //         let now = new Date();
    //         let gap = date - now;

//         let days = Math.floor(gap / 1000 / 60 / 60 / 24);
//         let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
//         let minutes = Math.floor(gap / 1000 / 60) % 60;
//         let seconds = Math.floor(gap / 1000) % 60;
//         console.log(seconds)
//         if (gap > 0) {
//             timerDays.innerText = days;
//             timerHours.innerText = hours;
//             timerMinuts.innerText = minutes;
//             timerSeconds.innerText = seconds;
//         } else {
//             return clearInterval(timer)
//         }
// }
// timer()
// setInterval(timer, 1000);

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

// let b = timer()
// console.log(b)

// let puk = setInterval(function(){
//     console.log(b, "je b")
//     if(b >= 1){
//         let colors = ["#216ed1", "#c41d66"];
//         let duration = 5 * 1000;
//         let end = Date.now() + duration;
//         confetti({
//             particleCount: 2,
//             angle: 60,
//             spread: 55,
//             colors: colors,
//             origin: { x: 0 }
//           });
//           confetti({
//             particleCount: 2,
//             angle: 120,
//             spread: 55,
//             colors: colors,
//             origin: { x: 1 }
//           });
//           if (Date.now() < end){
//             requestAnimationFrame(frame);
//         }
//     }
//     // setTimeout(clearInterval(abc), 5000)
// },1000)
// let b = timer(counter);

// let i = setInterval(function(){console.log(b)}, 1000)

// function confetti() {
//     let intervalConfetti = setInterval(function () {
//         let a = timer(counter)
//         console.log(a)  
//         if(a === 1){
            // let duration = 5 * 1000;
            // let end = Date.now() + duration;
            // let colors = ["#216ed1", "#c41d66"];
//             if (Evenabled != "enabled") {
//                 confetti({
//                     particleCount: 2,
//                     angle: 60,
//                     spread: 55,
//                     colors: colors,
//                     origin: { x: 0 }
//                 });
//                 confetti({
//                     particleCount: 2,
//                     angle: 120,
//                     spread: 55,
//                     colors: colors,
//                     origin: { x: 1 }
//                 });
//                 console.log(end, "koniec")
//                 console.log(Date.now(), "data")
//                 if (Date.now() < end) {
//                     requestAnimationFrame(document.body);
//                 }
//             }
//         }
//     }, 1000)
// }

// confetti()


notificationPopUpBtn.addEventListener('click', () => {
    notificationForm.classList.add('open');
})
notificationClose.addEventListener('click', () => {
    notificationForm.classList.remove('open');
})
notificationCloseWhereever.addEventListener('click', () => {
    notificationForm.classList.remove('open');
})

form.addEventListener('click', () => {
    formOpen.classList.add('open');
    formCloseWhereever.classList.add('open');
})

formCloseWhereever.addEventListener('click', () => {
    formOpen.classList.remove('open');
    formCloseWhereever.classList.remove('open');
})





