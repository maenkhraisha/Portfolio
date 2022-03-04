let userFNameField = document.querySelector('#first-name input');
let userLNameField = document.querySelector('#last-name input');
let userEmailField = document.getElementById('email');
let messageField = document.getElementById('text-area');

function createLocalStorage(){
  localStorage.setItem('fname', "");
  localStorage.setItem('lname', "");
  localStorage.setItem('email', "");
  localStorage.setItem('message', "");
}

  const userInfo = {
    FName: localStorage.getItem('fname'),
    LName: localStorage.getItem('lname'),
    email: localStorage.getItem('email'),
    message: localStorage.getItem('message'),
  }


function loadLocalStorage(){
  userFNameField.value = localStorage.getItem('fname')
  userLNameField.value = localStorage.getItem('lname')
  userEmailField.value = localStorage.getItem('email')
  messageField.value = localStorage.getItem('message')
}

function updateLocalStorage(){
  localStorage.setItem('fname', userInfo.FName)
  localStorage.setItem('lname', userInfo.LName)
  localStorage.setItem('email', userInfo.email)
  localStorage.setItem('message', userInfo.message)
}

createLocalStorage()
  
// function setStyles() {
//   userFNAme = localStorage.getItem('info');
// }

function addEvent(element, event, callback) {
  const previousEventCallBack = element[`on${event}`];
  element[`on${event}`] = function (e) {
    let output = callback(e);

    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if (output === false) return false;
    }
    return false;
  };
}

addEvent(userFNameField, 'input', () => {

  userInfo.FName = userFNameField.value;
  updateLocalStorage()
  console.log(userInfo.FName)

});

addEvent(userLNameField, 'input', () => {

  userInfo.LName = userLNameField.value
  updateLocalStorage()
  console.log(userInfo.LName)
});

addEvent(userEmailField, 'input', () => {

  userInfo.email = userEmailField.value
  // localStorage.setItem('lname', userInfo.email)
  updateLocalStorage()
  console.log(userInfo.email)
});

addEvent(messageField, 'input', () => {

  userInfo.message = messageField.value
  updateLocalStorage()
  console.log(messageField.value)
});



window.addEventListener('load', () => {

  updateLocalStorage()

  loadLocalStorage()

  console.log("life")
});
