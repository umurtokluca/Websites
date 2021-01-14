$(document).ready(function() {

    
     $(".mobile-nav-icon").click(function(){
         $(".main-nav").slideToggle(50); 

         if (icon.attr("name") == "menu") {
            icon.attr("name", "close");
        }
        else {
            icon.attr("name", "menu")
        }
     });

 });

