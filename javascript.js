const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");
const menuclose = document.getElementById("menu-close-btn");

menuBtn.addEventListener('click',()=> {
    menuList.style.display  = "block";
});

menuclose.addEventListener('click' , ()=>{
    menuList.style.display  = "none";
})