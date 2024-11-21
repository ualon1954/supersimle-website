/* CRUD for contacts */

let api = "https://script.google.com/macros/s/AKfycbwZQnt_PavalDGpNuDAOtK7E-ew3Hz3Oz9LNjOQmx7lcwu-0YId2FzRUHGCI1yHv8FB/exec";
let form = document.querySelector("form");
console.log(form);
let add = document.querySelector(".add");
let update = document.querySelector(".update");
let tbody = document.querySelector("tbody");
let tbody_rows = '';
let show_flag = 0;
let monthly = document.getElementById("month").checked;


  function updateData() {
    taxmadr = '';
    taxshuli = '';
    lowmad = '';
    if (document.getElementById("month").checked == true) {
        taxmadr = `=VLOOKUP(${form[2].value},M_2024[%23ALL],3)`;
        taxshuli = `=VLOOKUP((${form[2].value} - ${form[4].value}),M_2024[%23ALL],2)`;
        lowmad = `=VLOOKUP(${form[2].value} ,M_2024[%23ALL],1)`;
   }
    else {
        taxmadr = `=VLOOKUP(${form[2].value},Y_2024[%23ALL],3)`;
        taxshuli = `=VLOOKUP((${form[2].value} - ${form[4].value}),Y_2024[%23ALL],2)`;
        lowmad = `=VLOOKUP(${form[2].value} ,Y_2024[%23ALL],1)`;
    }    
    document.querySelector(".update").innerHTML = "מחשב..."
    fetch(api+`?updatetax=true&id=2&amount=${form[2].value}&rpoints=${form[3].value}&ptor=${form[4].value}&taxmadr=${taxmadr}&shuli=${taxshuli}&low=${lowmad}`)
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
       
    })
    
} 

function calculateTax() {
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
        fetch(api+`?readtax=true&id=1`)
        .then(res=>res.json())
        .then(data=> {
            let todo = data.todo;
            //console.log(todo);
            let trtd = todo.map(each=> {
            if (1 === each[0] ) {
             
                form[5].value = each[7].toLocaleString(undefined, { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  });
                form[6].value = each[9];
                form[7].value = each[10].toLocaleString(undefined, { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  });
                form[8].value = each[5].toLocaleString('pl-PL', { style: 'percent' });
                form[9].value = each[11].toLocaleString(undefined, { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  });
                
                //update.setAttribute("onclick",`updateData(${id})`);
               
                //update.removeAttribute("onclick");
                             
                //document.querySelector('#cancel').innerHTML="Cancel";
            }
            })
            document.querySelector(".update").innerHTML = "חישוב"
            document.querySelector(".result-container").style.display = "block";
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

function menutoggle () {
    
    if (document.getElementById("export-file").checked == true) {
        document.querySelector(".export__file-options").style.display = "none";
    }
    else {
        document.querySelector(".export__file-options").style.display = "block"; 
    }
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

// 1.Open Madad Calculator

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
      window.location.href = "madad.html";  
}

// 2.Open Kivua Calculator

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
      window.location.href = "kivua.html";
 }

// 3.Open Prica Calculator

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
}




