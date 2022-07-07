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
//let form = document.getElementById('frmData'); //mise en place variable sur le formulaire
//let fields = document.querySelectorAll('input[required]');// mise en place d'une variable pour les diff element à valider
//let valid =true;
//MISE EN PLACE DES VARIABLES DU FORMULAIRE

function validate()                                    
{  
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
  const isRadioChecked = Array.from(radioInput).filter(
    (radioBtn) => radioBtn.checked
    );

    if (firstName.value.length < 2)                                  
    { 
        smallFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
        firstName.focus(); 
        return false; 
    }  
    if (lastName.value.length < 2)                                  
    { 
        smallFirst.innerHTML = "";
        smallLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ nom.";
        lastName.focus(); 
        return false; 
    }   
    
    if (email.value == "")                                   
    {   
        smallFirst.innerHTML = "";
        smallLast.innerHTML = "";
        smallEmail.innerHTML= "Vous devez entrer une adresse email valide."; 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        smallFirst.innerHTML = "";
        smallLast.innerHTML = "";
        smallEmail.innerHTML= "Vous devez entrer une adresse email valide."; 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        smallFirst.innerHTML = "";
        smallLast.innerHTML = "";
        smallEmail.innerHTML = "Vous devez entrer une adresse email valide."; 
        email.focus(); 
        return false; 
    }    
    if (birthdate.value == "")                           
    { 
        smallFirst.innerHTML = "";
        smallLast.innerHTML = "";
        smallEmail.innerHTML = "";
        smallBirthdate.innerHTML = "Vous devez entrer votre date de naissance."; 
        birthdate.focus(); 
        return false; 
    }    
    if (quantity.value == "")                        
    { 
        smallFirst.innerHTML = "";
        smallLast.innerHTML = "";
        smallEmail.innerHTML = "";
        smallBirthdate.innerHTML = "";
        smallQuantity.innerHTML = "Vous devez mettre une valeur."; 
        quantity.focus(); 
        return false; 
    }  
    if (!isRadioChecked || isRadioChecked.length <= 0) 
    {
        smallFirst.innerHTML = "";
        smallLast.innerHTML = "";
        smallEmail.innerHTML = "";
        smallBirthdate.innerHTML = "";
        smallQuantity.innerHTML = "";
        smallCheckboxCity.innerHTML = "Sélectionnez une ville"; 
        checkbox.focus()
        return false;
    }  
    if (!checkbox.checked) 
    {
        smallFirst.innerHTML = "";
        smallLast.innerHTML = "";
        smallEmail.innerHTML = "";
        smallBirthdate.innerHTML = "";
        smallQuantity.innerHTML = "";
        smallCheckboxCity.innerHTML = "";
        smallCheckbox.innerHTML = "Vérifier que vous avez accepter les termes et conditions."; 
        checkbox.focus()
        return false;
    }


    return true;
     
}
