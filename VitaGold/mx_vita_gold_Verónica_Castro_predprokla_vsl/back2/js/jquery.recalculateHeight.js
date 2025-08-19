(function ($) {
    $.fn.recalculateHeight = function (media = 992) {
        let maxHeight = 0;
        if ($(window).width() < media) {
            $(this).css("height", "auto");
            return;
        }

        $(this).each(function (i, el) {
            let currentHeight = $(el).innerHeight();
            maxHeight = maxHeight > currentHeight ? maxHeight : currentHeight;
        });

        $(this).css("height", maxHeight);
    };
})(jQuery);