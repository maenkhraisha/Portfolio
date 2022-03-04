let userFName = document.getElementById('first-name');
const userLName = document.getElementById('last-name');
const userEmail = document.getElementById('email');
const message = document.getElementById('text-area');

function setStorage() {
  const userInfo = {
    FName: userFName,
    LName: userLName,
    email: userEmail,
    message,
  };
  localStorage.setItem('info', userInfo);
}
function setStyles() {
  userFName = localStorage.getItem('info');
}

window.addEventListener('storage', () => {
  if (!localStorage.getItem('info')) {
    setStorage();
  } else {
    setStyles();
  }
});
