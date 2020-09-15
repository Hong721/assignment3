// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
	var lowerConfirmed = confirm("Do you want to include lowercase letter in your password?");
	var upperconfirmed = confirm("Do you want to include uppercase letter in your password?");
	var numberConfirmed = confirm("Do you want to include number in your password?");
	var symbolConfirmed = confirm("Do you want to include symbol in your password?");
	var length = prompt("What's the length of password do you want to set? Please choose a number between 8 and 128!");
    charset = "";
    if(lowerConfirmed){
    	charset = "abcdefghijklmnopqrstuvwxyz";
    } 
    if(upperconfirmed){
    	charset += "ABCDEFGHIJKLMNOPQRSTUVWXY";
    } 
    if(numberConfirmed){
    	charset += "0123456789";
    }
    if(symbolConfirmed){
    	charset += "!”#$%^&*()_+:>;/.,|<>";
    }

        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
