// import functions and grab DOM elements
import { renderGoblin } from './utils.js';

const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHpEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#adventurer-img');

//console.log(form);
// let state
let goblins = [
    { name: 'mojo jojo', hp: 1 },
    { name: 'him', hp: 4 },
];

let playerHP = 10;
let defeatedGoblinsCount = 0;

// set event listener for new goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault();
      // use user input to update state 
    //user has supplies a name and submitted the form
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    //console.log(`you are clicking the submit button: ${goblinName}`);
    // get user input
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };

    //add that object to the array of goblins in state 
    goblins.push(newGoblin);
    // update DOM to reflect the new state
    displayGoblins();
    //reset form
    form.reset();
});

function displayGoblins(){
  //update a list 
  //clear out the list DOM
    goblinListEl.textContent = '';
    
    //loop through the goblins
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        //append element to the DOM 
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        //make each goblin clickable
        goblinListEl.append(goblinEl);
    }
    
}

displayGoblins();

function goblinClickHandler(goblin) {
    console.log(`you are clicking on the goblin named: ${goblin.name}`);
// if goblin's hp is 0, return
    if (goblin.hp === 0) return;
    // if player hp is 0, return
    if (playerHP === 0) return;
    // randomly decide if player hit the goblin by generating a number between 0-1
    const playerHit = Math.random();
// if player hits the goblin
//    reduce the goblin's hp
    if (playerHit < .5) {
        goblin.hp--;
        //call displayGoblins (this will re-render the goblins)
        displayGoblins();
        //alert the user that they hit the goblin
        alert (`omgggggg. you hit ${goblin.name}!!!`);
        //if goblin hp is 0 -- increment the defeated goblins count
        if (goblin.hp === 0) {
            defeatedGoblinsCount++;
            defeatedNumberEl.textContent = defeatedGoblinsCount;
        }
    } else {
      //else player missed alert the user 
        alert ('you missed...');
    }

// randomly decide if goblin hit the player
    const goblinHit = Math.random();
// if goblin hits player
    if (goblinHit < .5) {
      // reduce player hp
        playerHP--;
      // update the player hp span with new hp value
        adventurerHpEl.textContent = playerHP;
      // alert the user
        alert (`ughhh. ${goblin.name} hit you!!!`);
      // if player hp is 0, alert user game over!!
        if (playerHP === 0) {
            alert ('game over.');
            adventurerImgEl.classList.add('game-over');
        }
    } else {
        alert (`${goblin.name} tried to hit you...but missed!`);
    }



}





  // set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state