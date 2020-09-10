//Program to convert minutes to seconds 
var minutes = '05:00';   
var a = minutes.split(':'); 
console.log("Minutes: " + minutes);
var seconds = ((+a[0]) * 60) + (+a[1]); 

console.log("Seconds: " +seconds);