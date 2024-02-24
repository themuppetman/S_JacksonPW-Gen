// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    var password = writePassword("");
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()?<>+=";

    var allowedChars = "";

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
        var randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

var passwordLength = 12;
var includeLowercase = true;
var includeUppercase = true;
var includeNumbers = true;
var includeSymbols = true;

var password = writePassword(passwordLength,   
                               includeLowercase, 
                               includeUppercase,
                               includeNumbers,
                               includeSymbols); 



console.log("Write passord: {password}");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

