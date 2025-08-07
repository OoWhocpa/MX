
    $(function () {
        $(".block5__footer").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            asNavFor: ".block5__header",
            dots: false,
            fade: true,
            arrows: false,
            touchMove: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        infinite: true,
                        centerMode: true,
                    },
                },
            ],
        });
    $(".block5__header").slick({
        slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
    dots: false,
    variableWidth: true,
    asNavFor: ".block5__footer",
    responsive: [
    {
        breakpoint: 640,
    settings: {
        slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    centerMode: true,
              },
            },
    ],
        });
      });