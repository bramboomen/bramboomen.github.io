/* global $ */
/* Sticky Menu */

$(function() {
	$(window).scroll(function() {
	    
		var scroll_top = $(window).scrollTop();
		var scrolloffset = 119;
		
		if (scroll_top > scrolloffset) { 
			$('menu').css({ 'position': 'fixed', 'top':0});
			$('menu').css({ 'display' : 'block'}); 
		} else {
			$('menu').css({ 'display' : 'none'}); 
		}
	});
});