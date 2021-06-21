// Part 1. set the organization name to "LaunchCode"
let organizationName = "LaunchCode";



const input = require('readline-sync');

let fruit;
let quantity;
let total = -1;

function getInputs(){
// PART 2

// 2a. Ask the user what kind of fruit they want. Store the result in the variable fruit.
fruit = input.question('What kind of fruit would you like?\n');

// 2b. ask them for the quantity
quantity = input.question('How many would you like?\n');

// 2c. convert their answer into a number and store it in the variable quantity
quantity = Number(quantity);

}

function calculateTotal(fruit, quantity) {

// PART 3
/*
Fruit pricing
Apple - $0.50 cent per apple
Orange - $1.00 per orange
Peach - $1.25 per peach
Banana - $0.25 cent per banana
If the fruit is not in this list, the total is 0.

Based on the user answer to the questions, calculate their total (item price * quanity). Store the result in the variable named total. If the fruit is not in this list, the total is 0.

For example, if the user said the fruit is Orange, and the quantity is 3, then the total is 3. If the user said the fruit is Banana and the total is 2, then total is 0.50. 
*/
  if (fruit === "apple") {
    total = quantity * 0.5;
  } else if (fruit === "orange") {
    total = quantity * 1;
  } else if (fruit === "peach") {
    total = quantity * 1.25;
  } else if (fruit === "banana") {
    total = quantity * 0.25;
  } else {
    total = 0;
  }

  // don't edit this line
  return total;
}


function displayTotal() {
// display their total 
console.log(`Thank you for purchasing ${quantity} ${fruit + 's'}! Your total is: ${total}`)


}

// END OF QUIZ. THAT'S IT. YOU'RE DONE!!!!
getInputs();
calculateTotal(fruit, quantity);
displayTotal();



































































































































// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  organizationName: organizationName,
  fruit: fruit,
  quanity: quantity,
  total: total,
  calculateTotal: calculateTotal
};