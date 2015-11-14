/* Sticky Menu */

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

/* Collapsible Lists */

function prepareList() {
    $('#expList').find('ul:has(blockquote)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded');
            $(this).children('blockquote').slideToggle("fast");
        }
        return false;
    })
    .addClass('collapsed')
    .children('blockquote').hide();
}

$(document).ready( function() {
    prepareList();
});