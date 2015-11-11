$(function() {

	$(window).scroll(function() {
	    
		var scroll_top = $(window).scrollTop();
		var scrolloffset = 210;
		
		if (scroll_top > scrolloffset) { 
			$('menuribbon').css({ 'position': 'fixed', 'top':0});
		} else {
			$('menuribbon').css({ 'position': 'absolute', 'top':210}); 
		}
	});
});
