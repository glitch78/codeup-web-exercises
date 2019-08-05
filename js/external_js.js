"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my website");

prompt("What is your favorite color?");

confirm("Cool! That's my favorite color too!");



var  littleMermaidDaysRented, brotherBearDaysRented, herculesDaysRented, pricePerDay;

littleMermaidDaysRented = 3;
brotherBearDaysRented = 5;
herculesDaysRented = 1;
pricePerDay = 3;

//variables and operators lesson from codeup
var mermaidTotal = littleMermaidDaysRented * pricePerDay;
var brotehrBearTotal = brotherBearDaysRented * pricePerDay;
var herculesTotal = herculesDaysRented * pricePerDay;


var rentalTotal = mermaidTotal + brotehrBearTotal + herculesTotal;
console.log( "The video rental total is "  + rentalTotal);

var google, amazon, faceBook, googleHours, amazonHours, faceBookHours, googlePay, amazonPay, faceBookPay, totalPay;
google = 400;
amazon = 380;
faceBook = 350;
googleHours = 6;
amazonHours = 4;
faceBookHours = 10;

googlePay = google * googleHours;

console.log("Google paid me: " + googlePay);

amazonPay = amazon * amazonHours;
console.log("Amazon paid me: " + amazonPay);

faceBookPay = faceBook * faceBookHours;
console.log("Facebook paid me: " + faceBookPay);

totalPay = googlePay + amazonPay + faceBookPay;

console.log("My total pay is: " + totalPay);

var classIsnotFull = true;
var classIsfull = false;
var noSheduleConflict = true;

var studentEnroll = classIsnotFull && noSheduleConflict;


console.log(studentEnroll);

var twoOrMore = true;
var notExpired = true;

var offerapplied = twoOrMore || notExpired;
console.log(offerapplied);

var username = 'codeup';
var password = 'notastrongpassword'



