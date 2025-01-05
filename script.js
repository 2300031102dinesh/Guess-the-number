'use strict';

let secretnumber = Math.trunc(Math.random() * 20 + 1);
let Score = 20;
let highScore = 0;
console.log(secretnumber);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (Score > 0) {
    if (!guess) {
      displayMessage('No number!!');
    } else if (guess !== secretnumber) {
      displayMessage(guess > secretnumber ? '📈 Too high!' : '📉 Too low!');
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      displayMessage('Correct Number!!');
      document.querySelector('.number').textContent = secretnumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '20rem';
      if (Score > highScore) {
        highScore = Score;
      }
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    displayMessage('You Lost');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  highScore = 0;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = Score;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('body').style.backgroundColor = ' #222';
});
