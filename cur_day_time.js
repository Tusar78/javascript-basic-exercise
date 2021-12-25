/*
Problem : Write a javascript program to display the current day and time in the following format, Example below,
Today is : Tuesday.
Current Time is : 10 PM : 30 : 38
*/

// Create a new Date
const date = new Date();

// Weeks Lists
const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = weeks[date.getDay()];

// Print Today
document.getElementById("day").innerHTML = `Today is: ${today}.`;

// Current Time
let hours = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();

// AM or PM check
if (hours >= 12) {
  if (hours - 12 === 0) {
    hours = "12 PM";
  } else {
    hours = (hours - 12) + " PM";
  }
} else {
  if (hours === 0) {
    hours = "12 AM";
  } else {
    hours += " AM";
  }
}

// Minute
if (minutes < 10) {
    minutes = '0' + minutes;
}

// Second
if (second < 10) {
    second = '0' + second;
}

// Print Current Time
const printFormat = `Current Time is: ${hours} : ${minutes} : ${second}`; 
document.getElementById('time').innerHTML = printFormat;
