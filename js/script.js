// Declaring Variables 
let nav = document.getElementById('nav');
let box = document.getElementById('box');
let bar = document.getElementById('bar');
let cross = document.getElementById('cross');
let scroll = document.getElementById('scroll-btn');
let multiText = document.getElementById('multiText');
let animated = document.getElementsByClassName('animated')[0];
let header = document.getElementsByClassName('header')[0];
let logo = document.getElementsByClassName('logo')[0];


// // window event 
window.addEventListener("load", function () {
    window.scrollTo(0, 0);
})

// Events 
const projectBtns = ((e) => {
    const p_box_clicked = e.target;
    const btn_num = p_box_clicked.dataset.btnNum;
    const p_box_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    let p_box = document.querySelectorAll('.project-box');
    p_box.forEach((curElem) => curElem.classList.add('p-box-not-active'));
    p_box_active.forEach((curElem) => curElem.classList.remove('p-box-not-active'));
})


box.addEventListener('click', () => {
    if (bar.style.display != "none") {
        bar.style.display = "none"
        cross.style.display = "flex"
        nav.style.left = "0%";

    } else {
        bar.style.display = "flex"
        cross.style.display = "none"
        nav.style.left = "-104%";
    }
})


nav.addEventListener('click', function (e) {
    if (e.target) {
        nav.style.left = "-104%";
        cross.style.display = "none"
        bar.style.display = "flex"
    }
})


// scroll 
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
        scroll.style.display = "flex";
    }
    else {
        scroll.style.display = "none";
    }
})


//   split text into words in .animated
let text_1 = document.getElementsByClassName('text-1')[0];
let text_2 = document.getElementsByClassName('text-2')[0];
let text_3 = document.getElementsByClassName('text-3')[0];
text_1.innerHTML = text_1.textContent.replace(/\S/g, "<span>$&</span>")
text_2.innerHTML = text_2.textContent.replace(/\S/g, "<span>$&</span>")
text_3.innerHTML = text_3.textContent.replace(/\S/g, "<span>$&</span>")


// preloader 
document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: ".text span",
        translateX: [-1000, 0],
        scale: [0, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: anime.stagger(100),
        once: true,
    })
})

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function () {
        animated.style.display = "none"
    }, 4000)
})

// anime
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {

        anime({
            targets: ".logo",
            translateX: [-200, 0],
            delay: 1000,
            easing: "easeOutExpo",
            duration: 1000,
            opacity: [0, 1],
        })

        anime({
            targets: "#nav a",
            translateY: [-50, 0],
            duration: 1200,
            easing: "easeOutExpo",
            delay: (el, i) => {
                return 1100 + 110 + i
            },
            opacity: [0, 1],
        })
        anime({
            targets: ".home",
            translateX: [-800, 0],
            delay: (el, i) => {
                return 1500 + 160 + i
            },
            easing: "easeOutExpo",
            duration: 1000,
            opacity: [0, 1],
        })

    }, 3000);
})

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}