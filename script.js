// Assignment Code
console.log("Hello")
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("Inside write password")
  prompt("What type of password do you want, doc?");
  var password = function generatePassword(){
    console.log("Inside the generate password method")
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
