
// Function to generate password based on the user criteria
function generatePassword() {
  var password = "";
  var userInput = prompt("Please enter the length of password(between 8 and 128) that you would like to generate");

  // return blank if user cancels the prompt
  if(userInput == null){
    return "";
  }

  // loop until user enters a valid number
  while (userInput < 8 || userInput > 128 || isNaN(userInput)) {
    userInput = prompt("Incorrect value entered! Please enter the value between 8 and 128");
    
    // return blank if user cancels the prompt
    if(userInput == null){
      return "";
    }
  }

  // boolean variables to store the user confirmation for character types 
  var hasUppercase = false;
  var hasLowercase = false;
  var hasNumeric = false;
  var hasSpecialCharacter = false;

  // Ask until user selects atleast one character type
  while (true) {
    hasUppercase = confirm("Would you like to include upppercase?");
    hasLowercase = confirm("Would you like to include lowercase?");
    hasNumeric = confirm("Would you like to include numbers?");
    hasSpecialCharacter = confirm("Would you like to include special characters?");

    // check if atleast one character type is true
    if (hasUppercase == true || hasLowercase == true || hasNumeric == true || hasSpecialCharacter == true) {
      console.log('Character type selected!');
      break;
    }
    // Otherwise alert the user to select one
    else {
      alert("Please select atleast one of the character types(uppercase, lowercase, numeric or special characters)");
    }
  }

  // get the string of characters based on the user selection to generate the password
  var characters = getPasswordCharacters(hasUppercase, hasLowercase, hasNumeric, hasSpecialCharacter);

  // loop to generate the password by randomly selecting each character
  for (var i = 0; i <= userInput; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }

  // return the password
  return password;

}

// This will return a string with characters to generate the password from
function getPasswordCharacters(hasUppercase, hasLowercase, hasNumeric, hasSpecialCharacter) {

  var characters = "";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharcters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  if (hasUppercase == true) {
    characters += uppercaseLetters;
  }
  if (hasLowercase == true) {
    characters += lowercaseLetters;
  }
  if (hasNumeric == true) {
    characters += numbers;
  }
  if (hasSpecialCharacter == true) {
    characters += specialCharcters;
  }

  return characters;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword(); // this will generate the password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
