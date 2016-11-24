/* Sticky Menu */

$(function() {
	$(window).scroll(function() {
	    
		var scroll_top = $(window).scrollTop();
		var scrolloffset = 140;
		
		if (scroll_top > scrolloffset) { 
			$('menu').css({ 'position': 'fixed', 'top':0});
		} else {
			$('menu').css({ 'position': 'absolute', 'top':140}); 
		}
	});
});