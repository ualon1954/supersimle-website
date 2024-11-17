/* CRUD for contacts */

let api = "https://script.google.com/macros/s/AKfycbztLRR78VRc-J4euLH4UdlDRfFEme57VygrBXF9vAJ1AQL4NSJySMKsTanM9meED0Fo/exec";
let form = document.querySelector("form");
console.log(form);
let add = document.querySelector(".add");
let update = document.querySelector(".update");
let tbody = document.querySelector("tbody");
let tbody_rows = '';
let show_flag = 0;
let lamount = document.querySelector('label[for="tax"]');  //does nothing

//let aAmount = ''; 
//let totalAmount = 0; 

function clearPrica() {
    fetch(api+`?del=true`)
    .then(res => res.text())
    .then(data=> {
        //updateDataPrica();
    })
}

function calculatePrica() {
   // alert("prica");
     //document.querySelector(".update").innerHTML = "מחשב..."
    let firstYear = parseInt(document.getElementById('firstyear').value);
    let month = parseInt(document.getElementById('month').value);
    let pricaAmount = parseInt(document.getElementById('amount').value);
    let addAmount = parseInt(document.getElementById('aamount').value);
    let penciaAmount = parseInt(document.getElementById('pencia').value);
    let prica = document.getElementById('prica').value;
    let pricaHTML = '';
    let aAmount = ''; 
    let totalAmount = 0;
    fetch(api+`?del=true&id=2`)
            .then(res => res.text())
            .then(data=> {
                //readData()
                //alert(data)
            })
     
    pricaAmount = (pricaAmount / prica);
    
    //console.log(month);
    
    for (i=1;  i <= prica; i++)  {
        if (i ==1 ) {
            aAmount = addAmount + 11*penciaAmount;
        }    
        else {
            aAmount = 12*penciaAmount;
        }
        totalAmount = parseInt(pricaAmount) + parseInt(aAmount);
          console.log(pricaAmount + aAmount);
        pricaHTML += `
        <tr>
            <td class="id">${i}</td>
            <td class="firstyear">${firstYear + i-1}</td>
            <td id="pricaamount">${pricaAmount.toLocaleString(undefined, { 
                minimumFractionDigits: 0, 
                maximumFractionDigits: 0 
              })}</td>
            <td class="addamount">${aAmount.toLocaleString(undefined, { 
                minimumFractionDigits: 0, 
                maximumFractionDigits: 0 
              })}</td>
            <td>${totalAmount.toLocaleString(undefined, { 
                minimumFractionDigits: 0, 
                maximumFractionDigits: 0 
              })}</td>
            <td id="taxpecents">24%</td>
            <td id="taxamount">23577</td>
        </tr>   
        `;
    } 
    //console.log(pricaHTML)  ;
    document.querySelector("tbody").innerHTML = pricaHTML;  
      
   }

   function readPrica() {
    let pricaHTML = '';
    fetch(api+`?readprica=true&id=2`)
    .then(res=>res.json())
    .then(data=> {
        let todo = data.todo;
        //console.log(todo);
        let trtd = todo.map(each=> {
        let mikdama = (each[2]*each[5].toLocaleString(undefined, { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          })).toLocaleString(undefined, { 
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0 
          });
        pricaHTML += `
        <tr>
            <td class="id">${each[0]}</td>
            <td class="firstyear">${each[1]}</td>
            <td id="pricaamount">${each[2].toLocaleString(undefined, { 
                minimumFractionDigits: 0, 
                maximumFractionDigits: 0 
              })}</td>
            <td class="addamount">${each[3].toLocaleString(undefined, { 
                minimumFractionDigits: 0, 
                maximumFractionDigits: 0 
              })}</td>
            <td>${each[4].toLocaleString(undefined, { 
                minimumFractionDigits: 0, 
                maximumFractionDigits: 0 
              })}</td>
            <td id="taxpecents">${each[5].toLocaleString('pl-PL', { style: 'percent',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0, })}</td>
            <td id="taxamount">${mikdama}</td>
        </tr>   
        `;
        });

        document.querySelector("tbody").innerHTML = pricaHTML;
        document.querySelector(".update").innerHTML = "חישוב";
        document.querySelector(".result-container").style.display = "block";
    })  
    
   
}

function updateDataPrica() {
    //clearPrica();
    document.querySelector(".update").innerHTML = "מחשב...";
    let firstYear = parseInt(document.getElementById('firstyear').value);
    let month = parseInt(document.getElementById('month').value);
    let pricaAmount = parseInt(document.getElementById('amount').value);
    let addAmount = parseInt(document.getElementById('aamount').value);
    let penciaAmount = parseInt(document.getElementById('pencia').value);
    let prica = document.getElementById('prica').value;
    let aAmount = '';
    let taxperc = '';
    pricaAmount = (pricaAmount / prica);
    //clearPrica();
        
    for (i=1;  i <= prica; i++)  {
        if (i ==1 ) {
            aAmount = addAmount + 11*penciaAmount;
        }    
        else {
            aAmount = 12*penciaAmount;
        }
        totalAmount = parseInt(pricaAmount) + parseInt(aAmount);
         
        taxperc = `=(VLOOKUP(${totalAmount},Prica!$A$1:$C$8,3,TRUE) %2B (${totalAmount}-VLOOKUP(${totalAmount},Prica!$A$1:$C$8,1,TRUE)) * VLOOKUP(${totalAmount},Prica!$A$1:$C$8,2,TRUE) - VLOOKUP(${aAmount},Prica!$A$1:$C$8,3,TRUE) - (${aAmount} - VLOOKUP(${aAmount},Prica!$A$1:$C$8,1,TRUE)) * VLOOKUP(${aAmount},Prica!$A$1:$C$8,2,True)) / ${pricaAmount}`
          //console.log(pricaAmount + aAmount);
          fetch(api+`?updateprica=true&id=${i+1}&numprica=${i}&numprica=${pricaAmount}&year=${firstYear + i-1}&prica=${pricaAmount}&addamount=${aAmount}&totalamount=${totalAmount}&tax=${taxperc}`)
    
          .then(res => res.text())
          .then(data=> {
          })
          readPrica();
    } 
    
 
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
    //alert("madad")
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
/*
kivua_btn.onclick = () => {
    alert("kivua")
    //toPDF(customers_table);
}
    */

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

/*
prica_btn.onclick = () => {
    alert("prica")
    //toPDF(customers_table);
}
    */





