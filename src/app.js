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
let randomSuit = Math.floor(Math.random() * (3 - 0 + 1));

if (randomSuit == 0) {
  var suit = "<p style ='color:red'>" + suits[randomSuit] + "</p>";
} else if (randomSuit == 1) {
  var suit = "<p style ='color:red'>" + suits[randomSuit] + "</p>";
} else if (randomSuit == 2) {
  var suit = "<p style ='color:black'>" + suits[randomSuit] + "</p>";
} else {
  var suit = "<p style ='color:black'>" + suits[randomSuit] + "</p>";
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
