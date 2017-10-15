$(function () {
    $('header').load('header.html', function () {
        var index=$('.nav>li').index();
        $('.nav>li:eq(index)').find('i').addClass('cur').parent().siblings().find('i').removeClass('cur');

    });
    $('footer').load('footer.html');
    $('.wonderful_tab  li').each(function (i) {
        $(this).click(function () {
            $(this).addClass('wonderful_cur').siblings().removeClass('wonderful_cur');
            $('.wonderful_box div').eq(i).show().siblings().hide()
        })
    })
    var ipt_search=$('.search_input input');
    ipt_search.click(function () {
        $(this).addClass('checked')
    })
})
