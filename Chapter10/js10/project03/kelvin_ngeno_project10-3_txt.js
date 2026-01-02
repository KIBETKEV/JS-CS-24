"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: kelvin ngeno
    Date:   

    Filename: project10-03.js
*/


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   




bikeFind = new google.maps.DirectionsService();

    
bikeDraw = new google.maps.DirectionsRenderer();

    
 let Boulder = new google.maps.LatLng(40.015, -105.2705);

    
    myMap = new google.maps.Map(bikeMap, {
        zoom: 12,
        center: Boulder
    });    
    bikeDraw.setMap(myMap);

    bikeDraw.setPanel(bikeDirections);

    startingPoint.addEventListener('change', drawRoute);
    endingPoint.addEventListener('change', drawRoute);

function drawRoute() {
    let startingPoint = document.getElementById("startingPoint").value;
    let endingPoint = document.getElementById("endingPoint").value;

    if (startingPoint !== "0" && endingPoint !== "0") {
        let bikeRoute = {
            origin: startingPoint,
            destination: endingPoint,
            travelMode: google.maps.TravelMode.BICYCLING
        };

        bikeFind.route(bikeRoute, function(response, status) {
            if (status === 'OK') {
                bikeDraw.setDirections(response);
            } else {
                document.getElementById("bikeDirections").textContent = `Directions Unavailable: ${status}`;
            }
        });
    }
};