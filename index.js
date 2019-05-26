const time_picker = document.getElementById('time');
const date_picker = document.getElementById('date-zone');
const time_zone = document.getElementById('am');

let hours = new Date();
let common = hours.getHours() + ':' + hours.getMinutes();
let day = hours.getDate() + ',' + hours.getFullYear();
let headline = time_zone.classList.add('timezone');

time_picker.innerText = common;
date_picker.innerText = day;
