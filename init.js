let player1Score = 0;
let player2Score = 0;
let currentScore = 0;
let player1Turn = true;
let diceRoll = 0;

//GET DOM ELEMENTS

const rollDiceBtn = document.querySelector('.btn-roll');
const newGameBtn = document.querySelector('.btn-new');
const holdBtn = document.querySelector('.btn-hold');

const p1CurrentScore = document.querySelector('.p1Current');
const p2CurrentScore = document.querySelector('.p2Current');

const p1HighScore = document.querySelector('.p1-high');
const p2HighScore = document.querySelector('.p2-high');

const diceImg = document.querySelector('img');

const p1Box = document.querySelector('.p1-box');
const p2Box = document.querySelector('.p2-box');

const generateRandom = function () {
  diceRoll = Math.trunc(Math.random() * 6 + 1);
  diceImg.classList.remove('hide-img');
  diceImg.src = `./dice-${diceRoll}.png`;
  console.log(diceRoll);
};
const evaluatePlayer = function () {
  if (diceRoll == 1) {
    changeActivePlayer();
    player1Turn = !player1Turn;
    currentScore = 0;
    p1CurrentScore.textContent = '0';
    p2CurrentScore.textContent = '0';
  } else if (player1Turn) {
    currentScore += diceRoll;
    p1CurrentScore.textContent = String(currentScore);
  } else {
    currentScore += diceRoll;
    p2CurrentScore.textContent = String(currentScore);
  }
};

const holdScore = function () {
  if (player1Turn) {
    player1Score += currentScore;
    p1HighScore.textContent = String(player1Score);
    changeActivePlayer();
    player1Turn = !player1Turn;
    currentScore = 0;
    p1CurrentScore.textContent = '0';
    p2CurrentScore.textContent = '0';
  } else {
    player2Score += currentScore;
    p2HighScore.textContent = String(player2Score);
    changeActivePlayer();
    player1Turn = !player1Turn;
    currentScore = 0;
    p1CurrentScore.textContent = '0';
    p2CurrentScore.textContent = '0';
  }
};

const changeActivePlayer = function () {
  if (player1Turn) {
    p1Box.classList.remove('active-box');
    p1Box.classList.add('inactive-box');
    p2Box.classList.add('active-box');
  } else {
    p2Box.classList.remove('active-box');
    p2Box.classList.add('inactive-box');
    p1Box.classList.add('active-box');
  }
};

holdBtn.addEventListener('click', function () {
  holdScore();
});

rollDiceBtn.addEventListener('click', function () {
  generateRandom();
  evaluatePlayer();
});

newGameBtn.addEventListener('click', function () {
  player1Score = 0;
  player2Score = 0;
  currentScore = 0;
  player1Turn = true;
  p1CurrentScore.textContent = '0';
  p2CurrentScore.textContent = '0';
  p1HighScore.textContent = '0';
  p2HighScore.textContent = '0';
});
