let api = "https://script.google.com/macros/s/AKfycbzksZvOnvmmTHnb4Zf87b2W_AJu8LksAwqkdpUL3eNGgOOZTLZx0EAsHPGV4WatbNE2/exec",
form = document.querySelector("form"),
userName = document.querySelector("form #user-name"),
password = document.querySelector("form #password");
class Login {
	
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
		//this.validateonSubmit();
	}

	}

function home () {
    window.location.replace("tax.html"); 
    
}

function login () {
    //alert(form[1].value);
    document.querySelector(".submit").innerHTML = "מתחבר...";
    fetch(api+`?login=true&username=${form[0].value}&passwd=${form[1].value}`)
    
          .then(res => res.text())
          .then(data=> {
            //alert(data);
            if (data === 'Logged In') {
                login = true;
                localStorage.setItem("auth", 1);
                
                home();
                }
            else {
                
                alert(data);
            }  
            document.querySelector(".submit").innerHTML = "כניסה";
          })

}


//if (form) {
//	const fields = ["username", "password"];
//	const validator = new login(form, fields);
//}