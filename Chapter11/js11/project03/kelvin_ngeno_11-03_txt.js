"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-03

      Project to retrieve order history from a web server
      Author: kelvin ngeno
      Date:   

      Filename: project11-03.js
*/

let orderResult = document.getElementById("orderResult");
let userIDBox = document.getElementById("userID");
let pwdBox = document.getElementById("pwd");


viewOrders.onclick = function () {
      // Declare user and pwd variables
      const user = userIDBox.value;
      const pwd = pwdBox.value;
  
      // Construct the URL
      const url = `wworders.pl?id=${user}&pwd=${pwd}`;
  
      // Fetch the data
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error("Failed to fetch orders. Check credentials.");
              }
              return response.json();
          })
          .then(json => {
              // Call buildOrderTable with the json object
              buildOrderTable(json);
          })
          .catch(error => {
              // Log errors to the console
              console.error("Error:", error);
          });
  };

  function buildOrderTable(obj) {
      // Select the element where the orders will be displayed
      let orderResult = document.getElementById("orderResult");
  
      // Check if obj.status indicates no orders
      if (obj.status === "Orders Not Found") {
          orderResult.innerHTML = "No orders found for this user id and password";
      } else {
          // Initialize the htmlCode variable with user details and total charges
          let htmlCode = `<h2>Order Details</h2>
                          <p>User: ${obj.username}</p>
                          <p>Total Charges: $${obj.totalCharges}</p>`;
  
          // Loop through the orderHistory array
          for (let order of obj.orderHistory) {
              // Add table for the current order
              htmlCode += `<table>
                              <caption>Order Details</caption>
                              <tr><th>Date</th><td>${order.orderDate}</td></tr>
                              <tr><th>Cost</th><td>$${order.orderCost}</td></tr>
                              <tr><th colspan="4">Product Details</th></tr>
                              <tr>
                                  <th>Description</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th>Total</th>
                              </tr>`;
  
              // Loop through the products array in the current order
              for (let product of order.products) {
                  // Add a row for each product
                  htmlCode += `<tr>
                                  <td>${product.description}</td>
                                  <td>${product.qty}</td>
                                  <td>$${product.price}</td>
                                  <td>$${product.total}</td>
                               </tr>`;
              }
  
              // Close the orderList table for the current order
              htmlCode += `</table>`;
          }
  
          // Write the final HTML code to the orderResult element
          orderResult.innerHTML = htmlCode;
      }
  }