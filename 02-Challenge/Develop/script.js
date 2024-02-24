// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
 
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()?<>+=";

    let allowedChars = "";
    let password = "";

//Review Javascript Thoroughly 

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars :"";

    if(length <= 0){
        return '(password length must be at least 1)';
    }

    console.log(allowedChars);

    return '';
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,   
                               includeLowercase, 
                               includeUppercase,
                               includeNumbers,
                               includeSymbols);



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
