$(function () {
  //  下拉菜单的显示
    var navList=$('.nav>li');
    navList.hover(function () {
        $(this).find('i').addClass('cur').parent().siblings().find('i').removeClass('cur');
        $(this).find('.arrow_down').stop(false,true).slideDown(600,'fadeIn')
    },function () {
        $(this).find('.arrow_down').stop(false,true).slideUp();
    })
  //  向下小箭头图片的更换
  var smallImg=$('.nav > li > img');
    $('.nav > li ').hover(function () {
     smallImg.attr('src','images/small_icon_03.png')
  },function () {
        smallImg.attr('src','images/arrow_down_03.png')
    })
   $('.arrow_down .now').hover(function () {
      $('.now>img').attr('src','images/img03_03.png');
   },function () {
       $('.now>img').attr('src','images/img_03.png');
   })
})
