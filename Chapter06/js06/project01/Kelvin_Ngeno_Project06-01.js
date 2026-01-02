"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: kelvin ngeno
      Date: 10/7/2024  

      Filename: project06-01.js
*/
var submitButton = document.getElementById("submitButton");
var pwd = document.getElementById("pwd");
var pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() {
	if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pwd.value)) {
		alert("Your password must be at least 8 characters with at least one letter and one number");
	} else if (pwd.value !== pwd2.value) {
		alert("Your password must match");
	} else {
	}
});