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


// annonce des variables pour le formulaire
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');               
let email = document.getElementById('email');      
let birthdate=  document.getElementById('birthdate');  
let quantity= document.getElementById('quantity'); 
let radioInput = document.querySelectorAll('.radio-input') 
let checkbox= document.getElementById('checkbox1');
let smallFirst = firstName.nextElementSibling;
let smallLast = lastName.nextElementSibling;
let smallEmail = email.nextElementSibling;
let smallBirthdate = birthdate.nextElementSibling;
let smallQuantity = quantity.nextElementSibling;
let smallCheckbox = document.getElementById('errorCheckbox');
let smallCheckboxCity = document.getElementById('errorCheckboxCity')


// annonce des variables pour fin du formulaire
let merci = document.getElementById("merci");
let body = document.getElementById("mBody")
console.log(merci);

// annonce de la fonction de validation du formulaire
// blocage de l'action de soumission de formulaire
document.getElementById("boutonParti").addEventListener("click",(e) => {
  e.preventDefault();

  // validation Prénom et création si valide de la variables valid
  if (firstName.value.length < 2) {
    firstName.classList.add("error");
    smallFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
  }else{
    smallFirst.innerHTML = "";
    firstName.classList.remove("error");
    var valid = true;
    console.log(valid);
  };

  // validation nom et création si valide de la variables valid1
  if (lastName.value.length < 2) {
    lastName.classList.add("error");
    smallLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ nom.";
  }else{
    lastName.classList.remove("error");
    smallLast.innerHTML = "";
    var valid1 = true;
    console.log(valid1);
  };

  // validation email et création si valide de la variables valid2
  if (email.value == "") {
    email.classList.add("error");
    smallEmail.innerHTML= "Vous devez entrer une adresse email valide.";
  }else if (email.value.indexOf("@", 0) < 0) {
    email.classList.add("error");
    smallEmail.innerHTML= "Vous devez entrer une adresse email valide.";
  }else if (email.value.indexOf(".", 0) < 0) {
    email.classList.add("error");
    smallEmail.innerHTML= "Vous devez entrer une adresse email valide.";    
  }else{
    email.classList.remove("error");
    smallEmail.innerHTML = "";
    var valid2 = true;
    console.log(valid2);
  };

  // validation date de naissance et création si valide de la variables valid3
  if (birthdate.value == "") {
      birthdate.classList.add("error");
      smallBirthdate.innerHTML = "Vous devez entrer votre date de naissance.";
  }else{
      birthdate.classList.remove("error");
      smallBirthdate.innerHTML = "";
      var valid3 = true;
      console.log(valid3);
  };

  // validation quantité et création si valide de la variables valid4
  if (quantity.value == "") {
    quantity.classList.add("error");
    smallQuantity.innerHTML = "Vous devez mettre une valeur.";
  }else{
    quantity.classList.remove("error");
    smallQuantity.innerHTML = "";
    var valid4 = true;
    console.log(valid4);
  };

  // validation ville et création si valide de la variables valid5
  const isRadioChecked = Array.from(radioInput).filter(
    (radioBtn) => radioBtn.checked
  );
  if (!isRadioChecked || isRadioChecked.length <= 0) {
    smallCheckboxCity.innerHTML = "Sélectionnez une ville";
  }else{
    smallCheckboxCity.innerHTML = "";
    var valid5 = true;
    console.log(valid5);
  };

  // validation condition d'utilisation et création si valide de la variables valid6
  if (!checkbox.checked) {
    smallCheckbox.innerHTML = "Vérifier que vous avez accepter les termes et conditions.";
  }else{
    smallCheckbox.innerHTML = "";
    var valid6 = true;
    console.log(valid5);
  };

  // lancement page merci après vérification des variables
  if (valid==true && valid1==true && valid2==true && valid3==true && valid4==true && valid5==true && valid6==true){
    merci.style.display ="block";
    body.style.display ="none";
  }
});

