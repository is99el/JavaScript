"use strict";

//images random
var button = document.getElementById("b1");
button.addEventListener("click", function () {
  //1
  const firstRandomNum = Math.floor(Math.random() * 6) + 1;
  const firstDiceImage = "images/dice" + firstRandomNum + ".png";
  document.querySelectorAll("Img")[0].setAttribute("src", firstDiceImage);
  //2
  const secondRandomNum = Math.floor(Math.random() * 6) + 1;
  const secondDiceImage = "images/dice" + secondRandomNum + ".png";
  document.querySelectorAll("Img")[1].setAttribute("src", secondDiceImage);
  //3
  const theerdRandomNum = Math.floor(Math.random() * 6) + 1;
  const theerdDiceImage = "images/dice" + theerdRandomNum + ".png";
  document.querySelectorAll("Img")[2].setAttribute("src", theerdDiceImage);
  //4
  const fourthRandomNum = Math.floor(Math.random() * 6) + 1;
  const fourthDiceImage = "images/dice" + fourthRandomNum + ".png";
  document.querySelectorAll("Img")[3].setAttribute("src", fourthDiceImage);
  //5
  const fifthRandomNum = Math.floor(Math.random() * 6) + 1;
  const fifthDiceImage = "images/dice" + fifthRandomNum + ".png";
  document.querySelectorAll("Img")[4].setAttribute("src", fifthDiceImage);
  //6
  const sixthRandomNum = Math.floor(Math.random() * 6) + 1;
  const sixthDiceImage = "images/dice" + sixthRandomNum + ".png";
  document.querySelectorAll("Img")[5].setAttribute("src", sixthDiceImage);
});

//single points
this.checkOnes = function () {
  var ones = 0;
  for (var i = 0; i < 1; i++) {
    if (this.handResult[i] == 1) {
      ones += 1;
    }
  }
  return ones;
};

this.checkTwos = function () {
  var twos = 0;
  for (var i = 0; i < 2; i++) {
    if (this.handResult[i] == 2) {
      twos += 2;
    }
  }
  return twos;
};

this.checkThrees = function () {
  var threes = 0;
  for (var i = 0; i < 3; i++) {
    if (this.handResult[i] == 3) {
      threes += 3;
    }
  }
  return threes;
};

this.checkFours = function () {
  var fours = 0;
  for (var i = 0; i < 4; i++) {
    if (this.handResult[i] == 4) {
      fours += 4;
    }
  }

  return fours;
};

this.checkFives = function () {
  var fives = 0;
  for (var i = 0; i < 5; i++) {
    if (this.handResult[i] == 5) {
      fives += 5;
    }
  }
  return fives;
};

this.checkSixes = function () {
  var sixes = 0;
  for (var i = 0; i < 6; i++) {
    if (this.handResult[i] == 6) {
      sixes += 6;
    }
  }
  return sixes;
};

//multiple points
var threeOfKind = 0;
var fourOfKind = 0;
var fullHouse = 0;
var chance = 0;
var smallStraight = 0;
var yahtzee = 0;

//scores sum
function score() {
  const sum = ones + twos + threes + fours + fives + sixes;
  document.getElementById("score1").innerHTML = sum;
  const finalscore =
    sum +
    threeOfKind +
    fourOfKind +
    fullHouse +
    chance +
    smallStraight +
    yahtzee;
  document.getElementById("score").innerHTML = finalscore;
}
