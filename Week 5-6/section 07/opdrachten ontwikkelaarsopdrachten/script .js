const number = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".left").textContent = number;

const number2 = Math.trunc(Math.random() * 10 + 1);
document.querySelector(".right").textContent = number2;

////
var myArray = ["/", "*", "-", "+"];

var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
document.querySelector(".mid").textContent = randomItem;

const guess = Number(document.querySelector("input").value);

var num1, num2;
num1 = document.querySelector(".left").textContent;
num2 = document.querySelector(".right").textContent;

function Calculatrice(num1, num2, myArray) {
  switch (myArray) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;
  }
}
var result = Calculatrice(num1, num2, "+");
var result = Calculatrice(num1, num2, "-");
var result = Calculatrice(num1, num2, "*");
var result = Calculatrice(num1, num2, "/");

document.querySelector(".btn").addEventListener("click", function () {
  if (guess == result) {
    console.log("good");
  } else if (guess !== result) {
    console.log("try again");
  }
});
