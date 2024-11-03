//Form validation
let form1 = document.querySelector("form"),
  amount = document.querySelector("form #amount"),
  rpoints = document.querySelector("form #rpoints"),
  ptor = document.querySelector("form #ptor");
  
// AMOUNT CHECK FUNCTION
function AmountCheck() {
  let successAmount = document.querySelector(".success.amount");
  let errorAmount = document.querySelector(".error.amount");
  if (amount.value.trim() == "") {
    errorAmount.classList.add("show");
    amount.classList.add("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין סכום הכנסה`;
 
  } else if (amount.value.length < 4) {
    successAmount.classList.remove("show");
    errorAmount.classList.add("show");
    amount.classList.add("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין לפחות 4 תווים`;
   } else if (amount.value.length >= 4) {
    errorAmount.classList.remove("show");
    successAmount.classList.add("show");
    amount.classList.remove("show");
  }
  if (amount.value.length > 8) {
    successAmount.classList.remove("show");
    errorAmount.classList.add("show");
    successAmount.classList.add("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> Please enter maximum 8 characters`;
  }
}

// AMOUNT EVENT LISTENER
amount.addEventListener("keyup", AmountCheck);





 // FORM SUBMIT
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  AmountCheck();
 
 let isValid = false;
 if(!amount.classList.contains("show")) {
  isValid = true;
   
  }
  
  if (isValid) {
    //alert("addData");
    updateData();
    calculateMadad();
    //updateData();
    //addData();
    //show_flag = 0;
  }

  
 });