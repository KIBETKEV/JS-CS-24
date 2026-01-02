"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: kelvin ngeno
      Date:   

      Filename: project11-01.js
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {
	const dateStr = dateBox.value;
	const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY$date=dateStr`;
	
	fetch(url)
            .then(response => response.json())
            .then(json => showPicture(json))
            .catch(error => console.error('Error:', error));
};


function showPicture(json) {
	const imageBox = document.querySelector('#imageBox');
	
	if (json.media_type === 'video') {
        imageBox.innerHTML = `
            <h2>${json.title}</h2>
            <iframe width="560" height="315" src="${json.url}" frameborder="0" allowfullscreen></iframe>
            <p>${json.explanation}</p>`;
			
			} else if (json.media_type === 'image') {
        imageBox.innerHTML = `
            <h2>${json.title}</h2>
            <img src="${json.url}" alt="${json.title}" />
            <p>${json.explanation}</p>
        `;
    } else {
        imageBox.innerHTML = 'Image not Available';
	}
}






