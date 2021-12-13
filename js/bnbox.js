$(function(){
  let w=window.innerWidth;
  function slide(){
    $('.slide').stop().animate({marginLeft:-w}, 3000,function(){
    $('.slide li:first').appendTo('.slide'); 
    $('.slide').css({marginLeft:0}); 
    }); 
    }
  
    setInterval(slide, 10000);
});

$(function(){
  $(".a").click(function(){ 
  $(".b").slideToggle();
  });
  });
  $(window).resize(function(){
  if(window.innerWidth<=768){
  $('.b').show();
  }
});
