$("button").click(function(){
    $(".box").toggle();
    $(".click").text("Double click on the ARMY box");
});
$(".box").dblclick(function(){
    $(".ticket").fadeIn();
    $(".one").text("Now hover your mouse over the tickets");
    $(".box").hide();
    $(".click").hide();
});
$(".ticket").mouseenter(function(){
    $(".train").slideDown();
    $(".two").text("Hover your mouse over the train");
    $(".ticket").fadeOut();
    $(".one").fadeOut();
});
$(".train").hover(function(){
    $(".stadium").show();
    $(".three").text("Final step! Double click the stadium");
    $(".train").slideUp();
    $(".two").slideUp();
});
$(".stadium").dblclick(function(){
    $(".Jungkook").fadeIn();
    $(".four").text("우리가 곧 다시 만나길 바래");
    $(".stadium").fadeOut();
    $("button").hide();
    $(".three").fadeOut();
});