export function renderGoblin(goblinData) {
    //state all variables for HTML elements I want to create on call
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    //set the class for element being generated
    goblinEl.classList.add('goblin');
    //if the goblin has an hp of over 0, give the new goblin a goblin emoji, 
    //else if it dies assign it with a fire emoji
    nameEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';

    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    }
}