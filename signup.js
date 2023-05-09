function validation(){
    var form= document.getElementById('id_form').value;
    var firstname= document.getElementById('id_firstname').value;
    var secondname= document.getElementById('id_secondname').value;
    var mobile= document.getElementById('id_mobile_number').value;
    var email= document.getElementById('id_email').value;
    const password= document.getElementById('id_password').value;
    var cpassword= document.getElementById('id_cpassword').value;
    
    if(fname_allLetter(firstname)){
        if(sname_allLetter(secondname)){
            if(mobile_allnumeric(mobile)){
                if(ValidateEmail(email)){
                    if(passwordValidation(password)){
                        if(cpasswordValidation(cpassword,password)){
                           return true;
                        
                    }
                }
            }
        }
    }
}
    return false;          
}
function fname_allLetter(firstname) {
    if (firstname==='') {
        document.getElementById("fname_error").innerHTML="please enter first name.";
        
        return false;
    }
    else {
        return true;
    }
} 
function sname_allLetter(secondname) {
    if (secondname==='') {
        document.getElementById("sname_error").innerHTML="Please enter second name.";
        
        return false;
    }
    else {
        return true;
    }
} 
function mobile_allnumeric(mobile) {
    var phoneno = /^\d{10}$/;
    if(mobile==''){
        document.getElementById("mobile_error").innerHTML="Please enter mobile number.";
        return false;

    }
    if(phoneno.test(mobile)){
        return true;
    }
    
    else {
        document.getElementById("mobile_error").innerHTML="Invalid input.";
        return false;
    }
}
function ValidateEmail(email)
{
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email==''){
        document.getElementById("email_error").innerHTML="please enter email.";
        return false;

    }
    if (mailformat.test(email)) {
        return true;
    }
    else {
        document.getElementById("email_error").innerHTML="Invalid email address.";
        return false;
    }
}

function passwordValidation(password) {  

    if(password == "") {  
       document.getElementById("password_error").innerHTML = "Please enter a password";  
       return false;  
    }  
     
    if(password.length < 8) {  
       document.getElementById("password_error").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }  
    
    if(password.length > 15) {  
       document.getElementById("password_error").innerHTML = "Password length must not exceed 15 characters";  
       return false;  
    } 
    else {  
       return true;
    }  
  }  

  function cpasswordValidation(cpassword,password) {  
   

    if(cpassword == "") {  
        document.getElementById("cpassword_error").innerHTML = "Please confirm the password";  
        return false;  
    } 
    if(password != cpassword)  
    {   
        document.getElementById("password_error").innerHTML = "Password does not match";
        document.getElementById("cpassword_error").innerHTML = "Password does not match";   
        return false;
    } 
    else {  
      return true;
    }  
  }  