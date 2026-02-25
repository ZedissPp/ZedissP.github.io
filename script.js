const navLinks=document.querySelectorAll("nav a");
const indicator=document.querySelector(".indicator");
const themeToggle=document.getElementById("theme-toggle");
const themeIcon=themeToggle.querySelector(".material-symbols-rounded");

function updateIndicator(el){
  indicator.style.width=el.offsetWidth+"px";
  indicator.style.left=el.offsetLeft+"px";
}

navLinks.forEach(link=>{
  link.addEventListener("click",()=>{
    navLinks.forEach(l=>l.classList.remove("active"));
    link.classList.add("active");
    updateIndicator(link);
  });
});

function initTheme(){
  const savedTheme=localStorage.getItem("theme")||"dark";
  if(savedTheme==="light"){
    document.body.classList.add("light-mode");
    themeIcon.textContent="dark_mode";
  }else{
    document.body.classList.remove("light-mode");
    themeIcon.textContent="light_mode";
  }
}

themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("light-mode");
  const isLightMode=document.body.classList.contains("light-mode");
  themeIcon.textContent=isLightMode?"dark_mode":"light_mode";
  localStorage.setItem("theme",isLightMode?"light":"dark");
});

window.addEventListener("load",()=>{
  themeToggle.style.display="flex";
  initTheme();
  updateIndicator(navLinks[0]);
  navLinks[0].classList.add("active");
});