//Form validation
let form1 = document.querySelector("form"),
  amount = document.querySelector("form #amount"),
  fromdate = document.querySelector("form #fromdate"),
  todate = document.querySelector("form #todate");
  //update = document.querySelector("form #update");
  
  
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
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין עד 8 ספרות`;
  }
}

// AMOUNT EVENT LISTENER
amount.addEventListener("keyup", AmountCheck);


// FROM DATE CHECK FUNCTION
function FromDateCheck() {
  let successFromDate = document.querySelector(".success.fromdate");
  let errorFromDate = document.querySelector(".error.fromdate");
 
  if (form[1].value.trim() == "") {
    errorFromDate.classList.add("show");
    fromdate.classList.add("show");
    errorFromDate.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין/לבחור תאריך  `;
    document.querySelector(".fromdate").style.borderColor = "red";
 } else {
 
    errorFromDate.classList.remove("show");
    successFromDate.classList.add("show");
    successFromDate.classList.remove("show");
    document.querySelector(".fromdate").style.borderColor = "green";
    
    //errorFromDate.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;
  
  
  }

}

// FROM DATE EVENT LISTENER
fromdate.addEventListener("keyup", FromDateCheck);

// TO DATE CHECK FUNCTION
function ToDateCheck() {
  let successToDate = document.querySelector(".success.todate");
  let errorToDate = document.querySelector(".error.todate");
    if (form[2].value.trim() == "") {
    errorToDate.classList.add("show");
    todate.classList.add("show");
    errorToDate.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין/לבחור תאריך  `;
    document.querySelector(".todate").style.borderColor = "red";  
    }else {
    errorToDate.classList.remove("show");
    successToDate.classList.add("show");
    successToDate.classList.remove("show");
    document.querySelector(".todate").style.borderColor = "green";
    //errorToDate.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;
    
  } 
  
}


// FROM DATE EVENT LISTENER
todate.addEventListener("keyup", ToDateCheck);



 // FORM SUBMIT
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  AmountCheck();
  FromDateCheck();
  ToDateCheck()

 let isValid = false;
 if(!amount.classList.contains("show") && form[1].value.trim() != "" && form[2].value.trim() != "") {
  isValid = true;
   
  }
  
  if (isValid) {
    //alert("addData");
    updateData();
    //calculateMadad();
    //updateData();
    //addData();
    //show_flag = 0;
  }

  
 });