$(function(){
    'use strict';
//SCROLLING FUNCTION START
function scrollingFunction(hash){
      $('html, body').animate({
        scrollTop: ($(hash).offset().top)-30
      }, 800, function(){
        window.location.hash = hash;
      });
    }
//SCROLLING FUNCTION END
//    --------------------------------------
//    Function for about me START
    var menuClickAbout=$('a#top-menu-item-about-me');
    menuClickAbout.click( function(event) { 
        event.preventDefault();
        scrollingFunction(this.hash); 
    });
//    Function for about me END
//    --------------------------------------
//    Function for about me START
    var menuClickSkills=$('a#top-menu-item-my-skills');
    menuClickSkills.click( function(event) { 
        event.preventDefault();
        scrollingFunction(this.hash);
    });
//    Function for about me END
//    --------------------------------------
//    Function for portfolio START
     var menuClickPort=$('a#top-menu-item-my-portfolio');
    menuClickPort.click( function(event) { 
        event.preventDefault();
        scrollingFunction(this.hash);
    });
//    Function for portfolio END
//    --------------------------------------
//    Function for contact START
 var menuClickContact=$('a#top-menu-item-my-contact');
    menuClickContact.click( function(event) { 
    event.preventDefault();
    scrollingFunction(this.hash);
});
//    Function for contact END
//    --------------------------------------
    
    
})