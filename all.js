$(".go-top").click(e => {
    e.preventDefault();
    $("html").animate({scrollTop:0},700);
});
$(".go-project").click(e => {
    e.preventDefault();
    $("html").animate({scrollTop:950},700);
});
$(".go-works").click(e => {
    e.preventDefault();
    $("html").animate({scrollTop:1700},700);
});
$(".go-contact").click(e => {
    e.preventDefault();
    $("html").animate({scrollTop:4000},900);
});
//測試
Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,

    Image: {
        zoom: false,
        click: false,
        wheel: "slide",
    },
});
const swiper = new Swiper('.swiper', {
  // Optional parameters 上下或水平
    direction: 'horizontal',
    speed: 1500,
    loop: true,
    autoplay: {
    delay: 3000,
    centeredSlides:true,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});