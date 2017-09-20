//@ sourceURL=header.js
$(function () {
    $('.nav>li').hover(
        function () {
            var index=$(this).index();
            $(this).addClass('now').siblings().removeClass('now');
            $(this).find('ul').stop(false,true).slideDown(600,'elasticOut')
        },function () {
            $(this).find('ul').stop(false,true).slideUp()
        }
    )
})