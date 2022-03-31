'use strict';

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
//selecting the ID using #
const score0Element = document.querySelector('#score--0');
//same as before but using getElementById
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
//starting conditions to 0
score0Element.textContent = 0;
score0Element.textContent = 0;
diceElement.classList.add('hidden');

//switch player function 
const switchPlayers = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

//rolling the dice
btnRoll.addEventListener('click', function(){
    if(playing){
        //1. need to generate a random number 
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. display the dice equal to the random number generated
        diceElement.classList.remove('hidden');
        console.log(dice);
        diceElement.src = `dice${dice}.png`;

        //3. check for rolled 1 or 4: if true, switch to the next 
        if(dice !== 1){
            //add dice to the current score 
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
        switchPlayers();
        }
    }
});

btnHold.addEventListener('click', function(){
    if(playing){
        //1. add current score to the total score of active player and
        scores[activePlayer] += currentScore;
        console.log(scores[activePlayer]);
        //scores[1] = scores[1] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2. check if score is at least 100
        if(scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceElement.classList.add('hidden');
        } else {
            //4 if not switch to the 2nd player;
            switchPlayers();
        }
    }
});