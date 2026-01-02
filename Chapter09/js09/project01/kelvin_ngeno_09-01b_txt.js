"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: kelvin ngeno
      Date:   

      Filename: project09-01b.js
*/

*/

let query = location.search.slice(1);

query = query.replace(/\+/g, ' ');

query = decodeURIComponent(query);

let cardFields = query.split('&');

for (let item of cardFields) {
	let nameValue = item.split('=');
	let name = nameValue[0];
	let value = nameValue[1];
	
	document.getElementById(name).textContent = value;
}