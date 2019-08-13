
var i = 1;
while (i < 65536){
    i = i * 2;
    console.log(i);
}

var allCones = Math.floor(Math.random() * 50) + 50;



console.log("Let's get to work, I've got" + allCones + "conse to sell")
do {
    var conseSold = Math.floor(Math.random() * 5) + 1;
    if (conseSold > allCones) {
        console.log("Sorry, I can't sell to you" + conseSold + "I've only got " + allCones + "left")
    }else {
        allCones = allCones - conseSold;
        console.log("Here you are!" + conseSold + "cones only" + allCones + "left to sell")
    }
} while (allCones > 0) ;

console.log("All cones sold, let's go home");

