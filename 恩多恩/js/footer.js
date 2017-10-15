$(function () {
    $(window).scroll(function () {
            var scrollTop=$(window).scrollTop();
            if (scrollTop<500){
                $('.scroll_top').hide(0)
            }else {
                $('.scroll_top').fadeIn(300)
            }
        })
        $('.scroll_top').click(function () {
            $('html,body').animate({
                'scrollTop':'0'
            },500)
            $('.scroll_top').animate({
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
