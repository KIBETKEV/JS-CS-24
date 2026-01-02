"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: kelvin ngeno
      Date:   

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
	if (document.cookie) {
	
	function getBestTime() {
        if (document.cookie) {
            let cookies = document.cookie.split('; ');
			for (let cookie of cookies) {
				if (cookie.startsWith('puzzle8Best=')) {
            return parseInt(cookie.substring('puzzle8Best='.length));
				}
			}
		}
        return 9999;
	}
	
	function updateRecord() {
        let solutionTime = parseInt(clockTimer.textContent);
        let bestTime = getBestTime();

        if (solutionTime < bestTime) {
            bestTime = solutionTime;
        }

        let expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 90);
        document.cookie = `puzzle8Best=${bestTime}; expires=${expirationDate.toUTCString()}`;
        document.getElementById('bestText').textContent = `${bestTime} seconds`;
    }
      }
});




