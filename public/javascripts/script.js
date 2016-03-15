
new WOW().init();

$(document).ready(function(){
    $(".headerwrapper").height( $(".yellow").height() );
    
});


$(window).scroll(function(){
  var aboutNumber = $("#divAbout").offset().top - $("#divAbout").height();  
  var workNumber = $("#divWork").offset().top - $("#divWork").height();
  var teamNumber = $("#divTeam").offset().top - $("#divTeam").height();
  var y = $(window).scrollTop();
  
    if(y == 0 && y < aboutNumber){
        clearMenuClass();
        addBorder("#menuHome")
    }
    if (y >= aboutNumber && y < workNumber){
        clearMenuClass();
        addBorder("#menuAbout")
              
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