@charset "utf-8";

/*
	Jeff Hamilton
	Project 2: JavaScript
	
*/

/*Store the current date and time*/

var currentDay = new Date("May 23, 2021 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();
 

/*Display the current date and time*/

document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/*Display the time left until New Year's Eve*/

document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";
