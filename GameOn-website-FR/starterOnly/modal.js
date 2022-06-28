function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let closeBtn = document.querySelectorAll(".close-btn");// mise en place d'une variable pour bouton X
let data = document.querySelectorAll(".formData");// mise en place d'une variable pour le formulaire
let checkboxLocation = document.querySelectorAll(".checkbox-input");// mise en place d'une variable pour bouton location
let valid = true;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function launchModal2() {
  modalbg.style.display = "none";
}
// close button event  // fonctionnalité du bouton X 
closeBtn.forEach((btn) => btn.addEventListener("click", launchModal2))
// validate form
console.log(checkboxLocation)