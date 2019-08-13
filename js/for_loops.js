/*for (var i = 0;  i < 65536; i++) {
    console.log(i);
}


for(let i = 1; i < 13 ; i++){
    for(let j = 1; j < 13 ; j++){
        console.log(`${j} x ${i} = ${j*i}`)
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
*/







function shoowmultiplicationTable(number) {
    for (var i =1; i <= 10; i++) {
        console.log(number + " X " + i + " = " + (i * number));
    }
}
shoowmultiplicationTable(7);
/*

function showMultiplicationTable(number) {
    for (var i = 1; i <=10; i++) {

        console.log(i + " X " + number + " = " + (i * number));
    }

}
showMultiplicationTable(7);


 */




function randomOddEven() {
    for (var i = 1; i <=10; i++) {
        var number = Math.floor(Math.random() * 181) + 20;
        if (number % 2 === 0) {
            console.log(number +  " is even ");
        } else {
            console.log(number + " is odd ");
        }

    }

}
randomOddEven();

for(var i = 1; i <= 9; i++){
    var row ="";
    for(var j = 0; j < i; j++){
        row = row + i;
    }
    console.log(row);
}

for (var i = 100; i > 5; i = i - 5) {
    console.log(i);
}

var random = Math.floor((Math.random()*50)+ 1);

console.log("Random odd number to skip is: " + random);

for (var i = 1; i < 50; i++) {
    console.log("here is an odd numb: " + i);
}




var number = prompt("Enter a number between 1 and 50");

while (number < 1 || 50 < number) {
    number = prompt(" invalid input! Enter a number between 1 and 50");
    if(number < 1 || 50 < number) {
        break;
    }
}


for (var i = 1; i <= 50; i = i + 2) {

    if (i === number) {
        console.log("YIKES! Skipping the number: " + i);
        continue;
    }
    console.log("Here is and odd number " + i);
}









/*
for (var i = 1; i <= 9; i ++) {
    var row = "";
    for(var j = 1; j <=i; j++){
        row = row + i;
    }
    console.log(row); //question 3
}

*/





