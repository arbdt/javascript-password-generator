// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables
var passwordLength = 0; // to store chosen length

 // arrays to hold character variants
 var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
 var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var numeralArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 var specialChars = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to check for valid password length input
function askLength(){
 
  // vars to store prompt responses
  var lengthIsNum = false; // to validate length input

  // ask for length
  while (!lengthIsNum){
    passwordLength = prompt("Please enter a length between 8 and 128 characters:");
    
    //check validation - first for non-numeral input
    var digitsNumeral = 0;
    for (var i = 0; i < passwordLength.length; i++){ // compare each digit in input
      for (var j = 0; j < numeralArray.length; j++){ // to each digit in numeral array
        if (passwordLength[i] == numeralArray[j]){
          digitsNumeral += 1; // count correct characters
        }
      }
    }
    if (digitsNumeral == passwordLength.length){ //if all are digits
        lengthIsNum = true;
    }
    else { // if not correct input, ask again
      passwordLength = prompt("Please enter a length between 8 and 128 characters:");
    }
  }

  // now validate for number range
  if (lengthIsNum){ // input is a number, so can move on
    if (passwordLength < 8 || passwordLength > 128){ // if outside accepted range, revalidate
      lengthIsNum = false; 
      passwordLength = prompt("Please enter a length between 8 and 128 characters:");
    }
  }
}

function generatePassword(){ // function to assemble password
  
  var hasChosenType = false; // at least one type specified
  var hasLowercase = false; // if lowercase is selected
  var hasUppercase = false; // if uppercase is selected
  var hasNumerals = false; // if numerals are selected
  var hasSpecial = false; // if special characters are allowed

  // first get a valid length
  askLength();
  
  // ask for parameters
  while (!hasChosenType){
    hasLowercase = confirm("Do you want to include lowecase characters?");
    hasUppercase = confirm("Do you want to include uppercase characters?");
    hasNumerals = confirm("Do you want to include numeric characters?");
    hasSpecial = confirm("Do you want to include special characters?")

    if (hasLowercase || hasUppercase || hasNumerals || hasSpecial){ // if at least one type is chosen
      hasChosenType = true;
    }
  }
}