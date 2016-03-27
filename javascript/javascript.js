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
        //if (this == event.target)
        {
            $(this).toggleClass('expanded');
            $(this).children('blockquote').slideToggle("fast");
            $(this).find('#arrow').toggleClass('rotatedarrow');
            $(this).toggleClass('divider');
        }
        return false;
    })
    .addClass('collapsed')
    .children('blockquote').hide();
    
    $('#meer').unbind('click')
    .click( function() {
        $('.collapsed').addClass('expanded');
        $('.collapsed').children('blockquote').slideDown('fast');
        $('.collapsed').find('#arrow').removeClass('rotatedarrow');
        $('.collapsed').addClass('divider');
        $('#meer').hide();
        $('#minder').show();
    });
    
    $('#minder').unbind('click')
    .click( function() {
        $('.collapsed').removeClass('expanded');
        $('.collapsed').children('blockquote').slideUp('fast');
        $('.collapsed').find('#arrow').addClass('rotatedarrow');
        $('.collapsed').removeClass('divider');
        $('#meer').show();
        $('#minder').hide();
    });
}

$(document).ready( function() {
    prepareList();
    $('#minder').hide();
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
