"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: kelvin ngeno
      Date:   

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

document.addEventListener('DOMContentLoaded', function() {
	if (localStorage.sbloggerVisit) {
		let storedLastDate = localStorage.getItem('sbloggerVisit');
		
		lastVisitDate.textContent = storedLastDate;
		
		let lastDate = new Date(storedLastDate);

        for (let dateElement of articleDates) {
            let articleDate = new Date(dateElement.textContent.trim());
            if (articleDate.getTime() > lastDate.getTime()) {
                dateElement.innerHTML += '<strong>new</strong>';
            }
        }
    } else {
        lastVisitDate.textContent = "Welcome to SBlogger!";
        
        for (let dateElement of articleDates) {
            dateElement.innerHTML += '<strong>new</strong>';
        }
    }

    // Update localStorage with the current date
    let currentDate = new Date('9/12/2024'); // Test date for verification
    localStorage.setItem('sbloggerVisit', currentDate.toLocaleDateString());
});


