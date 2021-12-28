/*
    // Problem: Write a JavaScript program to get the current date.

    Expected Output: , mm-dd-yyyy, mm/dd/yyyy & dd-mm-yyyy, dd/mm/yyyy
*/

const curDate = (sep, formation) => {
    let date = new Date();
    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (formation === 'dd') {
        document.getElementById('curDate').innerHTML = `${dd}${sep}${mm}${sep}${yy}`;        
    } else if (formation === 'mm') {
        document.getElementById('curDate').innerHTML = `${mm}${sep}${dd}${sep}${yy}`;
    }
}

// const sep = document.getElementById('sep').value;
// const formation = document.getElementById('formation').value;
let separator = prompt('Set your separator', );
let formation = prompt('Set your formation', );
curDate(separator, formation);