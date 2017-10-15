$(function () {
    $('header').load('header.html');
    $('footer').load('footer.html');
    var ipt_search=$('.search_input input');
    ipt_search.click(function () {
        $(this).addClass('checked')
    })
})

