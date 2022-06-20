$(".go-top").click(e => {
    e.preventDefault();
    $("html").animate({scrollTop:0},700);
});
$(".go-work").click(e => {
    e.preventDefault();
    $("html").animate({scrollTop:950},700);
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