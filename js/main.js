/*"use strict";
const openModal = document.querySelector(".nav-modal");

document.getElementById("hideMenu").addEventListener("click", hideBar);
function hideBar() {
  openModal.classList.toggle("hidden");
  //openModal.style.left = "0";
}
document.getElementById("showMenu").addEventListener("click", showBar);
function showBar() {
  openModal.classList.toggle("hidden");
  //openModal.style.left = "-200";
}*/

const navModal = document.getElementById("navModal");
document.querySelector(".fa-bars").addEventListener("click", showMenu);

function showMenu() {
  navModal.style.left = "0";
}

document.querySelector(".fa-times").addEventListener("click", hideMenu);
function hideMenu() {
  navModal.style.left = "-200px";
}
