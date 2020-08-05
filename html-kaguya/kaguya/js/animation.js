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

    $('.furniture-img').mouseover(
        function () {
            $(this).find('figcaption').addClass('animation');
        }).mouseout(
            function () {
                $(this).find('figcaption').removeClass('animation');
            }
        );

    $('form').submit(function () {
        $('.pc-submit').html('<input class="pc-submit is-submitted" type="submit" value="TRANSMISSION COMPLETED">');
    });

    // $('h2').on('click',
    //     function () {
    //         $('h2').html('<p>aaaa</p>');
    //     }
    // )
    // $('.pc-submit').mouseover(function () {
    //     $('.pc-submit').html('<p>アイウエオ</p>');
    // });

})


