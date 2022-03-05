const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');
const menuClose = document.getElementById('menu-close-btn');

const menuPortfolio = document.getElementById('btn-porfolio-menu');
const menuAbout = document.getElementById('btn-about-menu');
const menuContact = document.getElementById('btn-contact-menu');

menuBtn.addEventListener('click', () => {
  menuList.style.display = 'flex';
});

menuClose.addEventListener('click', () => {
  menuList.style.display = 'none';
});

menuPortfolio.addEventListener('click', () => {
  menuList.style.display = 'none';
});

menuAbout.addEventListener('click', () => {
  menuList.style.display = 'none';
});

menuContact.addEventListener('click', () => {
  menuList.style.display = 'none';
});