const startButton$$ = document.querySelector("button")
const moleDivs$$ = document.querySelectorAll(".mole");
let scoreSpan = document.querySelector(".score");
const holes = document.querySelectorAll('.hole');

let lastHole;
let score = 0;
let timeUp = false;

startButton$$.addEventListener('click',() => startGame());

function startGame() {
scoreSpan.textContent = 0;
timeUp = false;
score = 0;
showMole();
setTimeout(() => timeUp = true, 20000)
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
    }

const randomTimeMole = (holes) => {
    const randomMole = Math.floor(Math.random() * 6);
    let position = holes[randomMole];
    if (position === lastHole) {
        return randomTimeMole(holes);
        }
        lastHole = position;
        return position;
        }

const showMole = () => {
    const time = randomTime(400, 1000);
    const hole = randomTimeMole(holes);
    hole.classList.add('up');
    setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) showMole();
    }, time);
}

function whack(e) {
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreSpan.textContent = score;
    }
moleDivs$$.forEach(moleDivs$$ => moleDivs$$.addEventListener('click', whack));