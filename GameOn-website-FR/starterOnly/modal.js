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
let merci = document.querySelectorAll(".merci-page")


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
//let fields = document.querySelectorAll('input[required]');// mise en place d'une variable pour les diff element à valider
//let valid =true;

// La recuperation des elements 
const form = document.querySelector("#frmData");
const firstName = document.querySelector('#first');
const email = document.querySelector('#email');

// Evenements
form.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
})
// Fonstions
function form_verify() {
    // Obtenir toutes les valeurs des inputs
    let userValue = form[0].value.trim();
    const emailValue = email.value.trim();
    console.log(userValue);
    // firstName verify
    if (letterNum < 3) {
            let message ="firstName doit avoir au moins 3 caractères";
            setError(firstName,message)
            console.log(message);
    } else {
            setSuccess(firstName);
    };
  

    // email verify
    if (emailValue === "") {
        let message = "Email ne peut pas être vide";
        setError(email,message);
    }else if(!email_verify(emailValue)){
        let message = "Email non valide";
        setError(email,message);
    }else{
        setSuccess(email)
    };
    
function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajout du message d'erreur
    small.innerText = message

    // Ajout de la classe error
    formControl.classList.add("error");
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='success'
}

function email_verify(email) { 
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}};