var menu = $("#menuribbon");

$(window).scroll(function() {
    
  if ($(window).scrollTop > 10) {
    menu.addClass(".fixmenu");
  } else {
    menu.removeClass(".fixmenu");
  }
  
});