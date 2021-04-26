// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getCharSet() {
  var specialCharacters = confirm("Do you want special characters?")
  var numericCharacters = confirm("Do you want numeric characters?")
  var upperCaseCharacters = confirm("Do you want upper case characters?")
  var lowerCaseCharacters = confirm("Do you want lower case characters?")
  if (specialCharacters === false && numericCharacters === false && upperCaseCharacters === false && lowerCaseCharacters === false) {
    alert('Must slect at least one character type.')
    return
  }
  var charSet = ""
  if (specialCharacters === true) charSet += '!@#$%^&*()'
  if (numericCharacters === true) charSet += '0123456789'
  if (upperCaseCharacters === true) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (lowerCaseCharacters === true) charSet += 'abcdefghijklmnopqrstuv'

  return charSet

}

function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length)
  var element = array[index]
  return element;
}

function generatePassword() {
  var custPwLength = parseInt(prompt("Bruh, how long do you want your password to be (8-128 characters)"))
  if (custPwLength > 128 || custPwLength < 8 || isNaN(custPwLength)) {
    alert('Password length must be a number between 8 & 128')
    return 
  }

  var charSet = getCharSet()
  var i;
  var password = "" 
  for (i = 0; i < custPwLength; i++) {
    password += getRandomIndex(charSet) 
  } 
  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
