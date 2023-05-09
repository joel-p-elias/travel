var flag=0;
function validation(){
    
    var form= document.getElementById('id_form').value;
    var email= document.getElementById('id_email').value;
    const password= document.getElementById('id_password').value;
    
    


                if(ValidateEmail(email)){
                    if(passwordValidation(password)){
                           return true;
                        
                    }
                }

    return false;  
         
}

function ValidateEmail(email)
{
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email==''){
        document.getElementById("email_error").innerHTML="please enter email.";
        flag=1;
        return false;
        

    }
    if (mailformat.test(email)) {
        flag=0;
        return true;
        
    }
    else {
        document.getElementById("email_error").innerHTML="Invalid email address.";
        flag=1;
        return false;
    }
}

function passwordValidation(password) {  

    if(password == "") {  
       document.getElementById("password_error").innerHTML = "Please enter the password";  
       flag=1;
       return false;  
       
    }  
     
    else {  
        
       return true;
    }  
  }  

