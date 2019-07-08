//Animations/JQuery
$(document).ready(function(){
  $("#slide").click(function(){
    $('html, body').animate({
      scrollTop: $('#content').offset().top
    }, 1000);
  });
});
