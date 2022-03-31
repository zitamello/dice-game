'use strict';

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

let currentScore = 0; 
//starting conditions to 0
score0Element.textContent = 0;
score0Element.textContent = 0;
diceElement.classList.add('hidden');

//rolling the dice
btnRoll.addEventListener('click', function(){
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
        current0Element.textContent = currentScore; 
    } else {
        currentScore = 0;
        current0Element.textContent = 0;

    }

})
