$(document).ready(function(){
    $("p").mouseenter(function(){
        $("p").hide(300);
    });
     $("p").mouseleave(function(){
        $("p").show(2000);
    });
});

$(document).ready(function(){
    $(".row").mouseenter(function(){
       $(this).css("background-color", "lightgray");  
    });
     $(".row").mouseleave(function(){
        $(this).css("background-color", "");
    });
}); 
$(".about").mouseenter(function(){
    $("#img").slideToggle(1000,callback);
});

$("nav-link").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
  $("p").click(function(){
    $(this).hide();
});
  $(".form-group").click(function(){
    $(this).hide();
});
  $(".form-group").scroll(function(){
    $(this).show();
});
  $("row").blur(function(){
    $(this).css("background-color","#ffffff");
});
  $("button").click(function(){
    var div = $("margin");
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
}); 