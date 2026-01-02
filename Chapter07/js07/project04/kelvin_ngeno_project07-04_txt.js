"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: kelvin ngeno
      Date:   10/10/2024

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan", "Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
   "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
   "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
   "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
   "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
   "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
   "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

// Add customer to the end of the queue
addButton.onclick = function () {
if (customerName.value.trim() !== "") {  // Check if input is not empty
customers.push(customerName.value);
generateCustomerList();
status.textContent = `${customerName.value} added to the end of the queue.`;
} else {
status.textContent = "Please enter a valid customer name.";
}
};

// Search for customer in the queue
searchButton.onclick = function () {
let index = customers.indexOf(customerName.value);
let place = index + 1;
if (index === -1) {
status.textContent = `${customerName.value} is not found in the queue.`;
} else {
status.textContent = `${customerName.value} is at position ${place} in the queue.`;
}
};

// Remove customer from the queue
removeButton.onclick = function () {
let index = customers.indexOf(customerName.value);
if (index !== -1) {
customers.splice(index, 1);
status.textContent = `${customerName.value} removed from the queue.`;
generateCustomerList();
} else {
status.textContent = `${customerName.value} is not found in the queue.`;
}
};

// Remove the top customer from the queue
topButton.onclick = function () {
if (customers.length > 0) {
let topCustomer = customers.shift(); // Remove the first customer in the queue
status.textContent = `Top customer ${topCustomer} removed from the queue.`;
generateCustomerList();
} else {
status.textContent = "No customers left in the queue.";
}
};

// Generate customer list dynamically
generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
customerList.innerHTML = "";
for (let i = 0; i < customers.length; i++) {
let customerItem = document.createElement("li");
customerItem.textContent = customers[i];
customerList.appendChild(customerItem);
}
}