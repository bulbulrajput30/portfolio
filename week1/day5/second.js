let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");

    nameError.textContent = "";
    emailError.textContent = "";

    let valid = true;

    if (name.trim() === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    if (email.trim() === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }

});