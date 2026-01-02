"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-05

    Crossword Puzzle Code for Keyboard Actions
    
    Author: kelvin ngeno
    Date:   

   Filename: project10-05.js

*/


let allLetters, currentLetter, wordLetters, acrossClue, downClue;
let typeDirection = "right";

window.onload = init;

function init() {
   // Reference all letter squares and set the initial selected letter
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0];
   
   // Set up references for across and down clues associated with the current letter
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);
   
   // Highlight the initial row, column, and square
   formatPuzzle(currentLetter);
   
   // Set event handlers for each letter square to reformat the puzzle on pointer down
   for (let letter of allLetters) {     
      letter.onpointerdown = function(e) {
         formatPuzzle(e.target);
      };
   }
   
   // Event handler to toggle typing direction when typeImage is clicked
   document.getElementById("directionImg").onpointerdown = switchTypeDirection;
   
   // Event handler to show errors in red for 1 second
   document.getElementById("showErrors").onclick = function() {
      for (let letter of allLetters) {
         if (letter.textContent !== letter.dataset.letter) {
            letter.style.color = "red";
         }
      }
      setTimeout(function() {
         for (let letter of allLetters) {
            letter.style.color = "";
         }
      }, 1000);
   }
   
   // Event handler to display the full solution
   document.getElementById("showSolution").onclick = function() {
      for (let letter of allLetters) {
         letter.textContent = letter.dataset.letter;
      }
   };

   // Add a keydown event listener to handle key presses
   document.addEventListener("keydown", handleKeyPress);
}

// Formats the puzzle, highlighting the row/column for the selected square
function formatPuzzle(puzzleLetter) {
   currentLetter = puzzleLetter; 
   
   // Reset all squares and clues to default styles
   for (let letter of allLetters) {
      letter.style.backgroundColor = "";
   }
   if (acrossClue) acrossClue.style.color = "";
   if (downClue) downClue.style.color = "";
     
   // Highlight the associated across clue and squares
   if (currentLetter.dataset.clueA) {
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      acrossClue.style.color = "blue";
      wordLetters = document.querySelectorAll("[data-clue-a='" + currentLetter.dataset.clueA + "']");
      for (let wordLetter of wordLetters) {
         wordLetter.style.backgroundColor = "rgb(231, 231, 255)";
      }
   }

   // Highlight the associated down clue and squares
   if (currentLetter.dataset.clueD) {
      downClue = document.getElementById(currentLetter.dataset.clueD);
      downClue.style.color = "red";
      wordLetters = document.querySelectorAll("[data-clue-d='" + currentLetter.dataset.clueD + "']");
      for (let wordLetter of wordLetters) {
         wordLetter.style.backgroundColor = "rgb(255, 231, 231)";
      }
   }
   
   // Set the current square's background color based on typing direction
   currentLetter.style.backgroundColor = typeDirection === "right" ? "rgb(191, 191, 255)" : "rgb(255, 191, 191)";
}

// Switches the typing direction and updates the directional image and color accordingly
function switchTypeDirection() {
   let typeImage = document.getElementById("directionImg");
   if (typeDirection === "right") {
      typeDirection = "down";
      typeImage.src = "pc_down.png";
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   } else {
      typeDirection = "right";
      typeImage.src = "pc_right.png";
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }   
}

// Handles key press events for letter inputs and navigation
function handleKeyPress(e) {
   if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
      currentLetter.textContent = e.key.toUpperCase();
      
      // Move to the next cell based on typing direction
      moveToNextLetter();
   } else if (e.key === "Backspace") {
      currentLetter.textContent = ""; // Clear current letter
      moveToPreviousLetter(); // Move back one cell if possible
   }
}

// Moves to the next cell in the current typing direction
function moveToNextLetter() {
   let nextLetter;
   if (typeDirection === "right") {
      nextLetter = currentLetter.nextElementSibling;
   } else {
      const currentIndex = Array.from(allLetters).indexOf(currentLetter);
      nextLetter = allLetters[currentIndex + 1];
   }
   
   if (nextLetter) formatPuzzle(nextLetter);
}

// Moves to the previous cell, typically used with the Backspace key
function moveToPreviousLetter() {
   let prevLetter;
   if (typeDirection === "right") {
      prevLetter = currentLetter.previousElementSibling;
   } else {
      const currentIndex = Array.from(allLetters).indexOf(currentLetter);
      prevLetter = allLetters[currentIndex - 1];
   }
   
   if (prevLetter) formatPuzzle(prevLetter);
}