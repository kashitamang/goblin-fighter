// import functions and grab DOM elements

const form = document.querySelector('form');

//console.log(form);
// let state
let goblins = [
    { name: 'mojo jojo', hp: 1 },
    { name: 'him', hp: 4 },
];

// set event listener for new goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault();
      // use user input to update state 
    //user has supplies a name and submitted the form
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    console.log(`you are clicking the submit button: ${goblinName}`);
    // get user input
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };

    //add that object to the array of goblins in state 
    goblins.push(newGoblin);
    // update DOM to reflect the new state
    //displayGoblins();
});









  // set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state