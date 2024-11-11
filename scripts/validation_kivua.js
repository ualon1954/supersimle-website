//Form validation
let form1 = document.querySelector("form"),
  amount = document.querySelector("form #amount"),
  startdate = document.querySelector("form #startdate"),
  enddate = document.querySelector("form #enddate"),
  madaddate = document.querySelector("form #enddate");
  hivun = document.querySelector("form #hivun");

  
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
    errorAmount.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין לפחות 5 תווים`;
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


// HIVUN CHECK FUNCTION
function HivunCheck() {
  let successHivun = document.querySelector(".success.hivun");
  let errorHivun = document.querySelector(".error.hivun");
  let regularExpression = 
      /^[0-9]*$/
  if (hivun.value.trim() != "") {
    document.querySelector(".hivun").style.borderColor = "red";
    if (!regularExpression.test(hivun.value.trim())) {
      
      errorHivun.classList.add("show");
      successHivun.classList.add("show");
      successHivun.classList.remove("show");
      //document.querySelector(".startdate").style.borderColor = "red";
      errorHivun.innerHTML = `<i class="bx bx-error-circle"></i>נא להזין ספרות בלבד`;  
      
    } else if (hivun.value.length < 5) {
      successHivun.classList.remove("show");
      errorHivun.classList.add("show");
      hivun.classList.add("show");
      errorHivun.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין לפחות 5 תווים`;
    } else if (hivun.value.length >= 5) {
      errorHivun.classList.remove("show");
      successHivun.classList.add("show");
      hivun.classList.remove("show");
    
    } else if (hivun.value.length > 8) {
      successHivun.classList.remove("show");
      errorHivun.classList.add("show");
      successHivun.classList.add("show");
      errorHivun.innerHTML = `<i class="bx bx-error-circle"></i> נא להזין עד 8 ספרות`;
    }
  }
    if (hivun.value.trim() == "") {
        errorHivun.classList.remove("show");
        successHivun.classList.remove("show");
        //document.querySelector(".startdate").style.borderColor = "green";
      // successHivun.classList.remove("show");
    }
   
  }
 


// HIVUN EVENT LISTENER
hivun.addEventListener("keyup", HivunCheck);


// START DATE CHECK FUNCTION
function StartDateCheck() {
  let successStartDate = document.querySelector(".success.startdate");
  let errorStartDate = document.querySelector(".error.startdate");
 
  if (form1[0].value.trim() == "") {
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
startdate.addEventListener("keyup", StartDateCheck);

// TO DATE CHECK FUNCTION
function EndDateCheck() {
  let successEndDate = document.querySelector(".success.enddate");
  let errorEndDate = document.querySelector(".error.enddate");
    if (form1[1].value.trim() == "") {
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
enddate.addEventListener("keyup", EndDateCheck);

// TO DATE CHECK FUNCTION
function MadadDateCheck() {
  let successMadadDate = document.querySelector(".success.madaddate");
  let errorMadadDate = document.querySelector(".error.madaddate");
    if (form1[3].value.trim() == "") {
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
madaddate.addEventListener("keyup", MadadDateCheck);


 // FORM SUBMIT
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  StartDateCheck();
  EndDateCheck();
  AmountCheck();
  MadadDateCheck();
  HivunCheck();
 
 let isValid = false;
 if(!amount.classList.contains("show") && (!hivun.classList.contains("show") || form1[4].value.trim() == "") && form1[0].value.trim() != "" && form1[1].value.trim() != "" && form1[3].value.trim() != "") {
  //if(!amount.classList.contains("show")) {
 isValid = true;
   
  }
  
  if (isValid) {
    //alert("addData");
    updateData();
    updateDataMadad();
    calculateKivua();
    
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