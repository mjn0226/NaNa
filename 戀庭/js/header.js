$(function () {
    var navList = $('.nav_list>li');
    navList.hover(function () {
        $(this).addClass('active').siblings().removeClass('active')
    }, function () {
        $(this).removeClass();
        navList.eq(0).addClass('active')
    })

})
