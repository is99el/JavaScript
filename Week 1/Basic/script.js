// /************************************************
//  * Variables and data types
//  */

// var firstName = "Ismael";
// console.log(firstName);

// var lastName = "Azaaouaj";
// var age = 18;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "Software Developer";
// console.log(job);

// //Variable naming rules
// var _3years = 3;
// var ismaelAzaaouaj = " ISSI and ISSI";
// var if = 18;

// /*************************************8888888888
//  * Variable mutation and type coercion
//  */

// var firstName = "ismael";
// var age = 28;

// console.log(firstName + " " + age);

// var job, isMarried;
// job = "software developer";
// isMarried = false;

// console.log(firstName + " " + "is a " + job + "Is he married? " + isMarried);

// Variable mutation
// age = "twenty eight";
// job = "Driver";
// alert(firstName + " " + "is a " + job + " Is he married? " + isMarried);

// var lastName = prompt("What is his last Name?");
// console.log(firstName + " " + lastName);

/***********************************************88
 * Basic operators
//  */
// var year, yearIsmael, yearBurak;
// now = 2022;
// ageIsmael = 18;
// ageBurak = 21;

// //Math operators
// yearIsmael = now - 18;
// yearBurak = now - 21;
// console.log(yearIsmael);
// console.log(yearBurak);

// console.log(now + 3);
// console.log(now * 3);
// console.log(now / 3);

// // Logical operators
// var burakOlder = ageBurak > ageIsmael;
// console.log(burakOlder);

// // typeof operator
// console.log(typeof burakOlder);
// console.log(typeof ageIsmael);
// console.log(typeof "Ismael");
// var x;
// console.log(typeof x);

// /***********************************
//  * Operator precedence
//  */

// var now = 2022;
// var yearIsmael = 2004;
// var fullAge = 18;

// //Multiple operators
// var isFullAge = now - yearIsmael >= fullAge;
// console.log(isFullAge);

// //Group
// var ageIsmael = (now = yearIsmael);
// var ageIsmael = 18;
// var avarage = ageIsmael + ageBurak / 2;
// console.log(avarage);

//Multiple assigments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// //More operators

// x = x * 2;
// console.log(x);

// x++;
// console.log(x);

// x--;
// console.log(x);

//***********************
/*Challenge
//

// var heightIsmael = 1.72;
// var massIsmael = 60;

// var BMI = massIsmael / (heightIsmael * heightIsmael);
// console.log(BMI);

// var heightBurak = 1.85;
// var massBurak = 75;
// var BMI = massBurak / (heightBurak * heightBurak);
// console.log(BMI);

// var boolean = heightBurak < heightIsmael;
// console.log("Is Ismael higher than Burak?" + boolean);


/******************************
 * If/else statements
 */

// var firstName = "ismael";
// var civilStatus = "singel";

// if (civilStatus === "married") {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon");
// }

// var isMarried = true;
// console.log(firstName + "is he married? " + isMarried);

/***********************
 * Boolean logic
 */

// var firstName = "Ismael";
// var age = 9;

// if (age < 10) {
//   console.log(firstName + " is een puber");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager");
// } else {
//   console.log(firstName + " is een ouder");
// }

/**************************
 * The Ternay Operator and Switch Statements
 */

// var firstName = "ismael";
// var age = 15;

// age >= 18
//   ? console.log(firstName + " drinks beer")
//   : console.log(firstName + " drinks juice.");

// var drink = age > 18 ? "beer" : "juice";

/*************
 * Switch statements
 */
// var job = "zebi";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " teachers kids how to code");
//     break;
//   case "driver":
//     console.log(firstName + " drives an uber");
//     break;
//   case "software developer":
//     console.log(firstName + " make/'s websites");
//     break;
//   default:
//     console.log(firstName + " does something else");
// }

/****************************8
 * Truthy and falsy values and equality operators
 */

// var heitght;

// heitght = 7;

// if (heitght) {
//   console.log("Varianle is defined");
// } else {
//   console.log("Varianle is not defined");
// }

/*******************************
 * challenge 2
 */

// var johnTeam = 89 + 120 + 103;
// console.log(johnTeam);

// var mikeTeam = 116 + 94 + 123;
// console.log(mikeTeam);

// var maryTeam = 97 + 134 + 105;
// console.log(maryTeam);

// if (mikeTeam > johnTeam) {
//   console.log("Mike's team wins with " + mikeTeam);
// } else {
//   console.log("John's team wins with " + johnTeam);
// }

/***********************************8
 * Extra
 */
// var johnTeam = (89 + 120 + 103) / 3;
// console.log(johnTeam);

// var mikeTeam = (116 + 94 + 123) / 3;
// console.log(mikeTeam);

// var maryTeam = (97 + 134 + 105) / 3;
// console.log(maryTeam);

// if (johnTeam > mikeTeam && johnTeam > maryTeam) {
//   console.log(johnTeam + "points");
// } else if (mikeTeam > johnTeam && mikeTeam > maryTeam) {
//   console.log(maryTeam + " wins");
// } else if (maryTeam > johnTeam && maryTeam > mikeTeam) {
//   console.log(maryTeam + " wins");
// }

/*******************************************
 * function
 */

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// console.log(ageJohn);

// function yearUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   console.log(firstName + " " + retirement + " " + " years");
// }
// yearUntilRetirement(2004, " ismael");
// yearUntilRetirement(2000, " ismael");
// yearUntilRetirement(2010, " ismael");
