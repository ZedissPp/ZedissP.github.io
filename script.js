let themeInitialized=false;

function initializeTheme(){
  if(themeInitialized)return;
  themeInitialized=true;
  
  const themeToggle=document.getElementById("theme-toggle");
  const themeIcon=document.querySelector(".theme-toggle .material-symbols-rounded");
  
  if(!themeToggle||!themeIcon){
    console.warn("Theme elements not found");
    return;
  }
  
  const savedTheme=localStorage.getItem("theme")||"dark";
  
  function applyTheme(theme){
    if(theme==="light"){
      document.body.classList.add("light-mode");
      themeIcon.textContent="dark_mode";
      localStorage.setItem("theme","light");
    }else{
      document.body.classList.remove("light-mode");
      themeIcon.textContent="light_mode";
      localStorage.setItem("theme","dark");
    }
  }
  
  applyTheme(savedTheme);
  
  themeToggle.onclick=function(){
    const isLight=document.body.classList.contains("light-mode");
    applyTheme(isLight?"dark":"light");
  };
}

function initializeNav(){
  // only target the primary nav used for page sections
  const navLinks=document.querySelectorAll("#nav a");
  const indicator=document.querySelector(".indicator");
  
  if(!indicator||navLinks.length===0)return;
  
  function updateIndicator(el){
    indicator.style.width=el.offsetWidth+"px";
    indicator.style.left=el.offsetLeft+"px";
  }
  
  navLinks.forEach(link=>{
    link.addEventListener("click",function(){
      navLinks.forEach(l=>l.classList.remove("active"));
      this.classList.add("active");
      updateIndicator(this);
    });
  });
  
  // reposition indicator on resize in case layout changes
  window.addEventListener('resize',()=>{
    const active=document.querySelector('#nav a.active');
    if(active) updateIndicator(active);
  });
  
  updateIndicator(navLinks[0]);
  navLinks[0].classList.add("active");
}

if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",()=>{
    initializeTheme();
    initializeNav();
  });
}else{
  initializeTheme();
  initializeNav();
}