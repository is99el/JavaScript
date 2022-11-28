"use strict";

const diceLocks = [
  "images/selected.png",
  "images/selected.png",
  "images/selected.png",
  "images/selected.png",
  "images/selected.png",
  "images/selected.png",
];

const lock = [-1, -1, -1, -1, -1];

var tmp = 0;

//images random
var button = document.getElementById("b1");
button.addEventListener("click", function (ee) {
  //1
  const firstRandomNum = Math.floor(Math.random() * 6) + 1;
  const firstDiceImage = "images/dice" + firstRandomNum + ".png";
  document.querySelectorAll("Img")[0].setAttribute("src", firstDiceImage);
  function selected() {}
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

var ones = 0;
var twos = 0;
var threes = 0;
var fours = 0;
var fives = 0;
var sixes = 0;

//multiple
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

//rolls left
function dice() {
  tmp++;
  document.getElementById("rollseft").innerHTML = tmp;
  for (var i = 0; i < 5; i++) {
    button[i] = Math.floor(Math.random() * 6) + 1;
  }
  document.getElementById("b1").disabled = true;
  document.getElementById("b2").disabled = false;
}

//restart game
document.getElementById("b3").addEventListener("click", function () {
  document.location.reload;
});
