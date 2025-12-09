AOS.init({
    duration: 800, // 전체 애니메이션 지속시간(ms)
    easing: 'ease-in-out', // 전체 애니메이션 easing
    once: true, // 스크롤 시 한 번만 실행
});

const visual_list1 = new Swiper(".visual_list1", {
    autoplay: true, //자동슬라이드
    delay: 2500,  //밀리세컨 2.5초
    disableOnInteraction: false,
    speed: 1000,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets", // 버튼 종류 설정..(fraction)(progressbar)
        clickable: true,
    }, //버튼 클릭여부
});


$(".btn > button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let t = $(this).index();
    $(".tab > div").eq(t).show().siblings().hide();

    menu_list1.update();
    menu_list2.update();
});

const menu_list1 = new Swiper(".menu_list1", {
    slidesPerView: 2,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    breakpoints: {
        1400: { //min 이상부터 
            slidesPerView: 4,
            spaceBetween: 20,
        },
        800: { //min 이상부터 
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".li1_btn_n",
        prevEl: ".li1_btn_p",
    },
});

const menu_list2 = new Swiper(".menu_list2", {
    slidesPerView: 2,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    breakpoints: {
        1400: { //min 이상부터 
            slidesPerView: 4,
            spaceBetween: 20,
        },
        800: { //min 이상부터 
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".li2_btn_n",
        prevEl: ".li2_btn_p",
    },

});

const shop_list = new Swiper(".shop_list", {
    slidesPerView: 1.8,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1400: { //min 이상부터 
            slidesPerView: 4.6,
            spaceBetween: 20,
        },
        1000: { //min 이상부터 
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
    }
});

const insta_list1 = new Swiper(".insta_list1", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    freemode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

const insta_list2 = new Swiper(".insta_list2", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    freemode: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});

const insta_list3 = new Swiper(".insta_list3", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    freemode: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});
