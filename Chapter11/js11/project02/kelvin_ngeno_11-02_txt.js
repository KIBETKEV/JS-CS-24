"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: kelvin ngeno
      Date:   

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
    const codeValue = postalCode.value;
    const countryValue = country.value;

    place.value = '';
    region.value = '';

    const url = `http://api.zippopotam.us/${countryValue}/${codeValue}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Place not found');
            }
            return response.json();
        })
        .then(json => {
            place.value = json.places[0]['place name'] || 'Place not found';
            region.value = json.places[0]['state'] || 'Region not found';
        })
        .catch(error => {
            console.error('Error:', error);
            place.value = 'Place not found';
            region.value = 'Region not found';
        });
      };