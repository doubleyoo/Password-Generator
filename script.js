// Assignment Code
var generateBtn = document.querySelector("#generate");
var prompt

// Write password to the #password input
function writePassword() {
  const string = [];
  const custPwLength = prompt("Bruh, how long do you want your password to be (8-128 characters)")
  var password = []

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function generatePassword(){

  var i;
    for (i = 0; i < custPwLength; i++) {
      console.log(string[getRandomInt(string.length)])
    }
    
  }

  if (custPwLength <= 128 && custPwLength >= 8){
    var upper = prompt('Would you like to include upper, Y/N?')
    // var lower = prompt('Would you like to include lower, Y/N?')
    // var special = prompt('Would you like to include special, Y/N?')
    // var number =  prompt('Would you like to include number, Y/N?')

    
    if(upper === 'Y'){
      string.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
    }

    generatePassword()

  }
  if ( custPwLength > 128 || custPwLength < 8 ){
    prompt('Password criteria not met.')
  }


  // var passwordLength = prompt("Bruh, how long do you want your password to be (8-128 characters)")
  // console.log("passwordLength: ", passwordLength)
  // // var password = generatePassword();
  // // var passwordText = document.querySelector("#password");

  // // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



