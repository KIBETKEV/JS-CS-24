"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: kelvin ngeno
      Date:   

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for (let i = 0; i < phrases.length; i++) {
      // Apply an onclick event handler to each phrase
      phrases[i].onclick = function() {
          

          let phrase = document.createElement("h1");
          phrase.textContent = this.textContent;  
          
          // Step 5: Create the footnote variable containing a p element
          let footnote = document.createElement("p");
          footnote.textContent = footnotes[i];  
          footnote.style.fontStyle = "italic";  
          footnote.style.fontSize = "1.2em";   
          // Step 6: Create the closeButton variable containing an input element
          let closeButton = document.createElement("input");
          closeButton.type = "button";
          closeButton.value = "Close Footnote";
          closeButton.style.display = "block";
          closeButton.style.margin = "10px auto";
          
          // Step 7: Open a popup window
          let popup = window.open("", "footnote", "width=300,height=200,top=100,left=100");
          
          // Step 8: Style the popup window's body
          popup.document.body.style.backgroundColor = "ivory";
          popup.document.body.style.fontSize = "16px";
          popup.document.body.style.padding = "10px";
          
          // Step 9: Append the phrase, footnote, and closeButton to the popup
          popup.document.body.appendChild(phrase);
          popup.document.body.appendChild(footnote);
          popup.document.body.appendChild(closeButton);
          
          // Step 10: Add an onclick event handler to the closeButton to close the popup
          closeButton.onclick = function() {
              popup.close();
          };
      };
  };