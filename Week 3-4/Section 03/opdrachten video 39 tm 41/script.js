"use strict";

//1;

const arrayOne = ["Konijn", "Koe", "Vos", "Das", "Beer"];
console.log(arrayOne[1]);

//2
const arrayTwo = ["Konijn", "Koe", "Vos", "Das", "Beer"];
console.log(arrayTwo[4]);

//3
const arrayThree = ["Konijn", "Koe", "Vos", "Das", "Beer"];
console.log("Dier 1:", arrayThree[1], "Dier 2:", arrayThree[2]);

//4
const arrayFour = ["Konijn", "Koe", "Vos", "Das", "Beer"];
console.log("Dier 1:", arrayFour[1]);
console.log("Dier 2:", arrayFour[2]);
console.log("Lengte array:", arrayFour.length);

//5,6
const firstName = "ismael";
const arrayFive = ["one", "two", "three", "four", firstName];
arrayFive[1] = "Herder";
console.log(arrayFive);
