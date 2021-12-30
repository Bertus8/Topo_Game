const startButton$$ = document.querySelector("button")
const moleDivs$$ = document.querySelectorAll(".mole");
let scoreSpan = document.querySelector(".score");


let lasthole = null;
let score = 0;

startButton$$.addEventListener('click', () => startGame);

function startGame() {
const randomTimeInterval = setInterval(randomTimeMole , 500);
addMoleListeners();
finishCount();

const randomTimeMole = () => {
    for (const moleDiv$$ of moleDivs$$) {
        moleDiv$$.classList.remove('hole');
    }

    const randomMole = Math.floor(Math.random() * 6);
    let position = moleDivs$$[randomMole];
    position.classList.add('hole');
    lasthole = randomMole;
}

const addMoleListeners = () => {
    for (let index = 0; index < moleDivs$$.length; index++) {
        const moleDiv$$ = moleDivs$$[index];

        moleDiv$$.addEventListener('click', () =>{
            if (index === lasthole){
                score = score +1;
                scoreSpan.textContent = score
                lasthole = null
            }
        })
        
    }
}

const finishCount = () => {
    if (score === 1000) {
        clearInterval(randomTimeInterval)
        alert('Your score is' + score)
    }
}
}


