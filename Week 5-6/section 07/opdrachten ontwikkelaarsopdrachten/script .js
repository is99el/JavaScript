const number = Math.trunc(Math.random() * 100 + 1);

document.querySelector(".left").textContent = number;

const number2 = Math.trunc(Math.random() * 100 + 1);
document.querySelector(".right").textContent = number2;

var ops = ["+", "-", "*", "/"];
var operator = ops[opindex];

var res;
switch (opindex) {
  case 0:
    res = ".left " + ".right";
    break;
  case 1:
    res = ".left " - ".right";
    break;
  case 2:
    res = ".left " / ".right";
    break;
  case 3:
    res = ".left " * ".right";
    break;
}
document.querySelector(".mid").textContent = operator;
