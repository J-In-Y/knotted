//menu
document.querySelectorAll(".sub_btn a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

//event
$(".event_btn a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let t = $(this).index();
    $(".event_list").eq(t).show().siblings().hide();
});

//story2
$(".story_btn a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let i = $(this).index();
    $(".story").eq(i).show().siblings().hide();
});

const swiper = new Swiper(".story_list2", {
    centeredSlides: true,
    slidesPerView: 1.3,
    spaceBetween: 30,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1400: { //min 이상부터 
            slidesPerView: 1.4,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const slow = new Swiper(".slow", {
    slidesPerView: 4.5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        1000: { //min 이상부터 
            slidesPerView: 8,
            spaceBetween: 20,
        },
        800: { //min 이상부터 
            slidesPerView: 6,
            spaceBetween: 20,
        },
        600: { //min 이상부터 
            slidesPerView: 5,
        },
    },
    speed: 6000,
});

//storetabmenu
$(".store_list > div:not(:first-child)").hide();

$(".store_btn button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".store_list > div").eq(idx).fadeIn().siblings().hide();
});