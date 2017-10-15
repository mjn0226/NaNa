$(function () {
    $('header').load('header.html');
    $('footer').load('footer.html');
 /*   $(document).ready(function() {
        $.fn.fullpage({
            'verticalCentered': false,
            'anchors': ['page1', 'page2', 'page3', 'page4'],
            'css3': true,
            'navigation': true,
            'navigationPosition': 'right',
            'navigationTooltips': ['广告', '产品', '品牌介绍', '联系']
        })
    });*/
    $('#fullPage').fullpage({
        'verticalCentered': false,
        'anchors': ['page1', 'page2', 'page3', 'page4'],
        'css3': true,
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['广告', '产品', '品牌介绍', '联系']
    })

})
