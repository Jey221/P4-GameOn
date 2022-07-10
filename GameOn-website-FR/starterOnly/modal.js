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


let firstName = document.getElementById('first');
let lastName = document.getElementById('last');               
let email = document.getElementById('email');      
let birthdate=  document.getElementById('birthdate');  
let quantity= document.getElementById('quantity');  
let checkbox= document.getElementById('checkbox1'); 
let smallFirst = firstName.nextElementSibling;
let smallLast = lastName.nextElementSibling;
let smallEmail = email.nextElementSibling;
let smallBirthdate = birthdate.nextElementSibling;
let smallQuantity = quantity.nextElementSibling;
let smallCheckbox = document.getElementById('errorCheckbox');
let smallCheckboxCity = document.getElementById('errorCheckboxCity')
let radioInput = document.querySelectorAll('.radio-input')
const isRadioChecked = Array.from(radioInput).filter((radioBtn) => radioBtn.checked);


function validFName(){
  if (firstName.value.length < 2)
  {
    smallFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
    firstName.classList.add("error");
    return false; 
  }else{
    smallFirst.innerHTML = "";
    firstName.classList.remove("error");
    return true
  }
};
console.log(validFName());
function validLName(){
  if (lastName.value.length < 2) 
  {
    smallLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ nom.";
    lastName.classList.add("error");
    return false; 
  }else{
    smallLast.innerHTML = "";
    lastName.classList.remove("error");
    return true
  }
};
console.log(validLName());


function validate(){
  if( (validFName==false) && (validLName==false) ){
    return false
  }else{
    merciPage
    return true
  }
};
console.log(validate());
function merciPage(){
  let form = document.getElementById('frmData'); 
  let merci = document.getElementById('merci'); 
  merci.style.display = "block";
  form.style.display = "none";
}
console.log(merciPage);

