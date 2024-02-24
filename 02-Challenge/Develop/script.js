// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
 
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
    allowedChars += includeSymbols ? symbolChars : "";

    console.log(allowedChars);
                      
    if(length <= 0){
        return "(password length must be at least 1)";
    }
    if(allowedChars.length === 0){
        return "(at least 1 set of characters needs to be selected)"
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
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


console.log("Generated password: {passowrd}");

// Add event listener to generate button

