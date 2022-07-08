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



// form validate
//let form = document.getElementById('frmData'); //mise en place variable sur le formulaire
//let fields = document.querySelectorAll('input[required]');// mise en place d'une variable pour les diff element à valider
//let valid =true;




function validName() {
  let firstName = document.getElementById('first');
  let smallFirst = firstName.nextElementSibling;

  if (firstName.value.length < 2)                                  
  { 
    smallFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
    firstName.classList.add("error");
    firstName.focus(); 
    result = 'error';
  } else {
    result = 'success';
  }
  return result;
};

console.log(validName());

