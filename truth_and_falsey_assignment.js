// CODECADEMY JAVASCRIPT PRACTICE - truthy_and_falsey_assignment

// STARTING CODEBASE
let tool = '';

// Task 2 - Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'.
// What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.
// let tool = 'marker';

// Task 1 - Let’s use short-circuit evaluation to assign a value to writingUtensil. 
// Do not edit tool yet, we’ll return to tool in the next step.
// let writingUtensil

let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);