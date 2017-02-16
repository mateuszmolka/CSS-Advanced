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
var threeAndHalf = Number(getComputedStyle(document.body, "").fontSize.match(/(\d*(\.\d*)?)px/)[1]) * 3.5;

  $document.scroll(function() {
      if ($document.scrollTop() >= threeAndHalf) {
        $('nav').css({"opacity": 1,
                     "position": "fixed"
        });
        $('nav>ul>.top-menu-item>a').css({"color": "#1ac056"    
        });
      } else {
        $('nav').css({"opacity": 0
        });
        $('nav>ul>.top-menu-item>a').css({"color": "white"    
        });
      }
    });
    
    
//    FUNCTION FOR THE SCROLLING END
})