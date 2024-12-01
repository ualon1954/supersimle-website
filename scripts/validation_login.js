//let form1 = document.querySelector("form"),
  //userName = document.querySelector("form #user-name"),
 // password = document.querySelector("form #password"),
  eyes = document.querySelectorAll(".eye");
  
// USER NAME CHECK FUNCTION
function userNameCheck() {
  let successUserName = document.querySelector(".success.username");
  let errorUserName = document.querySelector(".error.username");
  if (userName.value.trim() == "") {
    errorUserName.classList.add("show");
    userName.classList.add("show");
    errorUserName.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין קוד משתמש`;
  } else if (userName.value.length < 3) {
    successUserName.classList.remove("show");
    errorUserName.classList.add("show");
    userName.classList.add("show");
    errorUserName.innerHTML = `<i class="bx bx-error-circle"></i> חובה להזין לפחות 3 תווים`;
  } else if (userName.value.length >= 3) {
    errorUserName.classList.remove("show");
    successUserName.classList.add("show");
    userName.classList.remove("show");
  }
  if (userName.value.length > 15) {
    successUserName.classList.remove("show");
    errorUserName.classList.add("show");
    userName.classList.add("show");
    errorUserName.innerHTML = `<i class="bx bx-error-circle"></i> Please enter maximum 15 characters`;
  }
}

// USERNAME EVENT LISTENER
userName.addEventListener("keyup", userNameCheck);

// PASSWORD CHECK FUNCTION
function passwordCheck() {
  let errorPassword = document.querySelector(".error.password");
  if (password.value.trim() == "") {
    errorPassword.classList.add("show");
    password.classList.add("show");
    errorPassword.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין סיסמה`;
  } else if (password.value.length < 4) {
    errorPassword.classList.add("show");
    password.classList.add("show");
    errorPassword.innerHTML = `<i class="bx bx-error-circle"></i> חובה להזין לפחות 4 ספרות או אותיות`;
  } else if (password.value.length >= 4) {
    errorPassword.classList.remove("show");
    password.classList.remove("show");
  }
  if (password.value.length > 12) {
    errorPassword.classList.add("show");
    password.classList.add("show");
    errorPassword.innerHTML = `<i class="bx bx-error-circle"></i> Please enter maximum 12 characters or numbers and symbol`;
  }
}

// PASSWORD EVENT LISTENER
password.addEventListener("keyup", passwordCheck);

function loginCheck () {
  let errorUserName = document.querySelector(".error.username");
  let errorPassword = document.querySelector(".error.password");
  if (!login) {

  }

}


// PASSWORD HIDE AND SHOW
eyes.forEach((eye) => {
  eye.addEventListener("click", (e) => {
    let input = e.target.parentElement.parentElement.children[0];
    let eye = e.target.parentElement;

    if (input.type === "password") {
      input.type = "text";
      eye.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    } else {
      input.type = "password";
      eye.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    }
  });
});

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  userNameCheck();
  passwordCheck();
  //clearname();

  let isValid = false;
 if(!userName.classList.contains("show") && !password.classList.contains("show")) {
  isValid = true;
  
  }

  if (isValid) {
    //alert("login");
    login();
    
  }

});
