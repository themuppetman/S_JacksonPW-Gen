// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = "";
    var passwordText = document.querySelector("#password");

    var length = prompt("How long would you like your password to be?");
    var includeLowercase = confirm("Would you like lowercase characters?");
    var includeUppercase = confirm("Would you like uppercase characters?");
    var includeNumbers = confirm("Would you like numbers?");
    var includeSymbols = confirm("Would you like special characters?");

    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()?<>+=";

    var allowedChars = "";

    // if(includeLowercase === true){
    //     allowedChars = allowedChars + lowercaseChars
    // }

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    console.log(allowedChars);

    if (length < 8) {
        alert("Password must be at least 8 characters long.");
        return writePassword();
    }
    if (length > 128) {
        alert("Password cannot be mor than 128 characters long.")
        return writePassword();
    }
    if (allowedChars.length === 0) {
        alert("At least 1 set of characters needs to be selected.");
        return writePassword();
    }



    // break apart allowedCharacters string into an array
    allowedChars = allowedChars.split("")
    console.log(allowedChars, length)

    // take paswordLength answer and run for loop that many times
    for (let i = 0; i < length; i++) {
        // grab random index number based on current length of allowCharacters array
        var randomIndex = Math.floor(Math.random() * allowedChars.length);  

        // use randomIndex as index number in allowedCharacters array, convert to true value, add value to end of password
        password = password + allowedChars[randomIndex];
    }

    passwordText.value = password;
    return password;
}


console.log("Write passord: {password}");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




