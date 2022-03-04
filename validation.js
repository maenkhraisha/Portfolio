console.log(email); 
console.log(errorSpan); 
console.log(form); 
email.addEventListener('input', function(event) {
     if(email.validity.valid){
          errorSpan.textContent = ''; 
        }else { 
            errorSpan.textContent = 'Email address must be lowercase'; 
            errorSpan.style.display = 'block'; 
        } 
    }); 

    /* if the validation is invalid stop form from send */ 
    form.addEventListener('submit', function(event){
         if(!email.validity.valid){ 
             showError();
              event.preventDefault();
             }
        }); 
        
    function showError(){
        errorSpan.textContent = 'Email address must be lowercase';
        errorSpan.style.display = 'block'; 
    } 