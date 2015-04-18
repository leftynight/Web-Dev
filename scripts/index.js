 $(document).ready(function() {   
    $( "#more" ).mousedown(function() {
        $("#button").attr('src',"images/Arrow-Pressed.svg");
        $('#button').css({'margin-top':'10px'}); 
    });
    $( "#more" ).mouseup(function() {
        $("#button").attr('src',"images/Arrow-Unpressed.svg");
        $('#button').css({'margin-top':'0px'}); 
    });
 });