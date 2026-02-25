const navLinks=document.querySelectorAll("nav a");
const indicator=document.querySelector(".indicator");

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

window.addEventListener("load",()=>{
  updateIndicator(navLinks[0]);
  navLinks[0].classList.add("active");
});