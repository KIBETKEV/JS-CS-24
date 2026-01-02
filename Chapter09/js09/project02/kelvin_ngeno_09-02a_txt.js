"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: 
      Date:   

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");
document.getElementById('submitButton').onclick = showData;

function showData() {
	
    sessionStorage.setItem('riderName', document.getElementById('riderName').value);
    sessionStorage.setItem('ageGroup', document.getElementById('ageGroup').value);
    sessionStorage.setItem('bikeOption', document.getElementById('bikeOption').value);
    sessionStorage.setItem('routeOption', document.getElementById('routeOption').value);
    sessionStorage.setItem('accOption', document.getElementById('accOption').value);
    sessionStorage.setItem('region', document.getElementById('region').value);
    sessionStorage.setItem('miles', document.getElementById('miles').value);
    sessionStorage.setItem('comments', document.getElementById('comments').value);
	
	window.location.href = 'kelvin_ngeno_project09-02b.html';
};