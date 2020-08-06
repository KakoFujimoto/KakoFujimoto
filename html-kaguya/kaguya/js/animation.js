'use strict';

// ページ遷移時のアニメーション
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

    //NEWS画像にフィルタをオーバーレイするアニメーション
    $('.furniture-img').mouseover(
        function () {
            $(this).find('figcaption').addClass('animation');
        }).mouseout(
            function () {
                $(this).find('figcaption').removeClass('animation');
            }
        );
    $(function () {
        $('.navToggle').click(function () {
            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {
                $('.globalMenuSp').addClass('active');
            } else {
                $('.globalMenuSp').removeClass('active');
            }
        });
    });

    //SENDボタンを押したら文言が変更される
    $(function () {
        $('.btn').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('active');
        });
    });
})


