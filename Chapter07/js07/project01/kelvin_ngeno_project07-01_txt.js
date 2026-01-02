"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: kelvin ngeno
      Date:   10/10/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   let regex1 = /[A-Z]/;
   let regex2 = /\d/;
   let regex3 = /[!$#%]/;
   
   e.preventDefault();
   
   if (pwd.length < 8) {
	   feedback.textContent = "Your password must be at least 8 characters.";
   } else if (!regex1.test(pwd)) {
	   feedback.textContent = "Your password must include uppercase letter.";
   } else if (!regex2.test(pwd)) {
	   feedback.textContent = "Your password must include a number.";
   } else if (!regex3.test(pwd)) {
	   feedback.textContent = "Your password must include the following: !$#%.";
   } else {
	   signupForm.submit();
   }
});
