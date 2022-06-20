$(".go-top").click(e => {
    e.preventDefault();
    $("html").animate({scrollTop:0},700);
});
$(".go-work").click(e => {
    e.preventDefault();
    $("html").animate({scrollTop:800},700);
});
//測試
Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
        display: [
        {
            id: "counter",
            position: "center",
        },
        "zoom",
        "slideshow",
        "fullscreen",
        "thumbs",
        "close",
        ],
    },

    on: {
    initLayout: (fancybox) => {
      // Create elements
      // ===

      // Create left column
        const $leftCol = document.createElement("div");
        $leftCol.classList.add("fancybox__leftCol");

        while (fancybox.$container.firstChild) {
            $leftCol.appendChild(fancybox.$container.firstChild);
        }

        // Create right column
        const $rightCol = document.createElement("div");
        $rightCol.classList.add("fancybox__rightCol");

        $rightCol.innerHTML =
            '<p class="mb-2">You can place any content here, such as ads, comments or map</p>';

        // Create info-box
        const $info = document.createElement("div");
        $rightCol.appendChild($info);
        fancybox.$info = $info;

        // Add elements to DOM
        fancybox.$container.appendChild(fancybox.$backdrop);

        fancybox.$container.appendChild($leftCol);
        fancybox.$container.appendChild($rightCol);

        fancybox.$leftCol = $leftCol;
        fancybox.$rightCol = $rightCol;
        },
        "Carousel.ready Carousel.change": (fancybox, carousel, slideIndex) => {
        // Update info-box
        // ===

        // Get index of the current gallery item
        slideIndex =
            slideIndex === undefined ? carousel.options.initialPage : slideIndex;

        // Get link related to current item
        const $trigger = fancybox.items[slideIndex].$trigger;

        // Get data from `data-info` attribute
        const data = $trigger.dataset.info || "";

        // Update info
        fancybox.$info.innerHTML = `<p>${data}</p>`;
        },
    },
});