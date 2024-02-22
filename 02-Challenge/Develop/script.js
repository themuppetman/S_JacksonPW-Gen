// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
 
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()?<>+=";

    let allowedChars = "";
    let password = "";

//Review string concatenate

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars :"";

    console.log(allowedChars);

    return '';

}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols =false;

const password = writePassword(passwordLength,   
                               includeLowercase, 
                               includeUppercase,
                               includeNumbers,
                               includeSymbols);

console.log('Written password: ${password}'); 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
