"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my website");

var favorite = prompt("What is your favorite color?");

confirm("Cool!" + " " + favorite + " " + "is my favorite color too.");



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






var totalGooglePayment = prompt ("how much did google pay you?" );
alert("Google paid me:" + "" + totalGooglePayment);


var totalAmazonPayment = prompt("Amazon paid me: ");
alert("Amazon paid me:" + " " + totalAmazonPayment);

var toatalFacebookPayment = prompt("how much did facebook pay you");
alert("Facebook paid me: " + " " + toatalFacebookPayment);

var totalyCompensation = alert("My total compensation is:" + " "  + toatalFacebookPayment + totalAmazonPayment + totalGooglePayment);


var classIsnotFull = true;
var classIsfull = false;
var noSheduleConflict = true;

var studentEnroll = classIsnotFull && noSheduleConflict;


console.log(studentEnroll);

var twoOrMore = true;
var notExpired = true;

var offerapplied = twoOrMore || notExpired;
console.log(offerapplied);




