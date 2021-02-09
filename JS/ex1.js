/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Bharti's Output from Tutorial 4 Example 1");

// Prompt user to enter name
let name = prompt("Enter your name:");

// Prompt user to enter the number of units

let units = prompt("Enter the number of units completed:");

// check if input is less than 0 print invalid
if(units < 0){
  console.log("invalid unit");
}
// apply else condition if valid
else{
  console.log(`Hello, ${name}`);
}
//chekin condition for Freshman
if(units >=0 && units <=30){
  console.log("Your grade standing is Freshman")
}
// checkin condition for Sophomore
if(units >= 31 && units <= 60){
  console.log("Your grade standing is Sophomore")
}
// checkin condition for Junior
if(units >=61 && units <= 90){
  console.log("Your grade standing is Junior")
}
//checkin condition for Senior
if(units >= 91){
  console.log("Your grade standing is Senior")
}