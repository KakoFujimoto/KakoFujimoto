'use strict';
$(function () {

    $('head').append(
        '<style type="text/css">.body-fade-in{display:none;}</style>'
    );

    $(window).on("load", function () {
        $('body').fadeIn(300).removeClass("body-fade-in");
    });

    $('a.animation_link').on("click", function () {
        var url = $(this).attr('href');
        if (url != '')
            $('body').fadeOut(300);
        setTimeout(function () {
            location.href = url;
        }, 300);

        return false;
    });

    // $('figcaption').css('visibility', 'hidden');
    // $('.furniture-img').hover(function () {
    //     $(this).css('visibility', 'visible');
    // });

    $('.furniture-img').mouseover(
        function () {
            $('.description-of-couch').css({
                'color': '#fff',
                'position': 'absolute',
                'bottom': '-100%',
                'z-index': '2',
                'width': '100%',
                'height': '100%',
                'background': 'rgba(0,0,0,.6)',
                '-webkit-transition': '.3s',
                'transition': '.3s',
                'opacity': '1',
                'bottom': '0',
                'left': '0'
            }).mouseout(function () {
                $('.description-of-couch').css({
                    'color': '',
                    'position': '',
                    'bottom': '',
                    'z-index': '',
                    'width': '',
                    'height': '',
                    'background': '',
                    '-webkit-transition': '',
                    'transition': '',
                    'opacity': '',
                    'bottom': '',
                    'left': ''
                })
            });
        })
})
