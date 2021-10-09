/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //document.querySelector(".suit").innerHTML = suitRandom();
  document.querySelector(".num").innerHTML = numRandom();
  let suitDiv = document.querySelectorAll(".suit");
  suitDiv[0].innerHTML = suit;
  suitDiv[1].innerHTML = suit;
  //document.querySelector(".card").innerHTML = cardGenerate() + suitRandom();
};
let suits = ["♦", "♥", "♠", "♣"];

if (random(suits) === 1 || random(suits) === 2) {
  var suit = "<p style ='color:red'>" + suits[random(suits)] + "</p>";
} else {
  var suit = "<p style ='color:black'>" + suits[random(suits)] + "</p>";
}

function numRandom() {
  const num = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  return num[random(num)];
}

function random(arr1) {
  return Math.floor(Math.random() * arr1.length);
}
