/* Author: Sergio Haro

*/
$(function() {
    // Page scrolling
    // credit: http://www.alfredapp.com/
    
    function ScrollToID() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    	  var $target = $(this.hash);
    	  $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
              var targetOffset = $target.position().top - 44;
              $('html,body').animate({scrollTop: targetOffset}, 1000);
              return false;
          }
    	}
    }
    
    $('a[href*=#]').click(ScrollToID); 
});























