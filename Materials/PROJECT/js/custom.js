'use strict';
//SCROLLING FUNCTION START
function scrollingFunction(element){
      $('html, body').animate({
        scrollTop: ($(element.hash).offset().top)-30
      }, 800, function(){
        window.location.hash = element.hash;
      });
    }
//SCROLLING FUNCTION END

$(function(){
    'use strict';
var $document = $(document);
var threeAndHalf = Number(getComputedStyle(document.body, "").fontSize.match(/(\d*(\.\d*)?)px/)[1]) * 8;

  $document.scroll(function() {
      if ($document.scrollTop() >= threeAndHalf) {
        $('#navigation-bar').addClass('under');
        $('nav>ul>.top-menu-item>a').addClass('under-a');
          
      } else {
        $('#navigation-bar').removeClass('under');
        $('nav>ul>.top-menu-item>a').removeClass('under-a');
      }
    });
    
    
//    FUNCTION FOR THE SCROLLING END
})