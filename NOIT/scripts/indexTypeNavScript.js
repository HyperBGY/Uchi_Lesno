window.onscroll = function() {navScrollFunction()};
        
function navScrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

    document.getElementById("logo").style.top="-0.391vw";
    document.getElementById("logo").style.height="2.865vw";
    document.getElementById("logo").src="/assets/Uchi_Lesno_2025_Crop.png";

    document.getElementById("nav").style.height="3.125vw";
    document.getElementById("nav").style.background="rgb(77, 168, 243)";
    
    document.getElementById("links").style.top="-0.469vw";  

    document.getElementById("registerButton").style.scale="75%";
    document.getElementById("registerButton").style.top="-0.938vw";
    document.getElementById("loginButton").style.scale="75%";
    document.getElementById("loginButton").style.top="-0.938vw";


    document.getElementById("home").style.display="none";  
    document.getElementById("aboutUs").style.display="none";  
    document.getElementById("socials").style.display="none";  
    document.getElementById("contacts").style.display="none";  
    document.getElementById("backIcon").style.display="inline";  
    document.getElementById("backIcon").style.animation="fade-in 0.3s";  
    document.getElementById("aboutUsIcon").style.display="inline"; 
    document.getElementById("aboutUsIcon").style.animation="fade-in 0.3s";  
    document.getElementById("socialsIcon").style.display="inline"; 
    document.getElementById("socialsIcon").style.animation="fade-in 0.3s";  
    document.getElementById("contactsIcon").style.display="inline"; 
    document.getElementById("contactsIcon").style.animation="fade-in 0.3s";  


    
  } else {

    document.getElementById("logo").style.top="";
    document.getElementById("logo").style.height="4.167vw";
    document.getElementById("logo").src="/assets/Uchi_Lesno_2025.png";

    document.getElementById("nav").style.height = "5.208vw";
    document.getElementById("nav").style.background="rgb(74, 163, 236)";

    document.getElementById("links").style.top="0px";  

    document.getElementById("home").style.display="";  
    document.getElementById("aboutUs").style.display="";  
    document.getElementById("socials").style.display="";  
    document.getElementById("contacts").style.display="";  
    document.getElementById("backIcon").style.display="";
    document.getElementById("aboutUsIcon").style.display=""; 
    document.getElementById("socialsIcon").style.display=""; 
    document.getElementById("contactsIcon").style.display=""; 

    document.getElementById("registerButton").style.scale="";
    document.getElementById("registerButton").style.top="";
    document.getElementById("loginButton").style.scale="";
    document.getElementById("loginButton").style.top="";


    
  }
}                                   