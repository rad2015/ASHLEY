$(function () {

    // logo click : scroll top
    $(" .logo, .btn_top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    });

    // scroll action
    $(window).scroll(function () {
        // header
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 500) $('header').addClass('scroll');
        else $('header').removeClass('scroll');

        // btn_top
        if ($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });


    // toggle BTN
    $(".rightmenu li").click(function () {
        $(".m_menu").show(); /* 보기 */
        $(".rightmenu").hide(); /* 가리기 */
        $(".m_menu li").eq(5).show(); /* X버튼 */
    });
    // X click : closed
    $(".m_menu li").eq(5).click(function () {
        $(".m_menu").hide();
        $(this).hide();
        $(".rightmenu").show();
    });


    // 한줄공지 : 상하슬라이드
    var x = 0;
    setInterval(function () {
        if (x < 2) {
            x++;
        } else {
            x = 0;
        }
        var sp = x * (-50) + "px";
        $(".list").animate({
            top: sp
        }, 500);
        console.log(x)
    }, 3000);



    // season menu : 가로 확장 슬라이드
    var options = $(".Best_list .option");
    var prevButton = $(".btn_L");
    var nextButton = $(".btn_R");
    var currentIndex = 0;

    options.on("click", function () {
        var option = $(this);

        if (option.hasClass("active")) {
            option.removeClass("active");
        } else {
            options.removeClass("active");
            option.addClass("active");
        }
    });



    // main slide
    prevButton.on("click", function () {
        if (currentIndex > 0) {
            options.eq(currentIndex).removeClass("active");
            currentIndex--;
            options.eq(currentIndex).addClass("active");
        }
    });

    nextButton.on("click", function () {
        if (currentIndex < options.length - 1) {
            options.eq(currentIndex).removeClass("active");
            currentIndex++;
            options.eq(currentIndex).addClass("active");
        }
    });

});