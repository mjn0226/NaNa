$(function () {
    $('header').load('header.html');
    $('footer').load('footer.html');
    $('.form_box input').click(function () {
        $(this).addClass('checkedInput').parent()
            .siblings().find('input').removeClass('checkedInput');
    });
})
