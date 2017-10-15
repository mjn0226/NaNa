$(function () {
   $('.nav_item').click(function () {
       $(this).addClass('active').siblings().removeClass('active')
   })
    var hash=window.location.hash.substr(1);
   if(hash){
       $('.nav_item').eq(hash).addClass('active').siblings().removeClass('active')
   }
   var isShow=true;
   $('.menu').click(function () {
       if(isShow){
           $('ul.nav_list').slideDown()
       }else {
           $("ul.nav_list").slideUp(300)
       }
       isShow = !isShow
   })
})
