(function($){
    $("body").append("<div id='popContent'><div class='btn-popClose'>X</div><img></div>");
    $("#popLeo img").each(function(index) {
      $(this).on('click',function(){
        $('#popContent img').attr('src',$(this).attr('src'))
        $('#popContent').fadeIn();    
       });
    });
    $("#popContent").on('click', function(){
      $(this).fadeOut();
    });
}(jQuery));
