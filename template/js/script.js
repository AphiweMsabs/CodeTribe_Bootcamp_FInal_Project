const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");

const popup = document.querySelector(".success-message");
const container = document.querySelector(".container");

const userEmail = document.getElementById("userEmail");
const dismissBtn = document.getElementById("dismissBtn");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let email = emailInput.value;

    if(email === ""){
        alert("Please enter an email");
        return;
    }

    userEmail.textContent = email;

    container.style.display = "none";
    popup.style.display = "block";
});

dismissBtn.addEventListener("click", function(){
    popup.style.display = "none";
    container.style.display = "flex";

    emailInput.value = "";
});