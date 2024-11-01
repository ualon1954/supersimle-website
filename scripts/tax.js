/* CRUD for contacts */

let api = "https://script.google.com/macros/s/AKfycbzbfoDMkJrJafwDFgVveGNnr0kLFv31Yd3Jo435-HUqJh4BjjHiK91GeghOCZfO1Pbi/exec";
let form = document.querySelector("form");
console.log(form);
let add = document.querySelector(".add");
let update = document.querySelector(".update");
let tbody = document.querySelector("tbody");
let tbody_rows = '';
let show_flag = 0;




   function updateData() {
    //alert("update");
    let prifileUrl = '';
    if (form[3].value === "") {
        prifileUrl = "images/anonim.jpg";
    }else{
        prifileUrl =  form[3].value ;
    }
    document.querySelector(".update").innerHTML = "מחשב.."
    fetch(api+`?update=true&id=2&amount=${form[0].value}&rpoints=${form[1].value}&ptor=${form[2].value}`)
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
        fetch(api)
        .then(res=>res.json())
        .then(data=> {
            let todo = data.todo;
            //console.log(todo);
            let trtd = todo.map(each=> {
            if (2024 === each[0] ) {
             
                form[3].value = each[6];
                form[4].value = each[7];
                form[5].value = each[8];
                form[6].value = each[4];
                form[7].value = each[9];
                
                //update.setAttribute("onclick",`updateData(${id})`);
               
                //update.removeAttribute("onclick");
                             
                //document.querySelector('#cancel').innerHTML="Cancel";
            }
            })
        })
        
    
   }

function resetForm () {
    let success = document.querySelectorAll(".success");
    let error = document.querySelectorAll(".error");
    let inputBorder = document.querySelectorAll(".container form .input-box input");
    document.querySelector(".result-container").style.display = "none";
    //let errorMobile = document.querySelector(".error.mobile");
    //let errorCity = document.querySelector(".error.city");
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    
    success.forEach((suc) => {
        suc.classList.remove("show");  
    });
    error.forEach((err) => {
        err.classList.remove("show");  
    });
    inputBorder.forEach((border) => {
        border.classList.remove("show");  
        //border.style.color = "black";
    });
    
}





