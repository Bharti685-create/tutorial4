/* Tutorial 4
 Example 2 JavaScript code
*/
console.log("Bharti's Output from Tutorial 4 Example 2");

// Following day

let day = prompt("Please enter a day of the week")
console.log(`You entered ${day}`);

// switch statement

switch(day){
  case"sun":
  console.log("The following day is Monday")
  break;
  case"mon":
  console.log("The following day is Tuesday")
  break;
  case"tue":
  console.log("The following day is Wednesday")
  break;
  case"wed":
  console.log("The following day is Thursday")
  break;
  case"thu":
  console.log("The following day is Friday")
  break;
  case"fri":
  console.log("The following day is Saturday")
  break;
  case"sat":
  console.log("The following day is Sunday")
  break;
  default:
    console.log("Invalid Output");
}