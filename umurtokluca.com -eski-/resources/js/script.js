$(document).ready(function() {
    
    $(".dark-icon").click(function(){
        $("body").toggleClass("dark-mode");
    });
    
    $(".mobile-nav-icon").click(function(){
        $(".main-nav").slideToggle(200); 
    });
    

});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}