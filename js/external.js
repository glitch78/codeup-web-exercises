"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my website");

var favoriteColor = prompt("What is your favorite color?");

alert("Cool!" + " " + favoriteColor + " " + "is my favorite color too.");


/**************************
 *Section on video rental
 */


//Ask about concatenating string in to a number


var littleMermaidDaysRented = prompt("How many days did you rent Little Mermaid?");
alert("I rented it for" + " " + +littleMermaidDaysRented + " days");

var brotherBearDaysRented = prompt("How many days did you rent Brother Bear?");
alert("I rented it for" + " " + +brotherBearDaysRented + " days");

var herculesDaysRented = prompt("How many days did you rent Hercules?");

alert("I rented it for" + " " + +herculesDaysRented + " days");

var totalDaysRented = (littleMermaidDaysRented + +brotherBearDaysRented + +herculesDaysRented);
alert("The total days rented is:" + " " + +totalDaysRented + " days");

var pricePerDay = prompt("What is the price per day to rent a move?");
alert("The price per day is $" + " " + +pricePerDay);

var rentalTotal = (+pricePerDay * +totalDaysRented).toFixed(2);

alert("The total cost was $" + rentalTotal);

/*********************
 * Section on hourly payments

 */

var totalGooglePayment = prompt("how much did google pay you?");
alert("Google paid me:" + " " + totalGooglePayment);


var totalAmazonPayment = prompt("Amazon paid me: ");
alert("Amazon paid me:" + " " + totalAmazonPayment);

var toatalFacebookPayment = prompt("how much did facebook pay you");
alert("Facebook paid me: " + " " + toatalFacebookPayment);

var totalyCompensation = alert("My total compensation is:" + " " + toatalFacebookPayment + totalAmazonPayment + totalGooglePayment);

/***********************
 * come back to this
 * @type {boolean}
 */
var classIsNotFull = confirm("Class is not full:");
var classScheduleDoesNotConflict = confirm("Schedules do not conflict:");

var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

alert("Student enrolled: " + studentEnrolled);


var numberOfItems = +prompt("How many items for checkout?");
var offerIsValid = confirm("Offer is valid:");
var isPremiumMember = confirm("Is premium member:");

var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);







