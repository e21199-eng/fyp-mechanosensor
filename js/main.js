// FYP Portfolio - main.js

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Back to Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
        return false;
    });

    // WOW animation
    new WOW().init();

    // Animate progress bars on scroll
    $(window).scroll(function () {
        $('.progress-bar').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                var target = $(this).data('target') || $(this).attr('aria-valuenow') + '%';
                $(this).css('width', target);
            }
        });
    });

    // Active nav link on scroll
    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop() + 100;
        $('nav a.nav-link').each(function () {
            var section = $(this).attr('href');
            if (section && section.startsWith('#') && $(section).length) {
                var top = $(section).offset().top;
                var bottom = top + $(section).outerHeight();
                if (scrollPos >= top && scrollPos <= bottom) {
                    $('nav a.nav-link').removeClass('active');
                    $(this).addClass('active');
                }
            }
        });
    });

    // Weekly Update Tab Filter
    $(document).on('click', '.filter-btn', function () {
        $('.filter-btn').removeClass('active btn-primary').addClass('btn-outline-primary');
        $(this).removeClass('btn-outline-primary').addClass('active btn-primary');
        var filter = $(this).data('filter');
        if (filter === 'all') {
            $('.update-card-wrapper').show(300);
        } else {
            $('.update-card-wrapper').hide(200);
            $('.update-card-wrapper[data-status="' + filter + '"]').show(300);
        }
    });

})(jQuery);
