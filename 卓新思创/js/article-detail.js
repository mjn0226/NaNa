$(function () {
    $('header').load('header.html', function () {
        var pointIndex = 3;
        if (getUrlParams('sysId') && !getUrlParams('type')) {
            pointIndex = 2;
        } else if (getUrlParams('type')) {
            if (getUrlParams('type') == 'companyIdea' || getUrlParams('type') == 'companyCulture' || getUrlParams('type') == 'companyEnvironment') {
                pointIndex = 3;
            } else if (getUrlParams('type') == 'talents' || getUrlParams('type') == 'team' || getUrlParams('type') == 'joinUs') {
                pointIndex=4;
            } else if (getUrlParams('type') == 'telUs') {
                pointIndex=5;
            }
        }
        $('header .nav>li ').eq(pointIndex).addClass('now').siblings().removeClass('now');
    });
    $('footer').load('footer.html');
    //毛笔
    var pen = $('.article_title i');
    var line = $('.article_title');
    pen.click(function () {
        line.animate({
            "width": "240px"
        }, 0, function () {
            line.animate({
                "width": "780px"
            }, 5000)
        })
    })
    var showTextArr = ["娘娘威武", "再点一下试试", "皇帝万岁，万万岁", "爱你哦~"];
    var tag = true;

    function showMove() {
        $('.word_hide').animate({
            "opacity": "1"
        }, 600, "easeInStrong").delay(1000).animate({
            "opacity": "0"
        }, 600, "easeOutStrong");
        $('.text_show').animate({
            "opacity": "1"
        }, 600, "easeInStrong").delay(1000).animate({
            "opacity": "0"
        }, 600, "easeOutStrong");
    }

    $('.click_show').click(function () {
        if (tag) {
            var showText = showTextArr[Math.floor(Math.random() * showTextArr.length)];
            $('.text_show').html(showText);
            tag = false;
            // $(this).css('backgroundPositionY','-73px');
            $(this).toggleClass("new_show")
            showMove()
        } else if (!tag && $('.text_show').html() == "再点一下试试") {
            $('.text_show').html("让你点你就点，你真是……");
            showMove()
        }
    })
    //获取页面url传过来的参数
    function getUrlParams(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return r[2];
        else
            return "";
    }

    var article;
    if (getUrlParams('sysId') && !getUrlParams('type')) {
        article = articleData['xiaoniaoNews' + getUrlParams('sysId')].data;
    } else if (getUrlParams('type')) {
        article = articleData[getUrlParams('type')].data;
    }

    $('.typeTitle').html(article.typeTitle);
    $('.typeEntitle').html(article.typeEntitle);
    $('.article_title>h2').html(article.title);
    $('.article_date').html(article.updateAt.substr(0, 10));
    $('.article_user').html(article.updateByFullName);
    $('.coverImg').attr('src', article.coverImg);
    $('.article_content').html(article.content);

    /*    if($(document).load()){

     }else{
     window.location.history.go(-1);
     }*/

})