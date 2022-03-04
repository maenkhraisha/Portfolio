// let errorSpan = document.getElementById('error');
// let email = document.getElementById('email');
// let form = document.getElementsByTagName('form');


// function validateEmail(){
//     const lowerCase = /^[a-z0-9.@]+$/;
//     let result = lowerCase.test(email.value);
//     return result;
// }

// function showError(){
//     errorSpan.style.display = 'block';
//     errorSpan.textContent = 'Email address must be lowercase'; 
// }
// function hideError(){
//     errorSpan.style.display = 'none';
//     errorSpan.textContent = ''; 
// }

// email.addEventListener('input', () =>{
//     if(!validateEmail()){
//         showError();
//     }
//     else{
//         hideError();
//     }
// }); 

//     /* if the validation is invalid stop form from send */ 
// form.addEventListener('submit', function(event){
//     if(!validateEmail()){ 
//         showError();
//         event.preventDefault();
//     }
//     else{
//         form.submit();
//     }
// });