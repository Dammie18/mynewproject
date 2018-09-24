alert("Hello");

$(document).ready(function(){ //wait for doc to load before applying any javascript/ jquery code
    
//    $('h1').hide();
    
    $('h1').fadeOut(3000).fadeIn(2000);
    
    $('h1').toggle(1000);
    
    //$(".ui-message").hide();
    
//    $(".ui-message").click(function(){
//        $(".ui-message").hide();
//    })
//    
   // OR
//    $(".ui-message").click(function(){
//        $(this).hide(); //this refers to whatever was previously selected. in this case ui-message
//    })
    
    
    $("h1").click(function(){
        $(this).hide();
    })
    
    $(".ui-message").append("<span class='ui-close'>&times;</span>"); //we used js to create an element to the html file
    $(".ui-close").click(function(){
        $(this).parent(".ui-message").hide(); //DOM Document Object Model
    })
    
    $(".ui-message").append("<span class='ui-minimize'>&minus;</span>"); //we used js to create an element to the html file
    
    $(".ui-minimize").click(function(){
        $(this).siblings("p").toggle(1000); //DOM Document Object Model
    })
         $(".answer").hide();   
    
//    $(".faq h4").click(function(){
//        $(this).next(".answer").toggle(
//        );
//    })
     
    $(".faq h4").click(function(){
        $(".faq h4").not(this).next(".answer").slideUp("slow");
        $(this).next(".answer").slideToggle("slow");
    })
    
    var textmax = $('textarea').attr('maxlength');
    $("#textarea-feedback").html(textmax + " characters remaining");
    
    $('#textarea').keyup(function(){
        var character_count = 
        $('#textarea').val().length;
        
        var remaining = textmax - character_count;
        
        $("#textarea-feedback").html(remaining+ "   character remaining");
        
    });
    
    
    
                  });