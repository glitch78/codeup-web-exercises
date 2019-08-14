(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Lancelot",
        lastName: "Ellis"
    };


    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function (input1, input2) {
        return " Hello from " + input1 + input2
    };
    console.log(person.sayHello("Lancelot ", "Ellis "));

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //multiply amount times .12, then subtract the difference from the total price
    //250- 250  * .12.
    //amount - amount * .12
    // print their name
    //amount before discount
    // if they get discount
    //amount after discount

    shoppers.forEach(function (element) {
        //console.log(element.amount, element.name );
        //console.log(element.amount);
        if (element.amount >= 200) {

            var discount = element.amount - element.amount * .12;
            console.log("Your discounted price is " + discount);
        } else {
            console.log(element.name + " you don't get a discount");
        }
    });

    /*
        var discount = .12;
        shoppers.forEach(function(element,index) {

        });


     */


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

        // create an array of objects that represent books and save it in a variable called books
        // each object should have a title and an author
        // the author property should be an object with properties firstName and lastName

    var books = [
            {
                Title: "Outliers",
                author: {
                    firstName: "Malcom",
                    lastName: "Gladwell"
                }
            },
            {
                Title: "All The Shah's Men ",
                Author: {
                    firstName: "Stephen",
                    lastName: "Kinzer"
                }
            },
            {
                Title: "Raising Cain",
                author: {
                    firstName: "Dan ",
                    lastName: "Kindlon"
                }
            },
            {
                Title: "A Peoples History of the United States",
                author: {
                    firstName: "Howard",
                    lastName: "Zinn"
                }
            },
            {
                Title: "When I Was the Greatest",
                author: {
                    firstName: "Jason",
                    lastName: "Reynolds"
                }

            }

        ];

    console.log(books[0].author.firstName);
    console.log(books[1].author.lastName);
    console.log(books[2].author.firstName);
    console.log(books[3].author.lastName);
    console.log(books[4].author.firstName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();