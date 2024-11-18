/* CRUD for contacts */

let api = "https://script.google.com/macros/s/AKfycbwkSmW1_mZ_cq8XMf2v9Sjp_CBDILWeB93NWs38Smp-D9GN5btjoq4AaRj54QjYrs_K/exec";
let form = document.querySelector("form");
console.log(form);
let add = document.querySelector(".add");
let update = document.querySelector(".update");
let tbody = document.querySelector("tbody");
let tbody_rows = '';
let show_flag = 0;
let lamount = document.querySelector('label[for="tax"]');  //does nothing

   function updateData() {
    let fromYear = new Date(form[1].value).getFullYear();
    let toYear = new Date(form[2].value).getFullYear();
    let fromMonth = new Date(form[1].value).getMonth()+1;
    let toMonth = new Date(form[2].value).getMonth()+1;
    let fromDay = new Date(form[1].value).getDate();
    let toDay = new Date(form[2].value).getDate();
    //let toYear = toDate.getFullYear();
    //let fromDay = fromDate.getMonth();
    //let toDay = toDate.getMonth();
    //let fromMonth = fromDate.getDay();
    //let toMonth = toDate.getDay();

    if (fromMonth === 2 && fromDay < 16) {
        fromYear = fromYear - 1;
        fromMonth = 12; 

    }  else if(fromMonth === 2 && fromDay > 15) {
        fromMonth =  1;

    }  else if(fromMonth === 1 && fromDay < 16) {
        fromYear = fromYear - 1;
        fromMonth = 11;

    }  else if(fromMonth === 1 && fromDay > 15 ) {
        fromYear = fromYear - 1;
        fromMonth = 12;

    }   else if(fromMonth > 2 && fromDay < 16) {
        fromMonth = fromMonth - 2;
    } else if(fromMonth > 2 && fromDay > 15) { 
        fromMonth = fromMonth - 1;
    }
      
       
    if (toMonth === 2 && toDay < 16) {
        toYear = toYear - 1;
        fromMonth = 12; 

    }  else if(toMonth === 2 && toDay > 15) {
        toMonth =  1;

    }  else if(toMonth === 1 && toDay < 16) {
        toYear = toYear - 1;
        toMonth = 11;

    }  else if(toMonth === 1 && toDay > 15 ) {
        toYear = toYear - 1;
        toMonth = 12;

    }   else if(toMonth > 2 && toDay < 16) {
        toMonth = toMonth - 2;
    } else if(toMonth > 2 && toDay > 15) { 
        toMonth = toMonth - 1;
    }
 
    //alert(fromYear,toDate);
    document.querySelector(".update").innerHTML = "מחשב..."
    fetch(api+`?updatemadad=true&id=2&amount=${form[0].value}&fromdate=${form[1].value}&todate=${form[2].value}&fromyear=${fromYear}&toyear=${toYear}&frommonth=${fromMonth}&tomonth=${toMonth}`)
    //fetch(api+`?update=true&id=${id}&data=${form[1].value}`)
    .then(res => res.text())
    .then(data=> {
        //readData()
       // alert(data)
        //contactForm.reset()
        //document.querySelector(".update").value = "Update"
        //add.style.display="unset"
        //update.style.display="none"
       //document.querySelector('#cancel').innerHTML="Clear";
       //document.querySelector(".update").innerHTML = "Update"
       //document.querySelector(".contact-form").style.display = "none"; 
        document.querySelector(".update").innerHTML = "חישוב"
        document.querySelector(".result-container").style.display = "block";
    })
    
} 

function calculateMadad() {
    //document.querySelectorAll('tbody tr').forEach(tr => tr.classList.remove('active'));
   //    table_rows.forEach(row => {
  //       row.querySelectorAll('tbody tr').classList.add('active');
   //    })
  
         document.querySelector(".result-container").style.display = "none";
        //document.querySelector(".contact-form").style.display = "block";
        //document.querySelector(".create").style.display = "none";
        //document.querySelector(".reset").style.display = "none";
        //document.querySelector(".close").style.display = "none";
        //document.querySelector(".update").style.display = "inline";
        //document.querySelector(".cancel").style.display = "inline";
        //document.querySelector(".cancel").style.backgroundColor = "blue";
        //document.querySelector(".create").style.display = "none";
        //document.querySelector(".add").style.display = "none";
        //document.querySelector(".update").style.backgroundColor = "green";
        //update.textContent="Update"
        //resetForm();
    // add.style.display="none"
        //update.style.display="unset"
        fetch(api+`?readmadad=true&id=2`)
        .then(res=>res.json())
        .then(data=> {
            let todo = data.todo;
            //console.log(todo);
            let trtd = todo.map(each=> {
            //alert(each[0]);    
            if (1 === each[0] ) {
             
                form[3].value = each[1].toLocaleString(undefined, { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  });
                  form[4].value = each[16].toLocaleString(undefined, { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  });

                form[5].value = each[12].toLocaleString(undefined, { 
                    minimumFractionDigits: 1, 
                    maximumFractionDigits: 1 
                  });
                  form[6].value = each[13].toLocaleString(undefined, { 
                    minimumFractionDigits: 1, 
                    maximumFractionDigits: 1 
                  }); 
                  form[7].value = each[14].toLocaleString(undefined, { 
                    minimumFractionDigits: 4, 
                    maximumFractionDigits: 4 
                  }); 
                  form[8].value = each[15].toLocaleString(undefined, { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  }); 
                
                //update.setAttribute("onclick",`updateData(${id})`);
               
                //update.removeAttribute("onclick");
                             
                //document.querySelector('#cancel').innerHTML="Cancel";
            }
            })
        })
        
    
   }

function resetForm () {
    let success = document.querySelectorAll(".success");
    //let error = document.querySelectorAll(".error");
    //let inputBorder = document.querySelectorAll(".container form .input-box input");
    document.querySelector(".result-container").style.display = "none";
    //let errorMobile = document.querySelector(".error.mobile");
    //let errorCity = document.querySelector(".error.city");
    //form[0].value = "";
    //form[1].value = "";
    //form[2].value = "";
        
    success.forEach((suc) => {
        suc.classList.remove("show");  
    });
    /*
    error.forEach((err) => {
        err.classList.remove("show");  
    });
    inputBorder.forEach((border) => {
        border.classList.remove("show");  
        //border.style.color = "black";
    }); */
    
}

// 1.Open Tax Calculator

const tax_btn = document.querySelector('#toTax');
const customers_table = document.querySelector('#customers_table');


const toTAX = function (customers_table) {
    const html_code = `
    <!DOCTYPE html>
    <link rel="stylesheet" type="text/css" href="css/contacts.css">
    <main class="table" id="customers_table">${customers_table.innerHTML}</main>`;

    const new_window = window.open();
     new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}

tax_btn.onclick = () => {
    //alert("tax")
    window.location.href = "index.html";
    //toPDF(customers_table);
}

// 2.Open Madad Calculator

const madad_btn = document.querySelector('#toMadad');
//const customers_table = document.querySelector('#customers_table');


const toMadad = function (customers_table) {
    const html_code = `
    <!DOCTYPE html>
    <link rel="stylesheet" type="text/css" href="css/contacts.css">
    <main class="table" id="customers_table">${customers_table.innerHTML}</main>`;

    const new_window = window.open();
     new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}

madad_btn.onclick = () => {
    //kivuaalert("madad")
    window.location.href = "madad.html";
    //toPDF(customers_table);
}

// 3.Open Kivua Calculator

const kivua_btn = document.querySelector('#toKivua');
//const customers_table = document.querySelector('#customers_table');


const toKivua = function (customers_table) {
    const html_code = `
    <!DOCTYPE html>
    <link rel="stylesheet" type="text/css" href="css/contacts.css">
    <main class="table" id="customers_table">${customers_table.innerHTML}</main>`;

    const new_window = window.open();
     new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}

kivua_btn.onclick = () => {
 //   alert("kivua")
 window.location.href = "kivua.html";
}

// 4.Open Prica Calculator

const prica_btn = document.querySelector('#toPrica');
//const customers_table = document.querySelector('#customers_table');


const tPrica = function (customers_table) {
    const html_code = `
    <!DOCTYPE html>
    <link rel="stylesheet" type="text/css" href="css/contacts.css">
    <main class="table" id="customers_table">${customers_table.innerHTML}</main>`;

    const new_window = window.open();
     new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}

prica_btn.onclick = () => {
    window.location.href = "prica.html";
//    alert("prica")
    //toPDF(customers_table);
}





