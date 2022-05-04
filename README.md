## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

🎁 PLAN 🎁
✅ draw wireframe 
✅ import plan 

✅
🎁HTML Elements (on page load)🎁
input for adding new goblins
button for adding new goblins
span for tracking defeated goblins
span for tracking player HP
<div> for our goblin list

HTML Elements (on page load)
input for adding new goblins
button for adding new goblins
span for tracking defeated goblins
span for tracking player HP
<div> for our goblin list
Functions

displayGoblins -- clear out the list, and render a goblin element for each goblin in your list of goblins
renderGoblin(goblin) - create a goblin element for specific goblin object
goblinClickHandler - takes care of the game logic when goblins are clicked
To Do List
Get everything done that you've done before -- i.e. stuff that looks like yesterday's labs
 Set up your HTML with your defeatedGoblins span, your playerHP span, your form for adding new goblins
 Add your state variables in app.js
 Add event listener for your new goblin form
 TDD your renderGoblin function (TDD optional but helpful) -- should return an HTML element with the goblin's name and hp
 Add displayGoblins function which calls renderGoblin for each goblin in your list of goblins
_ You know you're done here when you can add new goblins to the page_

Deal with you click handler - one if / else at time
Goblin Click Handler Logic
// if goblin's hp is 0, return
// if(goblin.hp === 0) return;

// if player hp is 0, return

// randomly decide if player hit the goblin
// if player hits the goblin
//    reduce the goblin's hp
//    call displayGoblins (this will re-render the goblins)
//    alert the user that they hit the goblin
//    if goblin hp is 0 -- incremenet the defeated goblins count
// else player missed
//     alert the user
// randomly decide if goblin hit the player
// if goblin hits player
//    reduce player hp
//    update the player hp span with new hp value
//    alert the user
//    if player hp is 0, alert user game over!!