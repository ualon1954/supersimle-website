/* CRUD for contacts */

let api = "https://script.google.com/macros/s/AKfycbwZQnt_PavalDGpNuDAOtK7E-ew3Hz3Oz9LNjOQmx7lcwu-0YId2FzRUHGCI1yHv8FB/exec";
let form = document.querySelector("form");
console.log(form);
let add = document.querySelector(".add");
let update = document.querySelector(".update");
let tbody = document.querySelector("tbody");
let tbody_rows = '';
let show_flag = 0;
let lamount = document.querySelector('label[for="tax"]');  //does nothing

function menutoggle () {
    
    if (document.getElementById("export-file").checked == true) {
        document.querySelector(".export__file-options").style.display = "none";
    }
    else {
        document.querySelector(".export__file-options").style.display = "block"; 
    }
}

//let aAmount = ''; 
//let totalAmount = 0; 

function clearPrica() {
    document.querySelector(".update").innerHTML = "מחשב...";
    document.querySelector(".result-container").style.display = "none";
    //alert("clear");
    fetch(api+`?del=true`)
    .then(res => res.text())
    .then(data=> {
        if (data === 'data Deleted!') {
          updateDataPrica();
        }
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
    fetch(api+`?del=true`)
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
            <td class ="taxpercents" id="taxpercents">24%</td>
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
            <td class="firstyear" style="font-weight: 600;">${each[1]}</td>
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
            <td id="taxpecents" style="color:red;">${each[5].toLocaleString('pl-PL', { style: 'percent',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0, })}</td>
            <td id="taxamount" style="color:red;">${mikdama}</td>
        </tr>
        `;
        });

        var table = document.querySelector('table');
        var percCell = table.rows[ table.rows.length - 1 ].cells[ table.rows[ table.rows.length - 1 ].cells.length - 2 ];
        var mikdamaCell = table.rows[ table.rows.length - 1 ].cells[ table.rows[ table.rows.length - 1 ].cells.length - 1 ];
        var sum1 = 0;
        var sum2 = 0;
        var rownum = table.rows.length - 2;
        for( var i = 1; i < table.rows.length - 1; i++ ){
            sum1 = sum1 + parseFloat(table.rows[ i ].cells[ 5 ].textContent);
        }
        for( var i = 1; i < table.rows.length - 1; i++ ){
            sum2 = sum2 + parseFloat((table.rows[ i ].cells[ 6 ].textContent).replace(",",""));
            //console.log(table.rows[ i ].cells[ 6 ].textContent.replace(",",""));
        }

        percCell.textContent = (sum1.toFixed( 0 )/rownum/100).toLocaleString('pl-PL', { style: 'percent',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0, });

        mikdamaCell.textContent = sum2.toLocaleString(undefined, { 
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0 
          });
        
        //console.log(typeof sum2);
        
        //console.log('12,555'.toString());




        document.querySelector("tbody").innerHTML = pricaHTML;
        document.querySelector(".update").innerHTML = "חישוב";
        document.querySelector(".result-container").style.display = "block";
    })  
    
   
}

function updateDataPrica() {
    //clearPrica();
    //document.querySelector(".update").innerHTML = "מחשב...";
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
        if (i ==1 && form[3].value != "") {
            aAmount = addAmount + (12 - month)*penciaAmount;
        }    
        else {
            aAmount = 12*penciaAmount;
        }
        
        totalAmount = parseInt(pricaAmount) + parseInt(aAmount);
         
        taxperc = `=(VLOOKUP(${totalAmount},YEAR2024[%23ALL],3,TRUE) %2B (${totalAmount}-VLOOKUP(${totalAmount},YEAR2024[%23ALL],1,TRUE)) * VLOOKUP(${totalAmount},YEAR2024[%23ALL],2,TRUE) - VLOOKUP(${aAmount},YEAR2024[%23ALL],3,TRUE) - (${aAmount} - VLOOKUP(${aAmount},YEAR2024[%23ALL],1,TRUE)) * VLOOKUP(${aAmount},YEAR2024[%23ALL],2,True)) / ${pricaAmount}`
          //console.log(pricaAmount + aAmount);
          fetch(api+`?updateprica=true&id=${i+1}&numprica=${i}&numprica=${pricaAmount}&year=${firstYear + i-1}&prica=${pricaAmount}&addamount=${aAmount}&totalamount=${totalAmount}&tax=${taxperc}`)
    
          .then(res => res.text())
          .then(data=> {
            if (data === 'data Updateed!') {
               readPrica();
                }
          })
          
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

kivua_btn.onclick = () => {
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

/*
prica_btn.onclick = () => {
    alert("prica")
    //toPDF(customers_table);
}
    */





