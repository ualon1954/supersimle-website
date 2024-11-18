//Form validation
let form1 = document.querySelector("form"),
  amount = document.querySelector("form #amount"),
  addamount = document.querySelector("form #aamount");
  pencia = document.querySelector("form #pencia");
  month = document.querySelector("form #month");
  
// MONTH CHECK FUNCTION
function MonthCheck() {
  let successMonth = document.querySelector(".success.month");
  let errorMonth = document.querySelector(".error.month");
  
  if (month.value.length == 0) {
    errorMonth.classList.add("show");
    month.classList.add("show");
    errorMonth.innerHTML = `<i class="bx bx-error-circle"></i> נא לבחור חודש פרישה`;
  } else {
    errorMonth.classList.remove("show");
    month.classList.remove("show");
  }
}

// MONTH EVENT LISTENER
month.addEventListener("keyup", MonthCheck);






// AMOUNT CHECK FUNCTION
function AmountCheck() {
  let successAmount = document.querySelector(".success.amount");
  let errorAmount = document.querySelector(".error.amount");
  let regularExpression = 
     /^[0-9]*$/
  if (amount.value.trim() == "") {
    errorAmount.classList.add("show");
    amount.classList.add("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין סכום הכנסה`;
  } else if (!regularExpression.test(amount.value.trim())) {
    errorAmount.classList.add("show");
    successAmount.classList.add("show");
    successAmount.classList.remove("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;  
 
  } else if (amount.value.length < 5) {
    successAmount.classList.remove("show");
    errorAmount.classList.add("show");
    amount.classList.add("show");
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין לפחות 5 ספרות`;
   } else if (amount.value.length >= 5) {
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


// ADD AMOUNT CHECK FUNCTION
function AddAmount() {
  let successAddAmount = document.querySelector(".success.aamount");
  let errorAddAmount = document.querySelector(".error.aamount");
  let regularExpression = 
      /^[0-9]*$/
  if (addamount.value.trim() != "") {
    document.querySelector(".aamount").style.borderColor = "red";
    if (!regularExpression.test(addamount.value.trim())) {
      
      errorAddAmount.classList.add("show");
      successAddAmount.classList.add("show");
      successAddAmount.classList.remove("show");
      //document.querySelector(".startdate").style.borderColor = "red";
      errorAddAmount.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ספרות בלבד`;  
      
    } else if (addamount.value.length < 5) {
      successAddAmount.classList.remove("show");
      errorAddAmount.classList.add("show");
      addamount.classList.add("show");
      errorAddAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין לפחות 5 תווים`;
    } else if (addamount.value.length >= 5) {
      errorAddAmount.classList.remove("show");
      successAddAmount.classList.add("show");
      addamount.classList.remove("show");
    
    } else if (addamount.value.length > 8) {
      successAddAmount.classList.remove("show");
      errorAddAmount.classList.add("show");
      successAddAmount.classList.add("show");
      errorAddAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין עד 8 ספרות`;
    }
  }
    if (addamount.value.trim() == "") {
        errorAddAmount.classList.remove("show");
        successAddAmount.classList.remove("show");
        //document.querySelector(".startdate").style.borderColor = "green";
      // successHivun.classList.remove("show");
    }
   
  }
 


// ADD AMOUNT  EVENT LISTENER
addamount.addEventListener("keyup", AddAmount);

// PENCIA CHECK FUNCTION
function PenciaCheck() {
  let successPencia = document.querySelector(".success.pencia");
  let errorPencia = document.querySelector(".error.pencia");
  let regularExpression = 
     /^[0-9]*$/
  if (pencia.value.trim() == "") {
    errorPencia.classList.add("show");
    pencia.classList.add("show");
    errorPencia.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין סכום פנסיה`;
  } else if (!regularExpression.test(pencia.value.trim())) {
    errorPencia.classList.add("show");
    successPencia.classList.add("show");
    successPencia.classList.remove("show");
    errorPencia.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;  
 
  } else if (pencia.value.length < 4) {
    successPencia.classList.remove("show");
    errorPencia.classList.add("show");
    pencia.classList.add("show");
    errorPencia.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין לפחות 4 ספרות`;
   } else if (pencia.value.length >= 4) {
    errorPencia.classList.remove("show");
    successPencia.classList.add("show");
    pencia.classList.remove("show");
  }
  if (pencia.value.length > 6) {
    successPencia.classList.remove("show");
    errorPencia.classList.add("show");
    successPencia.classList.add("show");
    errorPencia.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין עד 6 ספרות`;
  }
}

// PENCIA EVENT LISTENER
pencia.addEventListener("keyup", PenciaCheck);



// START DATE CHECK FUNCTION
function StartDateCheck() {
  let successStartDate = document.querySelector(".success.startdate");
  let errorStartDate = document.querySelector(".error.startdate");
 
  if (form[0].value.trim() == "") {
    errorStartDate.classList.add("show");
    startdate.classList.add("show");
    errorStartDate.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין/לבחור תאריך  `;
    document.querySelector(".startdate").style.borderColor = "red";
 } else {
 
    errorStartDate.classList.remove("show");
    successStartDate.classList.add("show");
    successStartDate.classList.remove("show");
    document.querySelector(".startdate").style.borderColor = "green";
    
    //errorFromDate.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;
  
  
  }
  
}

// START DATE EVENT LISTENER
//startdate.addEventListener("keyup", StartDateCheck);

// TO DATE CHECK FUNCTION
function EndDateCheck() {
  let successEndDate = document.querySelector(".success.enddate");
  let errorEndDate = document.querySelector(".error.enddate");
    if (form[1].value.trim() == "") {
    errorEndDate.classList.add("show");
    enddate.classList.add("show");
    errorEndDate.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין/לבחור תאריך  `;
    document.querySelector(".enddate").style.borderColor = "red";  
    }else {
    errorEndDate.classList.remove("show");
    successEndDate.classList.add("show");
    successEndDate.classList.remove("show");
    document.querySelector(".enddate").style.borderColor = "green";
    //errorToDate.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;
    
  } 
  
}


// END DATE EVENT LISTENER
//enddate.addEventListener("keyup", EndDateCheck);

// TO DATE CHECK FUNCTION
function MadadDateCheck() {
  let successMadadDate = document.querySelector(".success.madaddate");
  let errorMadadDate = document.querySelector(".error.madaddate");
    if (form[3].value.trim() == "") {
    errorMadadDate.classList.add("show");
    madaddate.classList.add("show");
    errorMadadDate.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין/לבחור תאריך  `;
    document.querySelector(".madaddate").style.borderColor = "red";  
    }else {
    errorMadadDate.classList.remove("show");
    successMadadDate.classList.add("show");
    successMadadDate.classList.remove("show");
    document.querySelector(".madaddate").style.borderColor = "green";
    //errorToDate.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ערך חוקי`;
    
  } 
  
}


// END DATE EVENT LISTENER
//madaddate.addEventListener("keyup", MadadDateCheck);


 // FORM SUBMIT
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  //StartDateCheck();
 // EndDateCheck();
 MonthCheck();
 AmountCheck();
 AddAmount();
 PenciaCheck();
 // MadadDateCheck();
 // HivunCheck();
 
 let isValid = false;
 if(!amount.classList.contains("show")) {
  isValid = true;
   
  }
  
  if (isValid) {
    //alert("addData");
    clearPrica();
    //updateDataPrica();
    //readPrica();
    //calculatePrica();
    
    //setTimeout(() => {
    //  console.log("Delayed for 2 second.");
   // }, "2000");
   // updateDataMadad();
    //calculateKivua();
    //updateData();
    //addData();
    //show_flag = 0;
  }

  
 });