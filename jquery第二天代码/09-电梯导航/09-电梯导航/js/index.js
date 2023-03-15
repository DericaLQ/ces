$(function () {
    var block1 = $(".recommend").offset().top;
    var va = true;
    function Top() {
        var do1 = $(document).scrollTop();

        if (do1 >= block1) { $(".fixedtool").fadeIn(); }

        else {
            $(".fixedtool").fadeOut();
        }

    }
    Top();
    $(window).scroll(function () {
        if (va) {
            $(".floor .w").each(
                function (i, ele) {
                    if ($(document).scrollTop() >= $(ele).offset().top) {
                        $('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
                    }
                }
            )
        }

        Top();
    })
    $('.fixedtool li').click(function () {
        va = false;
        var index = $(this).index();
        var wtop = $(".floor .w").eq(index).offset().top;
        $(this).addClass('current').siblings().removeClass('current')
        $("body,html").stop().animate({
            scrollTop: wtop

        },function () {
            va=true;
        }
        );

    })
})