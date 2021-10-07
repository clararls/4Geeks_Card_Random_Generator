/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".suit").innerHTML = suitRandom();
  document.querySelector(".num").innerHTML = numRandom();
  //document.querySelector(".card").innerHTML = cardGenerate() + suitRandom();
};
function cardGenerate() {
  const suit = ["♦", "♥", "♠", "♣"];
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
  if (suit[random(suit)] === "♦" || suit[random(suit)] === "♦") {
    //document.querySelector.suit[random(suit)];
  }
  return suit[random(suit)] + num[random(num)];
  //console.log(suit[random(suit)] + num[random(num)]);
}
function suitRandom() {
  const suit = ["♦", "♥", "♠", "♣"];
  return suit[random(suit)];
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
