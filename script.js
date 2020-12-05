'use strict';

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


// Selecting elements 
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality 
let roll = function () {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    // 3. Check for rolled 1: if true
    if (dice !== 1) {
        // Add dice to current score
        currentScore = currentScore + dice;
        // current0EL.textContent = currentScore; // Change later
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // switch to next player
        document.getElementById(`current--${activePlayer}`).text = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
    }
}



btnRoll.addEventListener('click', roll)

btnHold.addEventListener('click', function () {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. Check if player's score is >= 100
    // Finish Game

    // Switch to the next player





    // activePlayer === score0El ? score0El.textContent = totalScore : score1El.textContent = totalScore;

    // if (activePlayer = activePlayer === 0) {
    //     totalScore += currentScore;
    //     score0El.textContent = totalScore
    //     player0EL.classList.toggle('player--active');
    //     player1EL.classList.add('player--active');
    //     roll();
    // } else {
    //     totalScore += currentScore;
    //     score1El.textContent = totalScore
    //     player1EL.classList.a('player--active');
    // }
    // if (scores[0] >= 100 || scores[1] >= 100) {
    //     activePlayer = winner;
    // }

    // // switch to next player
    // activePlayer = activePlayer === 0 ? player0EL.classList.add('player--active') :
})