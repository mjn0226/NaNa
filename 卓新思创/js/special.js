$(function () {
    //整屏滚动
    var winHeight = $(window).height() - 50;
    $(".wrap,.public_wrap").height(winHeight);
    $(window).resize(function () {
        winHeight=$(window).height()-50;
        $('.public_wrap,.content_wrap,.wrap').height(winHeight);
        winWidth=$(window).width();
        $('.welcome_page').height($(window).height());
        $('.public_wrap').css('width',winWidth);
        $('.banner').css('width',winWidth*3);
        $('.banner>li').width(winWidth);
        $('.service_wrap').css('width',winWidth*2);
        $('.service_wrap>div').width(winWidth);
        $('.service_wrap>div').height(winHeight);
        scrollMove()
    })
    var content= $('.content_wrap');
    if (document.addEventListener) {//firefox
        document.addEventListener("DOMMouseScroll", scrollFun)
    }
    window.onmousewheel = document.onmousewheel = scrollFun; //ie opera  chrome
    function scrollFun(e) {
        e = e || window.event;
        if (e.detail) {
            if (e.detail < 0) {
                scrollUp()
            } else if (e.detail > 0) {
                scrollDown();
            }
        } else if (e.wheelDelta) {
            if (e.wheelDelta > 0) {
                scrollUp();
            } else if (e.wheelDelta < 0) {
                scrollDown();
            }
        }
    }

    function scrollMove() {
        var mainIndex=scrollIndex-1;
        if(mainIndex<0){
            mainIndex=0;
        }
        $('.nav>li').eq(mainIndex).addClass('cur').siblings().removeClass('cur');
        // (mainIndex == 3 ||mainIndex==4)可设可不设
        if (mainIndex == 3 ) {
            // $('.nav>li').eq(3).addClass('cur'); 可设可不设
            $('.nav>li').eq(4).addClass('cur');
        }

        content.stop().animate({
            'margin-top': (-scrollIndex * winHeight) + 'px'
        }, 500, function () {
            scrollTag = true;
        })
    }

    function scrollUp() {
        if (scrollTag) {
            scrollTag = false;
            if (scrollIndex > 0) {
                scrollIndex--;
            } else {
                scrollIndex = 0;
            }
            scrollMove()
        }

    }

    function scrollDown() {
        if (scrollTag) {
            scrollTag = false;
            if (scrollIndex < 4) {
                scrollIndex++;
            } else {
                scrollIndex = 4;
            }
            scrollMove()
        }
    }

    $('.school_btn').click(function () {
        scrollDown()
    })
    //欢迎页效果设置
    var welcome=$('.welcome_page');
    welcome.height($(window).height());
    var scrollIndex = 0;
    var scrollTag = false;
    var hash=window.location.hash.substr(1)||'';
    if(hash){
        window.location.hash='';
        welcome.hide();
        scrollTag=true;
        scrollIndex=hash;
        scrollMove()
    }else{
        $('.welcome_page div>*').css({
            'marginTop':40+'px',
            'opacity':0
        })
        $('.welcome_page .school_img>img').animate( {
            'marginTop':0,
            'opacity':1
        },500)
        $('.welcome_page .study_text').delay(4500).animate( {
            'marginTop':0,
            'opacity':1
        },500)
        $('.welcome_page .school_text>p').delay(4500).animate( {
            'marginTop':0,
            'opacity':1
        },500)
        $('.welcome_page .school_text>span').delay(5000).animate( {
            'marginTop':0,
            'opacity':1
        },500)
        $('.welcome_page .study_text>*').delay(5500).animate( {
            'marginTop':0,
            'opacity':1
        },500)
        $('.welcome_page .describe').delay(6000).animate( {
            'marginTop':30+'px',
            'opacity':1
        },500)
        $('.welcome_page .describe>strong:first-child').delay(6000).animate( {
            'marginTop':0,
            'opacity':1
        },500)
        $('.welcome_page .describe>strong:last-child').delay(6500).animate( {
            'marginTop':0,
            'opacity':1
        },500,function () {
            welcome.delay(1000).slideUp();
            scrollTag=true;
            scrollMove()

        })
        welcome.dblclick(function () {
            welcome.delay(500).hide();
            scrollTag=true;
            scrollMove()
        })
    }



//summary轮播
    var winWidth = $(window).width();
    var summary = $('.summary');
    var banner = $('.banner');
    var bannerList = $('.banner>li')
    var i = 0;
    var bannerPrev = $(".summary .prev");
    var bannerNext = $(".summary .next");
    bannerList.css('width', winWidth + 'px');
    banner.css("width", ( winWidth * 3) + "px");
    function summaryMove() {
        banner.animate({
            'marginLeft': (-winWidth * i) + 'px',
        }, 500)
    }

    // bannerPrev.click(function () {
    //     if (i == -1) {
    //         banner.css('marginLeft', 0 + 'px')
    //     } else if (i > 0) {
    //         i--;
    //         summaryMove()
    //
    //     }
    //
    //     summaryMove()
    // })
    // bannerNext.click(function () {
    //     if (i == 3) {
    //         banner.css('marginLeft', (-winWidth * 2) + 'px')
    //     } else if (i < 2) {
    //         i++;
    //         summaryMove()
    //
    //     }
    //
    // })
    /*bannerPrev.click(function () {
     if (i > 0) {
     i--
     } else  {

     i=0
     }
     summaryMove()
     })
     bannerNext.click(function () {
     if (i < 2) {
     i++
     } else  {

     i=2
     }
     summaryMove()
     })*/
    bannerPrev.click(function () {
        i > 0 ? i-- : i = 0;
        summaryMove()
    })
    bannerNext.click(function () {
        i < 2 ? i++ : i = 2;
        summaryMove()
    })
    /*//business_value点击更换图片
     var anglesImg=$('.angle>img');
     anglesImg.click(function () {
     var angleIndex = $(this).index();
     anglesImg.eq(angleIndex).attr("src","images/aboutxiaoniao/jiazhi_border_"+(angleIndex+1)+"1.png")

     })*/
//service轮播
    var serviceWrap = $('.service_wrap');
    var serviceList = $('.service_wrap>div');
    serviceWrap.css('width', (winWidth * 2) + 'px');
    serviceList.css('width', winWidth + 'px');
    var serviceIndex = 0;
    var servicePoints = $('.service_btn>span');

    function serviceMove() {
        serviceWrap.animate({
            "marginLeft": (-winWidth * serviceIndex) + "px"
        }, 500)

    }

    servicePoints.click(function () {
        var index = $(this).index();
        serviceIndex = index;
        if (index == 0) {
            $('.service_btn>span:eq(0) i').animate({
                "width": '78px'
            }, 300, function () {
                $('.service_btn>span:eq(1) i').animate({
                    "width": '0'
                })
            })
        } else if (index == 1) {
            $('.service_btn>span:eq(1) i').animate({
                "width": '78px'
            }, 300, function () {
                $('.service_btn>span:eq(0) i').animate({
                    "width": '0'
                })
            })
        }
        serviceMove()
    })
//点击相应头部，转到相应页面
    var navLists = $('.nav>li');
    navLists.click(function () {
        var listIndex = $(this).index();
        if (listIndex == 5) {
            window.location.href = 'index.html';
        } else {
            var clickIndex = listIndex;
            if(clickIndex==4){
                clickIndex=3;
            }
            scrollIndex = clickIndex + 1;
            navLists.eq(5).addClass('cur').siblings().removeClass('cur');
            scrollMove()
        }

    })
 /*   //获取页面url传过来的参数
    function getUrlParams(name) {
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return r[2];
        else
            return "";
    }
    var pageIndex=getUrlParams('tagIndex');
    if(pageIndex){
        scrollIndex=pageIndex;
        scrollMove()
    }*/
})