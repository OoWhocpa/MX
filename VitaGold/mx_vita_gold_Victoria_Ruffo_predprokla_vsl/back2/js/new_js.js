$(document).ready(function () {
	$(".sec2__slider").slick({
		//   for arabic countries
		// rtl: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		dots: true,
		prevArrow: '<button class="slider__prev"></button>',
		nextArrow: '<button class="slider__next"></button>',
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					infinite: false,
					dots: false,
					arrows: false,
				},
			},
		],
	});

	$(".sec7__slider").slick({
		//   for arabic countries
		// rtl: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		dots: true,
		prevArrow: '<button class="slider__prev"></button>',
		nextArrow: '<button class="slider__next"></button>',
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					infinite: false,
					dots: false,
					arrows: false,
					draggable: false,
				},
			},
		],
	});

	$(".sec9__slider").slick({
		//   for arabic countries
		// rtl: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		dots: true,
		prevArrow: '<button class="slider__prev"></button>',
		nextArrow: '<button class="slider__next"></button>',
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 4,
					infinite: false,
					dots: false,
					arrows: false,
					draggable: false,
				},
			},
		],
	});

	$(".sec10__slider").slick({
		//   for arabic countries
		// rtl: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		dots: true,
		prevArrow: '<button class="slider__prev"></button>',
		nextArrow: '<button class="slider__next"></button>',
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					infinite: false,
					dots: false,
					arrows: false,
					draggable: false,
				},
			},
		],
	});

	$(".pre_toform").click(function () {
		var scroll_block = $("#order_form").offset().top;
		$("html,body").animate(
			{
				scrollTop: scroll_block,
			},
			1200
		);
		return false;
	});

	var el = $(".sec4");

	$(window).scroll(function () {
		if ($(this).scrollTop() > el.offset().top - 200) {
			new WOW().init();
		}
	});
});

function init() {
	// $(".sec4__item").recalculateHeight();
	$(".sec7__item").recalculateHeight();
	$(".sec11__item").recalculateHeight();
}

$(window).resize(function () {
	if ($(window).width() > 1023) {
		$(".sec7__item").recalculateHeight();
	}
	// $(".sec4__item").recalculateHeight(1023);
});

window.addEventListener("load", function () {
	init();
});
