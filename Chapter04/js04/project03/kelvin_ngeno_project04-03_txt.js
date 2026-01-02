"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: kelvin ngeno
      Date:   

      Filename: project04-03.js
*/

const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");

// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Clear the warning box
   warningBox.innerHTML = "";

   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value;
   let charCount = commentText.length;

   try {
      if (charCount > MAX_REVIEW) {
         throw new Error("You have exceeded the character count limit");
      }
   } catch (error) {
      warningBox.innerHTML = error.message;
   } finally {
      wordCountBox.innerHTML = charCount;
   }
};









/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} ;