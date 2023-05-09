        
       

        function validation(){
            var form= document.getElementById('id_form').value;
            var firstname= document.getElementById('id_firstname').value;
            var secondname= document.getElementById('id_secondname').value;
            var mobile= document.getElementById('id_mobile_number').value;
            var email= document.getElementById('id_email').value;
            var state= document.getElementById('id_state').value;
            var telephone= document.getElementById('id_telephone').value;
            var zipcode= document.getElementById('id_zipcode').value;
            var city= document.getElementById('id_city').value;
            
            var passengerscount= document.getElementById('id_passengers_count').value;
            var date= document.getElementById('id_date').value;
            
            if(fname_allLetter(firstname)){
                 if(sname_allLetter(secondname)){
                    if(mobile_allnumeric(mobile)){
                        if(ValidateEmail(email)){
                            if(stateSelect(state)){
                                if(city_alphanumeric(city)){
                                    if(telephone_allnumeric(telephone)){
                                        if(zipcode_allnumeric(zipcode)){
                                                if(passengers_allnumeric(passengerscount)){
                                                    if(date_validation(date)){
                                                        return true;
                                                    
                                                    }
                                                }
                                            }
                                        }
                                    }
                                
                            }
                        }
                    }
                }
            }
            return false; 
            
                  
        }
        
        function fname_allLetter(firstname) {
            var letters = /^[A-Za-z]+$/;
            if (firstname==='') {
                document.getElementById("fname_error").innerHTML="please enter first name.";
                
                return false;
            }
            else {
                return true;
            }
        } 
        function sname_allLetter(secondname) {
            var letters = /^[A-Za-z]+$/;
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
        function stateSelect(state) {
            if (state.value == "Default") {
                document.getElementById("state_error").innerHTML="please select a state.";
                return false;
            }
            else {
                return true;
            }
        }
        function city_alphanumeric(city) {
            var letters = /^[0-9a-zA-Z]+$/;
            if(city==''){
                document.getElementById("city_error").innerHTML="please enter a city.";
                return false;

            }
            if (city.value.match(letters)) {
                return true;

            } 
            else {
                document.getElementById("city_error").innerHTML="user city must have alphanumeric characters only";

                return false;
            }
        }

    
        function telephone_allnumeric(telephone) {
            var phoneno = /^\d{10}$/;
            
            if(phoneno.test(telephone)){
                return true;
            }
            
            else {
                document.getElementById("telephone_error").innerHTML="Invalid input";
                return false;
            }
        }
        
        function zipcode_allnumeric(zipcode) {
            var postalcode = /^\d{6}$/;
            if(zipcode==''){
                document.getElementById("zipcode_error").innerHTML="field required";
                return false;
            }
            if(postalcode.test(zipcode)){
                return true;
            }
            
            else {
                document.getElementById("zipcode_error").innerHTML="Invalid input";
                return false;
            }
        }

        





        
        


        
        
       

        
        
        

        

      