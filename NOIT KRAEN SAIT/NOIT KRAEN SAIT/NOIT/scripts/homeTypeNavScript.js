

document.addEventListener("DOMContentLoaded", function () {
  
    if (window.innerWidth >= 1200) {
      window.onscroll = function () {
        navScrollFunctionDekstop();
      };
  
  
      navScrollFunctionDekstop();
    }
  });


  function navScrollFunctionDekstop() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
  
      document.getElementById("logo").style.height="55px";
      document.getElementById("logo").style.top="-1.5px";
      document.getElementById("logo").src="/assets/uchi_Lesno_2025_Crop.png";
  
      document.getElementById("nav").style.height="60px";
      document.getElementById("nav").style.background="rgb(77, 168, 243)";
      
  
      document.getElementById("menuicon").style.top="-0.26vw"; 
  
      document.getElementById("menu-content").style.top="5px";

      document.getElementById("loginButton").style.top="-15px"; 

      document.getElementById("links").style.top="-6px";  
  
      document.getElementById("home").style.display="none";  
      document.getElementById("stat").style.display="none";  
      document.getElementById("news").style.display="none";  
      document.getElementById("backIcon").style.display="inline";  
      document.getElementById("backIcon").style.animation="fade-in 0.3s";  
      document.getElementById("statIcon").style.display="inline"; 
      document.getElementById("statIcon").style.animation="fade-in 0.3s";  
      document.getElementById("newsIcon").style.display="inline"; 
      document.getElementById("newsIcon").style.animation="fade-in 0.3s";  
  
  
      
    } else {
  
      document.getElementById("logo").style.height="";
      document.getElementById("logo").style.top="";
      document.getElementById("logo").src="/assets/Uchi_Lesno_2025.png";
  
      document.getElementById("nav").style.height = "";
      document.getElementById("nav").style.background="rgb(74, 163, 236)";
  
      document.getElementById("links").style.top="0px";  
  
      document.getElementById("menuicon").style.top="0"; 
  
      document.getElementById("menu-content").style.top="";

      document.getElementById("loginButton").style.top=""; 
  
      document.getElementById("home").style.display="";  
      document.getElementById("stat").style.display="";  
      document.getElementById("news").style.display="";  
      document.getElementById("backIcon").style.display="";
      document.getElementById("statIcon").style.display=""; 
      document.getElementById("newsIcon").style.display=""; 
  
  
      
    }
  }
  
        

  