$(function () {
   $('.footer_right img').hover(function () {
       var i=$(this).index();
       switch(i) {
           case 0:$(this).attr('src','images/weixin1.png');
           break;
           case 1:$(this).attr('src','images/qq1.png');
               break;
           default:$(this).attr('src','images/weibo1.png');
       }
   },function () {
       var i=$(this).index();
       switch(i) {
           case 0:$(this).attr('src','images/weixin.png');
               break;
           case 1:$(this).attr('src','images/qq.png');
               break;
           default:$(this).attr('src','images/weibo.png');
       }
   })
    $(window).scroll(function () {
        var scrollTop=$(window).scrollTop();
        if (scrollTop<500){
            $('.fade_up').hide(0)
        }else {
            $('.fade_up').fadeIn(300)
        }
    })
    $('.fade_up').click(function () {
        $('html,body').animate({
            'scrollTop':'0'
        },500)
        $('.fade_up').animate({
            'bottom':'1100px',

            'opacity':0
        },1000,function () {
            $(this).css({
                'bottom':'160px',
            }).hide(0).css({
                'opacity':1
            })

        })
    })
})
