/*
    // Problem : Write a JavaScript function to find the area of a triangle where length of the three of its sides are 5, 6, 7
*/

let side1 = 5, 
    side2 = 6, 
    side3 = 7;

let s = (side1 + side2 + side3) / 2;
let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

document.getElementById('triangle-area').innerHTML = area;