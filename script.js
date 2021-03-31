// Assignment Code
var generateBtn = document.querySelector("#generate");
// var prompt
// var

// function getRandomIndex(array) {
//   var index = Math.floor(Math.random() * array.length)
//   var element = array[index]
//   return element;
// }

// Write password to the #password input
// function writePassword() {
//   const string = [];
//   var password = []

//   }



  // if (custPwLength <= 128 && custPwLength >= 8) {
  //   var upper = prompt('Would you like to include upper, Y/N?')
  //   // var lower = prompt('Would you like to include lower, Y/N?')
  //   // var special = prompt('Would you like to include special, Y/N?')
  //   // var number =  prompt('Would you like to include number, Y/N?')


  //   if (upper === 'Y') {
  //     string.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
  //   }

  //   generatePassword()

  // }



  // var passwordLength = prompt("Bruh, how long do you want your password to be (8-128 characters)")
  // console.log("passwordLength: ", passwordLength)
  // // var password = generatePassword();
  // // var passwordText = document.querySelector("#password");

  // // passwordText.value = password;

// }
function generatePassword(){
  // create a parent function that orchestrates all the methods required to generate the password
  return getPasswordSpecs().then(res=>{
    return generatePassword(res)
  })

}

function getPasswordSpecs() {
  var custPwLength = parseInt(prompt("Bruh, how long do you want your password to be (8-128 characters)"))
  if (custPwLength > 128 || custPwLength < 8) {
    alert('Password must be between 8 & 128 characters')
    return
  }


  var specialCharacters = confirm("Do you want special characters?")
  var numericCharacters = confirm("Do you want numeric characters?")
  var upperCaseCharacters = confirm("Do you want upper case characters?")
  var lowerCaseCharacters = confirm("Do you want lower case characters?")
  if (specialCharacters === false && numericCharacters === false && upperCaseCharacters === false && lowerCaseCharacters === false) {
    alert('Must slect at least one character type.')
    return
  }
  var specs = {
    passwordLength: custPwLength,
    specialCharacters: specialCharacters,
    upperCaseCharacters: upperCaseCharacters,
    lowerCaseCharacters: lowerCaseCharacters,
    numericCharacters: numericCharacters
  }
  console.log(specs)
  return specs
}

function generatePassword(specs) {
  console.log(specs)
  // var specs = getPasswordSpecs()
  // var i;
  // for (i = 0; i < custPwLength; i++) {
  //   console.log(string[getRandomInt(string.length)])
  // }

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



