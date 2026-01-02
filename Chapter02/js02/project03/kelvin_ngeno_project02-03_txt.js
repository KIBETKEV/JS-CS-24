/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: kelvin ngeno
      Date:   

      Filename: project02-03.js
 */
document.getElementById("square").onmouseover = function () {
      document.getElementById("feedback").innerHTML="You're hovering over  square";
};
 document.getElementById("square").onmouseout = function () {
            document.getElementById("feedback").innerHTML="";
};
document.getElementById("triangle").onmouseover = function () {
      document.getElementById("feedback").innerHTML="You're hovering over triangle";
};
 document.getElementById("triangle").onmouseout = function () {
      document.getElementById("feedback").innerHTML="";
};
document.getElementById("circle").onmouseover = function ()  {
      document.getElementById("feedback").innerHTML="You're hovering over  circle";
};
 document.getElementById("circle").onmouseout = function () {
      document.getElementById("feedback").innerHTML="";
};