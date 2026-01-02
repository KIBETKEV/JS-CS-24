"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: kelvin ngeno
      Date:   

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
    // Retrieve information about the selected file
    let JSONfile = this.files[0];
    
    // Read the contents of the selected file
    let fr = new FileReader();
    fr.readAsText(JSONfile);

    // Once the file has finished loading, parse the JSON file
    fr.onload = function() {
        // Step 1: Convert the JSON data in fr.result into an object named staff
        let staff = JSON.parse(fr.result);
        
        // Step 2: Call the makeStaffTable() function using staff as the parameter value
        makeStaffTable(staff);
    }
};

function makeStaffTable(staff) {
    // Step 3: Create the table element
    let staffTable = document.createElement("table");
    
    // Step 4: Create the header row for property names
    let headerRow = document.createElement("tr");
    
    // Step 5: Create a for-in loop to iterate over the first staff member's properties
    for (let prop in staff.directory[0]) {
        let headerCell = document.createElement("th");
        headerCell.textContent = prop;  // Store property name as the header text
        headerRow.appendChild(headerCell);  // Append the header cell to the header row
    }
    
    // Append the header row to the table
    staffTable.appendChild(headerRow);

    // Step 6: Create table rows containing the property values for each directory entry
    for (let i = 0; i < staff.directory.length; i++) {
        let tableRow = document.createElement("tr");
        
        // Step 7: Loop through each property of the staff member
        for (let prop in staff.directory[i]) {
            let tableCell = document.createElement("td");
            tableCell.textContent = staff.directory[i][prop];  // Store the property value as the cell text
            tableRow.appendChild(tableCell);  // Append the cell to the row
        }

        // Append the row to the table
        staffTable.appendChild(tableRow);
    }

    // Step 8: Append the completed staffTable to the containerBox
    containerBox.appendChild(staffTable);
}