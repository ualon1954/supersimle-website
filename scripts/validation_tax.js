//Form validation
let form1 = document.querySelector("form"),
  amount = document.querySelector("form #amount"),
  rpoints = document.querySelector("form #rpoints"),
  ptor = document.querySelector("form #ptor");
  
// AMOUNT CHECK FUNCTION
function AmountCheck() {
  let successAmount = document.querySelector(".success.amount");
  let errorAmount = document.querySelector(".error.amount");
  let regularExpression = 
     /^(?:\d+(?:\.\d{1,2})?|\.\d{1,2})$/
     
  if (amount.value.trim() == "") {
    errorAmount.classList.add("show");
    amount.classList.add("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין סכום הכנסה`;
  } else if (!regularExpression.test(amount.value.trim())) {
    errorAmount.classList.add("show");
    successAmount.classList.add("show");
    successAmount.classList.remove("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;

  } else if (amount.value.length < 4) {
    successAmount.classList.remove("show");
    errorAmount.classList.add("show");
    amount.classList.add("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין לפחות 4 ספרות`;
   } else if (amount.value.length >= 4) {
    errorAmount.classList.remove("show");
    successAmount.classList.add("show");
    amount.classList.remove("show");
  }
  if (amount.value.length > 8) {
    successAmount.classList.remove("show");
    errorAmount.classList.add("show");
    successAmount.classList.add("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> לא ניתן להזין יותר מ-8 ספרות`;
  }

}

// AMOUNT EVENT LISTENER
amount.addEventListener("keyup", AmountCheck);


// RPOINTS CHECK FUNCTION
function RpointsCheck() {
  let successRpoints = document.querySelector(".success.rpoints");
  let errorRpoints = document.querySelector(".error.rpoints");
  let regularExpression =
    ///^[-+]?[0-9]+\.[0-9]+$/;
    /^(([0-9.]?)*)+$/
    ///^(?:\d+(?:\.\d{1,2})?|\.\d{1,2})$/
  if (rpoints.value.trim() != "") {
  
    if (regularExpression.test(rpoints.value.trim())) {
      errorRpoints.classList.remove("show");
      rpoints.classList.remove("show");
      successRpoints.classList.add("show");
      } else {
      errorRpoints.classList.add("show");
      rpoints.classList.add("show");
      successRpoints.classList.remove("show");
      document.querySelector(".rpoints").style.borderColor = "red";
      errorRpoints.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;
   }
  }
  if (rpoints.value.trim() == "") {
    errorRpoints.classList.remove("show");
    successRpoints.classList.add("show");
    rpoints.classList.add("show");
    document.querySelector(".rpoints").style.borderColor = "green";
  }
}

// RPOINTS EVENT LISTENER
rpoints.addEventListener("keyup", RpointsCheck);

// PTOR CHECK FUNCTION
function PtorCheck() {
  let successPtor = document.querySelector(".success.ptor");
  let successCircle = document.querySelector(".success.fa-circle-check");
  let errorPtor = document.querySelector(".error.ptor");
  let regularExpression =
       /^(?:\d+(?:\.\d{1,2})?|\.\d{1,2})$/
  if (ptor.value.trim() != "") {
        
    if (regularExpression.test(ptor.value.trim())) {
      errorPtor.classList.remove("show");
      ptor.classList.remove("show");
      successPtor.classList.add("show");
      } else {
      errorPtor.classList.add("show");
      ptor.classList.add("show");
      successPtor.classList.remove("show");
      //document.querySelector(".ptor").style.borderColor = "rgba(0, 0, 0, 0.3);";
      errorPtor.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;
      document.querySelector(".ptor").style.borderColor = "red";
    }
  }
  if (ptor.value.trim() == "") {
    errorPtor.classList.remove("show");
    successPtor.classList.add("show");
    document.querySelector(".ptor").style.borderColor = "green";
  // successHivun.classList.remove("show");
  }
}

// RPOINTS EVENT LISTENERdocument.querySelector(".fromdate").style.borderColor = "green";
ptor.addEventListener("keyup", PtorCheck);




 // FORM SUBMIT
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  AmountCheck();
  RpointsCheck(); 
  PtorCheck();
 let isValid = false;
 if(!amount.classList.contains("show") && (!rpoints.classList.contains("show") || rpoints.value.trim() == "") && (!ptor.classList.contains("show") || ptor.value.trim() == "")) {
  isValid = true;
   
  }
  
  if (isValid) {
    //alert("addData");
    updateData();
    calculateTax();
    //updateData();
    //addData();
    //show_flag = 0;
  }

  
 });