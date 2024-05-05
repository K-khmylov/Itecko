'use strict';
document.addEventListener('DOMContentLoaded', () => {

AOS.init();
let body = document.body;
let html = document.html;
let buttonBlackMode = document.querySelectorAll('.button_black_mode');
let darkMode = localStorage.getItem("dark-mode");
// let Evenabled = localStorage.getItem("isevent")
// console.log(Evenabled)
// let timerDays = document.getElementById('days');
// let timerHours = document.getElementById('hours');
// let timerMinuts = document.getElementById('minuts');
// let timerSeconds = document.getElementById('secunds');
// let notificationPopUpBtn = document.querySelector('.notification_btn');
// let notificationForm = document.getElementById('notification_popup');
// let notificationClose = document.querySelector('.close_notification');
// let notificationCloseWhereever = document.getElementById('close_whereever');
// let mainQuestionSection = document.getElementById("main_question_block");
let openedQuestion;
let questionSection = document.querySelectorAll(".question_block");
// let questionTxt = document.querySelector('.open_question_txt')
// let tabs = document.querySelectorAll('.vacance_tab');
// let tabInfo = document.querySelectorAll('.vacance_info');
let form = document.querySelector('.form_div');
let formCloseWhereever = document.querySelector('.closewhereever');
let formCloseCross = document.querySelector('.cross')
let formOpen = document.querySelector('.form_open');
let burgerBtn = document.getElementById('burger_btn');
let burgerMenu = document.getElementById('burger_menu');
let burgerNav = document.getElementById('burger_nav');
let closeBurger = document.getElementById('close_burger');
let bg = document.getElementById('bg')
let statisticBlock = document.querySelectorAll('.position')
let header = document.getElementById("header");
let formCloseMethods = [formCloseCross, formCloseWhereever];


function allback(){
  bg.classList.remove('open')
  bg.classList.add('back');
  burgerBtn.classList.remove('open');
  burgerMenu.classList.add('back');
  setTimeout(()=>{
    bg.classList.remove('back');
    burgerMenu.classList.remove('back')
    bg.classList.remove('open');
    burgerNav.classList.remove('play');
    burgerMenu.classList.remove('open');
    burgerNav.classList.remove('play');
  }, 500)
}

burgerBtn.addEventListener('click', () =>{
  burgerBtn.classList.toggle('open');
  burgerMenu.classList.toggle('open');
  if(burgerBtn.classList.contains('open')){
      bg.classList.add('open');
      setTimeout(()=>{burgerNav.classList.add('play')}, 200);
      body.style.overflowY = 'hidden';
      body.style.height = "100vh";
  } else {
      body.style.overflowY = 'auto';
      body.style.height = "auto";
      allback()
  }
})

closeBurger.addEventListener("click", () => {
  allback()
  body.style.overflowY = 'auto';
  body.style.height = "auto";
})

function statisticHover(){
    const width_screen = window.innerWidth;
    if (width_screen >= 768) {
        for (let i = 0; i < statisticBlock.length; i++) {
            statisticBlock[i].addEventListener('mouseover', (event) => {
                const targetElement = event.target;
                
                if (statisticBlock[i] === targetElement && i > 0) {
                    statisticBlock[i].style.borderRight = '2px solid transparent'
                    statisticBlock[i-1].style.borderRight = '2px solid transparent'
                }
                if (statisticBlock[i] === targetElement && i === 0){
                    statisticBlock[i].style.borderRight = '2px solid transparent'
                }
            });

            statisticBlock[i].addEventListener('mouseout', (event) => {
                const targetElement = event.target;
                if (statisticBlock[i] === targetElement && i > 0 && i != statisticBlock.length-1) {
                    statisticBlock[i].style.borderRight = '2px solid #DFDFDF'
                    statisticBlock[i-1].style.borderRight = '2px solid #DFDFDF'
                } 
                if (statisticBlock[i] === targetElement && i > 0 && i === statisticBlock.length-1){
                    statisticBlock[i-1].style.borderRight = '2px solid #DFDFDF'
                }
                if (statisticBlock[i] === targetElement && i === 0){
                    statisticBlock[i].style.borderRight = '2px solid #DFDFDF'
                }
            });
        }
    }else{
        console.log("log")
    }
}

// GALLERY
// let imgs = document.querySelectorAll(".img-container");
// let fullscreenOverlay = document.getElementById('fullscreen-overlay');
// let fullscreenImage = document.getElementById('fullscreen-image');

// function openFullscreenOverlay(source) {
//     fullscreenImage.src = source;
//     fullscreenOverlay.style.display = 'flex';
//     document.body.style.overflow = 'hidden'; // Запрещаем скролл на странице

//     // Добавляем класс для плавного открытия
//     setTimeout(function () {
//         fullscreenOverlay.classList.add('fade-in');
//     }, 10);
// }

// function closeFullscreenOverlay() {
//     // Удаляем класс для плавного закрытия
//     fullscreenOverlay.classList.add('fade-in');
//     fullscreenOverlay.classList.remove('fade-out');

//     // Устанавливаем таймаут для удаления класса 'fade-in' после начала анимации
//     setTimeout(function () {
//         fullscreenOverlay.classList.remove('fade-in');
//         fullscreenOverlay.style.display = 'none';
//         document.body.style.overflow = 'auto'; // Разрешаем скролл на странице
//     }, 10);
// }

// // При клике на фото отображаем его на весь экран
// imgs.forEach(function (img) {
//     img.addEventListener('click', function () {
//         let source = img.querySelector('img').src;
//         openFullscreenOverlay(source);
//     });
// });

// // При клике на оверлей закрываем полноэкранный режим
// fullscreenOverlay.addEventListener('click', function () {
//     closeFullscreenOverlay();
// });

// // Обработка события завершения анимации
// // Обработка события завершения анимации
// fullscreenOverlay.addEventListener('transitionend', function (event) {
//     if (event.propertyName === 'opacity' && fullscreenOverlay.classList.contains('fade-out')) {
//         fullscreenOverlay.classList.remove('fade-out');
//         fullscreenOverlay.style.display = 'none';
//         document.body.style.overflow = 'auto'; // Разрешаем скролл на странице
//         fullscreenOverlay.removeEventListener('transitionend', arguments.callee); // Удаляем обработчик события
//     }
// });



// document.addEventListener('DOMContentLoaded', () => {
//     window.addEventListener('resize', () => {
//         const screenWidth = window.innerWidth;
    
//         if (screenWidth >= 768) {
//             for (let i = 0; i < statisticBlock.length; i++) {
//                 statisticBlock[i].addEventListener('mouseover', (event) => {
//                     const targetElement = event.target;
                    
//                     if (statisticBlock[i] === targetElement && i > 0) {
//                         statisticBlock[i].style.borderRight = '2px solid transparent'
//                         statisticBlock[i-1].style.borderRight = '2px solid transparent'
//                     }
//                     if (statisticBlock[i] === targetElement && i === 0){
//                         statisticBlock[i].style.borderRight = '2px solid transparent'
//                     }
    
//                     statisticBlock[i].addEventListener('mouseout', (event) => {
//                         const targetElement = event.target;
//                         if (statisticBlock[i] === targetElement && i > 0 && i != statisticBlock.length-1) {
//                             statisticBlock[i].style.borderRight = '2px solid #DFDFDF'
//                             statisticBlock[i-1].style.borderRight = '2px solid #DFDFDF'
//                         } 
//                         if (statisticBlock[i] === targetElement && i > 0 && i === statisticBlock.length-1){
//                             statisticBlock[i-1].style.borderRight = '2px solid #DFDFDF'
//                         }
//                         if (statisticBlock[i] === targetElement && i === 0){
//                             statisticBlock[i].style.borderRight = '2px solid #DFDFDF'
//                         }
//                     });
                    
//                 });
//             }
//         }
//     });
// });

// Код болле понятный, но почему-то работает только при открытии панели разработчика

// document.addEventListener('DOMContentLoaded', () => {
//     window.addEventListener('resize', () => {
//         const screenWidth = window.innerWidth;

//         if (screenWidth >= 768) {
//             statisticBlock.forEach((element, i) => {
//                 element.removeEventListener('mouseover', handleMouseOver);
//                 element.removeEventListener('mouseout', handleMouseOut);

//                 element.addEventListener('mouseover', () => handleMouseOver(i));
//                 element.addEventListener('mouseout', () => handleMouseOut(i));
//             });
//         }
//     });

//     function handleMouseOver(index) {
//         const currentElement = statisticBlock[index];
//         const previousElement = index > 0 ? statisticBlock[index - 1] : null;

//         if (currentElement && previousElement) {
//             currentElement.style.borderRight = '2px solid transparent';
//             previousElement.style.borderRight = '2px solid transparent';
//         }
//     }

//     function handleMouseOut(index) {
//         const currentElement = statisticBlock[index];
//         const previousElement = index > 0 ? statisticBlock[index - 1] : null;

//         if (currentElement && previousElement) {
//             currentElement.style.borderRight = '2px solid #DFDFDF';
//             previousElement.style.borderRight = '2px solid #DFDFDF';
//         }
//     }
// });







// for (let i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener("click", (event) => {
//         // сначала нам нужно удалить активный класс именно с вкладок
//         let tabsChildren = event.target.parentElement.children;
//         for (let t = 0; t < tabsChildren.length; t++) {
//             tabsChildren[t].classList.remove("active");
//         }
//         // добавляем активный класс
//         tabs[i].classList.add("active");
//         // теперь нужно удалить активный класс с блоков содержимого вкладок
//         let tabContentChildren = event.target.parentElement.nextElementSibling.children;
//         console.log(tabContentChildren)
//         for (let c = 0; c < tabContentChildren.length; c++) {
//             tabContentChildren[c].classList.remove("active");
//         }
//         // добавляем активный класс
//         tabInfo[i].classList.add("active");

//     });
// }

// for (let i = 0; i < statisticBlock.length; i++){
//     console.log(statisticBlock[i])
// }

// const btnAdd = (questionSection) => {
//   questionSection.classList.toggle('open');
// }

// mainQuestionSection.addEventListener('click', (event) => {
//   if(event.target.classList.contains('question_block')){
//     btnAdd(event.target)
//   };
// })
// alert("ASf")
// let openedQuestion = null;

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

buttonBlackMode.forEach(item => {
    item.addEventListener("click", (e) => {
        let darkMode = localStorage.getItem("dark-mode");
        if (darkMode === "disabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
        burgerBtn.classList.remove('open');
        burgerMenu.classList.add('back');
        setTimeout(()=>{
            bg.classList.remove('back');
            burgerMenu.classList.remove('back')
            bg.classList.remove('open');
            burgerNav.classList.remove('play');
            burgerMenu.classList.remove('open');
            burgerNav.classList.remove('play');
          }, 500)
    });
});


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

// let colors = ["#216ed1", "#c41d66"];
// let duration = 5 * 1000;
// let end = Date.now() + duration;
// function frame() {
//     if (Evenabled != "enabled"){
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
// };


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

// let targetDate = new Date("Jun 14 2023 18:39:00");

// function timer() {
//     let now = new Date();
//     let gap = targetDate - now;

//     let days = Math.floor(gap / 1000 / 60 / 60 / 24);
//     let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
//     let minutes = Math.floor(gap / 1000 / 60) % 60;
//     let seconds = Math.floor(gap / 1000) % 60;
//     console.log(seconds)
//     if (gap > 0) {
//         timerDays.innerText = days;
//         timerHours.innerText = hours;
//         timerMinuts.innerText = minutes;
//         timerSeconds.innerText = seconds;
//     } else {
//         clearInterval(timerf);
//         if (!frameRunning) {
//             frameRunning = true;
//             localStorage.setItem("isevent", "enabled")
//             frame();
//         }
//     }
// }

// let timerf = setInterval(timer, 1000)
// let frameRunning = false;

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


// notificationPopUpBtn.addEventListener('click', () => {
//     notificationForm.classList.add('open');
// })
// notificationClose.addEventListener('click', () => {
//     notificationForm.classList.remove('open');
// })
// notificationCloseWhereever.addEventListener('click', () => {
//     notificationForm.classList.remove('open');
// })

form.addEventListener('click', () => {
    console.log(header)
    header.style.top = "-80px";
    formOpen.classList.add('open');
    formCloseWhereever.classList.add('open');
    body.style.overflow = 'hidden';
    // console.log( header.style.zIndex)
})


// formCloseWhereever.addEventListener('click', () => {
//     formOpen.classList.add('back');
//     formCloseWhereever.classList.add('back');
//     formOpen.classList.add('back');
//     formCloseWhereever.classList.add('back');
//     body.style.overflowY = 'unset';
//     setTimeout(() => {
//         formOpen.classList.remove('open');
//         formCloseWhereever.classList.remove('open');
//         formOpen.classList.remove('back');
//         formCloseWhereever.classList.remove('back');
//     },500)
// })

function handleCloseEvent() {
    formOpen.classList.add('back');
    formCloseWhereever.classList.add('back');
    formOpen.classList.add('back');
    formCloseWhereever.classList.add('back');
    body.style.overflowY = 'unset';
    header.style.top = "0";
    setTimeout(() => {
        formOpen.classList.remove('open');
        formCloseWhereever.classList.remove('open');
        formOpen.classList.remove('back');
        formCloseWhereever.classList.remove('back');
    }, 500);
}

formCloseMethods.forEach(el => {
    el.addEventListener('click', handleCloseEvent);
});

statisticHover()

});
