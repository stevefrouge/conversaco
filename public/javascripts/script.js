
new WOW().init();

$(document).ready(function(){
   // $(".headerwrapper").height( $(".yellow").height() );
    $(".headerwrapper").height($(window).height() + 200);
    $('.parallax-container').height($(window).height() + 500);
    $('.parallax').parallax();
    
    
});


$(window).scroll(function(){
  var aboutNumber = $("#divAbout").offset().top - $("#divAbout").height();  
  var workNumber = $("#divWork").offset().top - $("#divWork").height();
  var teamNumber = $("#divTeam").offset().top - $("#divTeam").height();
  var y = $(window).scrollTop();
  
    if(y == 0 && y < aboutNumber){
        clearMenuClass();
               
        addBorder("#menuHome")
         $("nav").slideUp();
    }
    if (y >= aboutNumber && y < workNumber){
        clearMenuClass();
        addBorder("#menuAbout")
        var width = $(window).width();
        if(width <= 1300){
            $("nav").slideDown();
            
        }       
      // Do stuff, like append a class to an element
    }
    if (y >= workNumber && y < teamNumber){
        clearMenuClass();
        addBorder("#menuWork")
      // Do stuff, like append a class to an element
    }
    if (y >= teamNumber){
        clearMenuClass();
        addBorder("#menuTeam")
      // Do stuff, like append a class to an element
    }
});

function clearMenuClass(){   
    $("#menuHome").removeClass( "border")    
    $("#menuHome").addClass("noborder");
    $("#menuAbout").removeClass( "border")    
    $("#menuAbout").addClass("noborder");
    $("#menuWork").removeClass( "border")    
    $("#menuWork").addClass("noborder");
    $("#menuTeam").removeClass( "border")    
    $("#menuTeam").addClass("noborder");
} 
function addBorder(name){
    $(name).removeClass( "noborder")
    $(name).addClass( "border" );
    
}