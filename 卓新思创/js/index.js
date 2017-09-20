$(function () {
    //引入头部文件
    $('header').load('header.html');
    //引入底部文件
    $('footer').load('footer.html');
    //轮播
    var next = $('.banner_switch .next');
    var prev = $('.banner_switch .prev');
    var points = $('.points_wrap span');
    var animateFather = $('.banner_01');
    var bannerIndex = 0;
    function bannerImageMove() {
        animateFather.find('.banner_img01').show().addClass('animated fadeInLeft');
        setTimeout(function () {
            animateFather.find('.banner_img02').show().addClass('animated bounceInRight');
            animateFather.find('.banner_img03').show().addClass('animated fadeIn')
        }, 300)
    }

    bannerImageMove();
    function bannerAnimate() {
        animateFather = $('.banner_one').eq(bannerIndex);
        animateFather.fadeIn(200).siblings('.banner_one').fadeOut(200);
        points.eq(bannerIndex).addClass('now').siblings().removeClass('now');
        bannerImageMove()
    }

    prev.click(function () {
        bannerIndex--;
        bannerIndex == -1 ? bannerIndex = 2 : bannerIndex = bannerIndex;
        bannerAnimate()
    })

    next.click(function () {
        bannerIndex++;
        bannerIndex == 3 ? bannerIndex = 0 : bannerIndex = bannerIndex;
        bannerAnimate()
    })
    points.click(function () {
        var index = $(this).index();
        bannerIndex = index;
        bannerAnimate()
    })
    //公司简介
    var company = $('.description_content');
    var companyImg = $('.company_left img');
    var arrowPrev = $('.arrow_prev');
    var arrowNext = $('.arrow_next');
    var companyIndex = 0;
    var pointsTab = $('.points_tab li');

    function companyAnimate() {
        company.eq(companyIndex).fadeIn(200).siblings().hide();
        companyImg.eq(companyIndex).fadeIn(200).addClass('animated bounceIn').siblings().hide();
        pointsTab.eq(companyIndex).addClass('cur').siblings().removeClass('cur');
    }

    arrowPrev.click(function () {
        companyIndex--;
        companyIndex == -1 ? companyIndex = 5 : companyIndex = companyIndex;
        companyAnimate()
    })
    arrowNext.click(function () {
        companyIndex++;
        if (companyIndex == 6) {
            companyIndex = 0;
        }
        companyAnimate()
    })
    pointsTab.click(function () {
        var index = $(this).index();
        companyIndex = index;
        companyAnimate()
    })
    //业务范围
    $(".work_business li>.business_img02").click(function () {
        $(this).addClass("now")
            .next().slideToggle()
    });
//团队介绍
    var teamNext = $('.group_change .next');
    var teamPrev = $('.group_change .prev');
    var teamPoints = $('.group_change .points_wrap span');
    var teamImg=$('.head_img');
    var teamIndex=1;
    function teamMove(moveType) {
        $('.team_content').animate({
            "margin-left": (-1100 * teamIndex) + "px"
        }, 1000,moveType, function () {
            if (teamIndex == 4) {
                teamIndex = 1;
                $('.team_content').css("marginLeft", "-1100px")
            }

            teamPoints.eq(teamIndex - 1).addClass('now').siblings().removeClass('now');
            if (teamIndex == 0) {
                teamIndex = 3;
                $('.team_content').css("marginLeft", "-3300px")
            }

        })}
    teamNext.click(function () {
        teamIndex++;
        teamMove('backIn')
    })

    teamPrev.click(function () {
        teamIndex--;
        teamMove('backOut')
    })
    teamPoints.click(function () {
        var index=$(this).index();
        var moveType='backIn';
        if(teamIndex>(index+1)){
            moveType='backOut';
        }
        teamIndex=index+1;
        teamMove(moveType)
    })
    teamImg.hover(function () {
        $(this).find('p').fadeIn(200)
    },function () {
        $(this).find('p').fadeOut(200)
    })
    //合作机构
   var partnerImg=$('.partners>li img');
   partnerImg.hover(function () {
        $(this).addClass('animated pulse')
    },function () {
        $(this).removeClass()
    })
})
