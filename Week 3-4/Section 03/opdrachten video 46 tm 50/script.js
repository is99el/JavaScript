//1

// for (let i = 0; i <= 3; i++) {
//   console.log(i);
// }
// // i ==0 als i<=3 dan steeds 1 er bij tellen en uitendelijk printen.

// //2
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//a
// let teller = 1;
// while (teller <= 10) {
//   console.log(`${teller}`);
//   teller++;
// }

//3
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

//a
// let teller = 1;
// while (teller <= 100) {
//   console.log(`${teller}`);
//   teller++;
// }

//4
// for (let i = 1; i <= 1000; i++) {
//   console.log(i);
// }

//a
// let teller = 1;
// while (teller <= 1000) {
//   console.log(`${teller}`);
//   teller++;
// }

//5
// for (let i = 1; i <= 100000; i++) {
//   console.log(i);
// }

// a
// let teller = 1;
// while (teller <= 100000) {
//   console.log(`${teller}`);
//   teller++;
// }

//6
// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

//a
// let teller = 100;
// while (teller >= 1) {
//   console.log(`${teller}`);
//   teller--;
// }

//7
// for (let i = 1; i <= 1000; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//a
// let teller = 1;
// while (teller <= 1000) {
//   teller++;
//   if (teller % 2 == 0) {
//     console.log(`${teller}`);
//   }
// }

//8
// for (let i = 1; i < 1000; i++) {
//   if (i % 100 == 0) {
//     console.log(i);
//   }
// }

//a
// let teller = 1;
// while (teller < 900) {
//   teller++;
//   if (teller % 100 == 0) {
//     console.log(`${teller}`);
//   }
// }

//9
//blijft maar door en uitendelijk crashed
// for (let i = 0; i <= 0; i++) {
//   console.log(i);
// }

//10
//50 is groter dan 10 dus er gebeurt niks
// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

//11
//je geeft niet aan dar er steeds 1 er bij moet komen waardoor het uitendelijk crashed
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//12
//Er staat geen console.log er bij dus je ziet niks gebeuren in de console
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//13
// const arrayOne = ["Koe", "Herder"];
// console.log(arrayOne[0], arrayOne[1]);

//14
// const arrayOne = ["Koe", "Herder"];
// arrayOne.push("vos");
// arrayOne.unshift("Das");
// console.log(arrayOne[0], arrayOne[1], arrayOne[2], arrayOne[3]);

//15
// const arrayOne = ["ismael"];
// for (arrayOne[0] = 1; arrayOne[0] <= 100; arrayOne[0]++) {
//   console.log(arrayOne);
// }

//16
// const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let i = 0; i < arrayOne.length; i++) {
//   console.log(arrayOne[i]);
// }
// var sum = 0;
// for (let i = 0; i < arrayOne.length; i++) {
//   sum = sum + arrayOne[i];
//   console.log(sum);
// }
// if (sum > 100) {
//   console.log(" ");
// } else {
//   console.log(sum * 2);
// }

//17
// const arrayOne = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < arrayOne.length; i++) {
//   console.log(arrayOne[i]);
// }

//18

//19

// const birthYears = [1988, 1982, 1988, 1988, 1922, 1990, 200, 2020, 2033, 2001];

// const age = [];

// for (let i = 0; i < birthYears.length; i++) {
//   age.push(2022 - birthYears[i]);
// }
// console.log(age);

//20
// for (let tafels = 1; tafels <= 1; tafels++) {
//   console.log(`------------Tafel ${tafels}`);

//   for (let getallen = 1; getallen <= 10; getallen++) {
//     console.log(getallen);
//   }
// }
// for (let tafels = 1; tafels <= 1; tafels++) {
//   console.log(`------------Tafel 2`);

//   for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// for (let tafels = 1; tafels <= 1; tafels++) {
//   console.log(`------------Tafel 3`);

//   for (let i = 1; i <= 30; i++) {
//     if (i % 3 == 0) {
//       console.log(i);
//     }
//   }
// }

//22
for (let part = 1; part <= 3; part++) {
  console.log(`Let's start part ${part}`);
  for (let subpart = 1; subpart <= 5; subpart++)
    console.log(`Working on subpart ${subpart}!`);
}

console.log("\n");
