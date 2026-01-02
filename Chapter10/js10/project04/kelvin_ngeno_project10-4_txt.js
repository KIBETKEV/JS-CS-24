"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: kelvin ngeno
    Date:   

    Filename: project10-04.js
*/


// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

for (let piece of pieces) {
	piece.draggable = true;
        piece.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text', event.target.id);
        });
}

for (let square of boardSquares) {
	square.addEventListener('dragover', function(event) {
            event.preventDefault();
        });
		
		square.addEventListener('drop', function(event) {
            event.preventDefault();
			
			let pieceID = event.dataTransfer.getData('text');
            let movingPiece = document.getElementById(pieceID);
			
			if (event.target.tagName === 'TD') {
                event.target.appendChild(movingPiece);
            } else if (event.target.tagName === 'SPAN') {
                
                let occupyingPiece = event.target;
                let square = occupyingPiece.parentElement;
				
				if (occupyingPiece.classList.contains('white')) {
                    whiteBox.appendChild(occupyingPiece);
                } else if (occupyingPiece.classList.contains('black')) {
                    blackBox.appendChild(occupyingPiece);
				}
			}
		});
	}
