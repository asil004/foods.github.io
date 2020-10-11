$(function() {
    $(window).on('load scroll', function() {
        $('.animation').each(function() {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var height = $(window).height();
            if (scroll > target - height) {
                $(this).addClass('active');
            }
        });
    });
});
$(function() {
    $(window).on('load scroll', function() {
        $('.animation_2').each(function() {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var height = $(window).height();
            if (scroll > target - height) {
                $(this).addClass('active_2');
            }
        });
    });
    $(window).on('load scroll', function() {
        $('.animation_3').each(function() {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var height = $(window).height();
            if (scroll > target - height) {
                $(this).addClass('active_3');
            }
        });
    });
});