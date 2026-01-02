"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: kelvin ngeno
      Date:   

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/


let timer {
      timer.minutes = min;
      timer.seconds = sec;
      timer.timeID = "";
}
Timer.prototype.runPause = function(timer, minBox, secBox) {
	if (timer.timeID) {
		window.clearInterval(timer.timeID);
		timer.timeID = null;
	} else {
		timer.timeID = window.setInterval(function() {
			countdown();
		}, 1000);
	}
	
	function countdown() {
		if (timer.seconds > 0) {
			timer.seconds--;
		} else if (timer.minutes > 0) {
			timer.minutes--;
			timer.seconds = 59;
		} else {
			window.clearInterval(timer.timeID);
			timer.timeID = null;
		}
		
		minBox.value = timer.minutes;
		secBox.value = timer.seconds;
	}
};




/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let minutesBox = document.getElementById("minutesBox");
let secondsBox = document.getElementById("secondsBox");
let runPauseButton = document.getElementById("runPauseButton");

let myTimer = new Timer(parseInt(minutesBox.value), parseInt(secondsBox.value));

minutesBox.onchange = function() {
	myTimer.minutes = parseInt(minutesBox.value);
};

secondsBox.onchange = function() {
	myTimer.seconds = parseInt(secondsBox.value);
};

runPauseButton.onclick = function() {
	myTimer.runPause(myTimer, minutesBox, secondsBox);
};