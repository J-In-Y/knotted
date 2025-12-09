$(".gnb > li").mouseover(function () {
    $(".depth2, .depth2_bg").stop().slideDown();
});
$(".gnb > li").mouseleave(function () {
    $(".depth2, .depth2_bg").stop().slideUp();
});

$(".gnb > li").mouseover(function () {
    $("#header").addClass("active")
});

$(".gnb > li").mouseleave(function () {
    $("#header").removeClass("active")
});

$(".ham").click(function () {
    $(".ham > span").toggleClass("active")
    $(".mgnb_wrap").fadeToggle();
});


$(".mgnb > li").click(function (e) {
    //e.preventDefault();
    $(this).toggleClass("active");
    $(this).find(".mdepth2").slideToggle();
    $(this).siblings("li").removeClass("active").find(".mdepth2").slideUp();
});


