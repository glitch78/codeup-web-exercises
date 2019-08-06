"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my website");

var favorite = prompt("What is your favorite color?");

confirm("Cool!" + " " + favorite + " " + "is my favorite color too.");


/**************************
 *Section on video rental
 */


//Ask about concatenating string in to a number


var littleMermaidDaysRented = prompt("How many days did you rent Little Mermaid?");
alert("I rented it for" + " " + Number(littleMermaidDaysRented));

var brotherBearDaysRented =prompt("How many days did you rent Brother Bear?");
alert("I rented it for" + " " + Number(brotherBearDaysRented));

var herculesDaysRent = prompt("How many days did you rent Hercules");
alert("I rented it for" + " " + Number(herculesDaysRent));

var totalDaysRented = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRent);
alert ("The total days rented is:" + " " + Number(totalDaysRented));

var pricePerDay = prompt("What is the price per day to rent a move?");
alert("The price per day is" + " " + pricePerDay);

var rentalTotal = alert("The total cost is" + Number(pricePerDay) * Number(totalDaysRented));



/*********************
 * Section on hourly payments

 */

var totalGooglePayment = prompt ("how much did google pay you?" );
alert("Google paid me:" + " " + totalGooglePayment);


var totalAmazonPayment = prompt("Amazon paid me: ");
alert("Amazon paid me:" + " " + totalAmazonPayment);

var toatalFacebookPayment = prompt("how much did facebook pay you");
alert("Facebook paid me: " + " " + toatalFacebookPayment);

var totalyCompensation = alert("My total compensation is:" + " "  + Number(toatalFacebookPayment) + Number(totalAmazonPayment) + Number(totalGooglePayment));


var classIsnotFull = true;
var classIsfull = false;
var noSheduleConflict = true;

var studentEnroll = classIsnotFull && noSheduleConflict;


console.log(studentEnroll);

var twoOrMore = true;
var notExpired = true;

var offerapplied = twoOrMore || notExpired;
console.log(offerapplied);




