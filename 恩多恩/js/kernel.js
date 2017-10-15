$(function () {
    $('header').load('header.html', function () {
        var index=$('.nav>li').index();
        $('.nav>li:eq(index)').find('i').addClass('cur').parent().siblings().find('i').removeClass('cur');

    });
    $('footer').load('footer.html');
})
