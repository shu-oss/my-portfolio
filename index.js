$(function(){

    // header-menu表示
    $(function(){
        $('.header-menu-bar').hide();
        $(window).scroll(function (){
            var position = $('.about').offset().top;
            if ($(this).scrollTop() > position){
                $('.header-menu-bar').fadeIn(1000);
            } else {
                $('.header-menu-bar').fadeOut(1000);
            }
        });
    })


    // scrollしてフワッと表示
     $(function(){
         $(window).scroll(function (){
             $('.hide').each(function(){
                 var elemPos = $(this).offset().top;
                 var scroll = $(window).scrollTop();
                 var windowHeight = $(window).height();
                 if (scroll > elemPos - windowHeight + 200){
                     $(this).addClass('show');
                }
             });
         });
     })
     $(function(){
        $(window).scroll(function (){
            $('.hide--2').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 200){
                    $(this).addClass('show');
               }
            });
        });
    })
    $(function(){
        $(window).scroll(function (){
            $('.hide--3').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 200){
                    $(this).addClass('show');
               }
            });
        });
    })
    $(function(){
        $(window).scroll(function (){
            $('.hide--4').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 300){
                    $(this).addClass('show');
               }
            });
        });
    })
    $(function(){
        $(window).scroll(function (){
            $('.hide--5').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 300){
                    $(this).addClass('show');
               }
            });
        });
    })
    $(function(){
        $(window).scroll(function (){
            $('.hide-long').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 200){
                    $(this).addClass('show-long');
               }
            });
        });
    })


    // ローディングアニメーション
    $('.header-name, .header-mail, .header-menu, .header-img').hide();
     $(window).on('load',function() {
         $('.load').delay(1000).fadeOut(500);
         $('.header-name, .header-mail, .header-menu, .header-img').delay(1500).fadeIn(2000);
         $('.header-title').delay(2000).addClass('fade-title');
         $('.header-title-text').delay(2000).addClass('fade-title--2');
         $('.header-triangle--1').delay(2000).addClass('fade-triangle--1');
         $('.header-triangle--2').delay(2000).addClass('fade-triangle--2');
         $('.header-triangle--3').delay(2000).addClass('fade-triangle--3');
     });


// ページ内スクロールバー
$('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


// menuページ
$('.header-menu-icon, .fa-bars').click(
    function(){
        $('.menu').fadeIn();
    });

$('.menu-close, .menu-a').click(
    function(){
        $('.menu').fadeOut();
    });


// work hoverアクション
$('.work-con--1').hover(
    function(){
        $('.work-hover--1').fadeIn();
    },
    function(){
        $('.work-hover--1').fadeOut();
});

$('.work-con--2').hover(
    function(){
        $('.work-hover--2').fadeIn();
    },
    function(){
        $('.work-hover--2').fadeOut();
});

$('.work-con--3').hover(
    function(){
        $('.work-hover--3').fadeIn();
    },
    function(){
        $('.work-hover--3').fadeOut();
});

});
