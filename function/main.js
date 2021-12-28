const gameDiv$$ = document.querySelector(".game");
const hole1Div$$ = document.querySelector(".hole hole1");
const hole2Div$$ = document.querySelector(".hole hole2");
const hole3Div$$ = document.querySelector(".hole hole3");
const hole4Div$$ = document.querySelector(".hole hole4");
const hole5Div$$ = document.querySelector(".hole hole5");
const hole6Div$$ = document.querySelector(".hole hole6");

const moleDivs$$ = document.querySelectorAll(".mole");
const scoreSpan = document.querySelector(".score");


let lasthole = null;
let timeGame = true;
let score = 0;

const randomTimeMoleInterval = setInterval(randomTimeMole,500);


const randomTimeMole = () => {
for (const moleDiv$$ of moleDivs$$) {
    moleDiv$$.classList.remove('mole')
}

 const randomMole = Math.floor(Math.random() * 6);
 let position = moleDivs$$[randomMole]
 position.classList.add('mole')
 lasthole = randomMole
}




