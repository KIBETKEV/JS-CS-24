"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-05

      Project to retrieve content for a SF blog
      Author: kelvin ngeno
      Date:   

      Filename: project11-05.js
*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let selectionList = document.getElementById("authorList");
   let bookReview = document.getElementById("review");
   let podList = document.getElementById("podcastList");

   // Fetch a list of authors from the server
   fetch("authorlist.json")
      .then(response => response.json()) // Fixed syntax: `>` to `=>` and removed semicolon after fetch()
      .then(json => {
         // Place the authors in a selection list
         for (let author of json.authorlist) { // Fixed `authors` to `author` for singular iteration
            let newOpt = document.createElement("option");
            newOpt.value = author.initials; // Corrected `authors.initials` to `author.initials`
            newOpt.textContent = author.name; // Corrected `authors.name` to `author.name`
            selectionList.appendChild(newOpt);
         }

         // Create an onchange event handler that displays a review by the selected author
         selectionList.onchange = function () {
            fetch(`sfreviews.pl?author=${selectionList.value}`) // Fixed URL concatenation
               .then(response => response.json())
               .then(review => {
                  bookReview.innerHTML = review; // Ensure `review` is safe for direct insertion
               })
               .catch(e => console.error("Error fetching review:", e)); // Improved error message
         };
      })
      .catch(e => console.error("Error fetching author list:", e)); // Improved error message

   // Fetch the list of podcasts from an XML document
   fetch("sfpod.xml")
      .then(response => response.text())
      .then(str => new DOMParser().parseFromString(str, "text/xml")) // Fixed `Parser` to `DOMParser`
      .then(dom => {
         // Rewrite the XML structure into an HTML fragment
         let podcasts = dom.querySelectorAll("item");
         for (let show of podcasts) {
            let title = show.querySelector("title").textContent; // Use querySelector for clarity
            let summary = show.querySelector("description").textContent; // Changed to appropriate tag
            let link = show.querySelector("link").textContent; // Changed to appropriate tag
            let article = `
               <article>
                  <h1><a href="${link}" target="_blank">${title}</a></h1>
                  <p>${summary}</p>
               </article>
            `; // Fixed template literal syntax and added `target="_blank"` for links
            podList.insertAdjacentHTML("beforeend", article);
         }
      })
      .catch(e => console.error("Error fetching podcast XML:", e)); // Improved error message
}