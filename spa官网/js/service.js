$(function () {
    $('header').load('header.html');
    $('footer').load('footer.html');
//蒙版效果

    $('.main_top .col-lg-4').hover(function () {
        $(this).find('.mask').fadeIn(200)
    },function () {
        $(this).find('.mask').fadeOut(200)
    })
    $('.mask').css({
        width : $('.main_top_img img').width(),
        height : $('.main_top_img img').height(),
    })
    $(window).resize(function () {
        $('.mask').css({
            width : $('.main_top_img>img').width(),
            height : $('.main_top_img>img').height(),
        })
    })
// 轮播效果：显示与隐藏
    var icons=$('.icons>li');
    var bannerText=$('.main_middle_text');
    icons.click(function () {
        var i= $(this).index();
        icons.eq(i).addClass('now').siblings().removeClass('now');
        bannerText.eq(i).fadeIn(200).siblings().hide();
    })

})
