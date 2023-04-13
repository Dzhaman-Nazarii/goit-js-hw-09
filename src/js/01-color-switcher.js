const body = document.querySelector('body')
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener("click", clickStart);
btnStop.addEventListener("click", clickStop);
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function clickStart() {
    timerId = setInterval(() => {
        let color = getRandomHexColor();
        body.style.background = color;
        btnStart.setAttribute("disabled", "disabled");
        btnStop.removeAttribute("disabled");
    },1000)
}

function clickStop() {
    clearInterval(timerId);
    btnStart.removeAttribute("disabled");
    btnStop.setAttribute("disabled", "disabled");
}