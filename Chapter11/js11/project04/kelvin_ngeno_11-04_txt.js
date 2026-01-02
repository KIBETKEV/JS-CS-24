"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-04

      Project to retrieve UV index and other solar information for user's current position
      Author: kelvin ngeno
      Date:   

      Filename: project11-04.js
*/

// Table Objects
// Table elements
let latCell = document.getElementById("lat");
let lngCell = document.getElementById("lng");
let uvIndexCell = document.getElementById("uvIndex");
let uvMaxCell = document.getElementById("uvMax");
let ozoneCell = document.getElementById("ozone");
let st1Cell = document.getElementById("st1");
let st2Cell = document.getElementById("st2");
let st3Cell = document.getElementById("st3");
let st4Cell = document.getElementById("st4");
let st5Cell = document.getElementById("st5");
let st6Cell = document.getElementById("st6");

// Get the device's current position
navigator.geolocation.getCurrentPosition(getLocation, handleError);

function getLocation(pos) {
    // Get the user's latitude and longitude
    let myPosition = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
    };

    // Declare the API endpoint and key
    const url = "https://api.openuv.io/api/v1/uv";
    const key = "YOUR_API_KEY_HERE"; // Replace with your Open UV Index API key

    // Fetch UV data
    fetch(`${url}?lat=${myPosition.lat}&lng=${myPosition.lng}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": key
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(json => showSunSafety(json))
        .catch(error => console.error("Error:", error));
}

function handleError() {
    alert("Unable to get your location");
}

function showSunSafety(obj) {
    // Display latitude and longitude
    latCell.textContent = obj.result.latitude.toFixed(6);
    lngCell.textContent = obj.result.longitude.toFixed(6);

    // Display UV data
    uvIndexCell.textContent = obj.result.uv;
    uvMaxCell.textContent = obj.result.uv_max;
    ozoneCell.textContent = obj.result.ozone;

    // Display safe exposure times
    st1Cell.textContent = obj.result.safe_exposure_time.st1 || "N/A";
    st2Cell.textContent = obj.result.safe_exposure_time.st2 || "N/A";
    st3Cell.textContent = obj.result.safe_exposure_time.st3 || "N/A";
    st4Cell.textContent = obj.result.safe_exposure_time.st4 || "N/A";
    st5Cell.textContent = obj.result.safe_exposure_time.st5 || "N/A";
    st6Cell.textContent = obj.result.safe_exposure_time.st6 || "N/A";
};






