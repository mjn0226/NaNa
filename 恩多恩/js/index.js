$(function () {
    var winWidth = $(window).width();
    var winHeight = $(window).height() - 60;
    $(".public_wrap").height(winHeight);
    //重置大小
    $(window).resize(function () {
        winWidth = $(window).width();
        $('.banner_list>li').css(
            'width', winWidth + 'px'
        );
        bannerImageMove()
    })
    //引入header,footer
    $('header').load('header.html');
    $('footer').load('footer.html');
    //轮播
    var bannerPrev = $('.banner_prev');
    var bannerNext = $('.banner_next');
    var animateFather = $('.banner_list>li');
    var arrow_box = $('.arrow>div');
    var bannerIndex = 0;

    function bannerImageMove() {
        animateFather.find('img').show().addClass('animated fadeIn');
    }

    function bannerAnimate() {
        animateFather = $('.banner_list>li').eq(bannerIndex);
        animateFather.fadeIn(200).siblings('.banner_list>li').hide();
        bannerImageMove()
    }

    var remove = setInterval(function () {
        if (bannerIndex <= 0) {
            bannerIndex++;
        } else if (bannerIndex = 1) {
            bannerIndex = 0;
        }

        bannerAnimate();
        bannerImageMove();
    }, 3000)
    arrow_box.hover(
        function () {
            clearInterval(remove);
        }, function () {
            remove = setInterval(function () {
                if (bannerIndex <= 0) {
                    bannerIndex++;
                } else if (bannerIndex = 1) {
                    bannerIndex = 0;
                }

                bannerAnimate();
                bannerImageMove();
            }, 3000)
        }
    )
    bannerPrev.click(function () {
        bannerIndex--;
        bannerIndex == -1 ? bannerIndex = 1 : bannerIndex = bannerIndex;
        bannerAnimate()
    })

    bannerNext.click(function () {
        bannerIndex++;
        bannerIndex == 2 ? bannerIndex = 0 : bannerIndex = bannerIndex;
        bannerAnimate()
    })
//transform轮播
    var activityBox = document.getElementsByClassName("outer_wrap")[0];
    var move_wrap = document.getElementsByClassName("move_wrap")[0];
    move_wrap.innerHTML = move_wrap.innerHTML + move_wrap.innerHTML;
    var t = null;
    var t1 = null;
    var t2 = null;
    var t3 = null;
    var speed =1;
    var activity_prev = document.getElementsByClassName("activity_prev")[0];
    var activity_next = document.getElementsByClassName("activity_next")[0];
    time();

    function time() {
        t = setInterval(Lmove, 10);
    }

    function Lmove() {
        activityBox.scrollLeft += speed;
        if (activityBox.scrollLeft == activityBox.clientWidth) {
            activityBox.scrollLeft = 0;
        }
        else {
            activityBox.scrollLeft += speed;
        }
        if (activityBox.scrollLeft % 300 == 0) {
            clearInterval(t);
            t1 = setTimeout(time, 1000);
        }
    }

    function time2() {
        t2 = setInterval(Rmove, 10);
    }

    function Rmove() {
        activityBox.scrollLeft -= speed;
        if (activityBox.scrollLeft == 0) {
            activityBox.scrollLeft = activityBox.clientWidth;
        }
        else {
            activityBox.scrollLeft -= speed;
        }
        if (activityBox.scrollLeft %300 == 0) {
            clearInterval(t2);
            t3 = setTimeout(time2, 1000);
        }
    }
//    顺序的改变从而改变移动的图片个数
    activity_prev.onclick = function () {
        if (t) {
            clearInterval(t2);
            clearTimeout(t3);
        }
        time();
        clearInterval(t);
        clearTimeout(t1);
    }

   activity_next.onclick = function () {
        if (t2) {
            clearInterval(t2);
            clearTimeout(t3);
        }
        time2();
        clearInterval(t);
        clearTimeout(t1);
    }


//    各模块的效果
    // 心灵家园
    $('.home_main dl').each(function () {
        var newTop=parseInt($(this).css('marginTop'));
        $(this).css({
            'marginTop':newTop+300,
            'opacity':'0'
        })
    });
    function home(){
        $('.home_main dl').each(function(i,n){
            $('.home_main dl').eq(i).animate({
                'marginTop':'0',
                'opacity':'1'
            },1000);
        })
    }
    function headspan(num){
        $('.home_title>h3').each(function(){
            $('.head>span').eq(num).animate({
                'marginTop':'10',
                'opacity':'1'
            },1000);
        })
    }
    function headp(num){
        $('.home_title>p').each(function(){
            $('.head>p').eq(num).animate({
                'marginTop':'18',
                'opacity':'1'
            },1000);
        })
    }

    // 活动课程
    $('.tab_title li').each(function () {
        var newTop=parseInt($(this).css('marginTop'));
        $(this).css({
            'marginTop':newTop+300,
            'opacity':'0'
        })
    });
    function activity(){
        $('.tab_title li').each(function(i,n){
            $('.tab_title li').eq(i).animate({
                'marginTop':'0',
                'opacity':'1'
            },1000);
        })
    }
    //公司简介
    /*$('.company').each(function () {
        var newTop=parseInt($(this).css('marginTop'));
        $(this).css({
            'marginTop':newTop+300,
            'opacity':'0'
        })
    });
    function company(){
        $('.company *').each(function(i,n){
            $('.home_main dl').eq(i).animate({
                'marginTop':'0',
                'opacity':'1'
            },1000);
        })
    }*/
    // 精彩回顾 左边
    $('.li_left').each(function () {
        var marginLeft=parseInt($(this).css('marginLeft'));
        $(this).css({
            'marginLeft':marginLeft+800,
            'opacity':'0'
        })
    });
    function left(){
        $('.li_left').each(function(i,n){
            $('.li_left').eq(i).animate({
                'marginLeft':0,
                'opacity':'1'
            },1000);
        })
    }


    // 精彩回顾 右边
    $('.li_right').each(function () {
        var marginRight=parseInt($(this).css('marginRight'));
        var marginTop=parseInt($(this).css('marginTop'));
        $(this).css({
            'marginRight':marginRight+800,
            'marginTop':marginTop-110,
            'opacity':'0'
        })
    });
    function right(){
        $('.li_right').each(function(i,n){
            $('.li_right').eq(i).animate({
                'marginRight':0,
                'marginTop':0,
                'opacity':'1'
            },1000);
        })
    }

    $('.wonderful_bottom').each(function () {
        var newTop=parseInt($(this).css('marginTop'));
        $(this).css({
            'marginTop':newTop+300,
            'opacity':'0'
        })
    });
    function news(){
        $('.wonderful_bottom').each(function(i,n){
            $('.wonderful_bottom').eq(i).animate({
                'marginTop':'0',
                'opacity':'1'
            },1000);
        })
    }

    // 慢慢出现的效果
    $(window).scroll(function () {
        var  top = $(window).scrollTop();
        if(top>=200){
            headspan(0);
            headp(0);
        }
        if(top>=300){
            home();
        }
        if(top>=700){
            headspan(1);
            headp(1);
        }
        if(top>=800){
            activity();
        }
        if(top>=1400){
            headspan(2);
            headp(2);
        }
        if(top>=3000){
            left();
            right();
            news();
        }

    })

})
