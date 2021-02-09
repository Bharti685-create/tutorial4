/* Tutorial 4
 Example 5 JavaScript code
*/
console.log("Bharti's Output from Tutorial 4 Example 5");

//Multiplication Table

const number = parseInt(prompt("Enter a number:"));

for(i=1; i<=10; i++){
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}