$(document).ready(function(){
    $(".portfolio-img").hover(function(){
      $(this).addClass("shadow p-3 bg-white");
      }, function(){
      $(this).removeClass("shadow p-3 bg-white");
    });
  });