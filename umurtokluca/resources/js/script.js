$(document).ready(function() {
    
    $(".dark-icon").click(function(){
        $("body").toggleClass("dark-mode");
    });
    
    $(".mobile-nav-icon").click(function(){
        $(".main-nav").slideToggle(200); 
    });
    

});