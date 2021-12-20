$(function(){
    $("#b").click(function(){
     $("#c").slideToggle();
    });
});
   
   

$(window).resize(function(){
    if(window.innerWidth<=1099){
        $('#c').hide();
    }
});

