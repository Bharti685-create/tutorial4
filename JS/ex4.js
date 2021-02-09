/* Tutorial 4
 Example 4 JavaScript code
*/
console.log("Bharti's Output from Tutorial 4 Example 4");

for (i=1; i<=3; i++){
  let password = prompt("Enter your password:");
  if(password == "secret")
  {
    console.log(`You entered the password after ${i} attempts!`);
    break;
  }
  else
  {
    if (i == 3)
    {
      console.log(`Your account is locked! You failed enter the correct password in 3 attempts`);
      break;
    }
    else
    {
      console.log(`Incorrect password!`);
    }
  }
}