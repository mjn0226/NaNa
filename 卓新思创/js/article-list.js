$(function () {
    $('header').load('header.html',function () {
        $('header .nav>li:eq(2) ').addClass('now').siblings().removeClass('now');
    });
    $('footer').load('footer.html');
    //毛笔
    var pen = $('.article_title i');
    var line=$('.article_title');
     pen.click(function () {
         line.animate({
             "width":"120px"
         },0,function () {
             line.animate({
                 "width":"1049px"
             },5000)
         })
     })
    var changeImg=$('.more_img');
    var reqCount=0;
   function listAnimate() {
       var data=listData['listData0'+reqCount].data;
       var list=data.list;
       if(list.length<data.pageSize){
           $('.img').toggleClass('newImg');
           changeImg.hide()
       }
       var listHtml='';
       for(var i=0;i<list.length;i++){
           listHtml+='<dl sysId="'+list[i].sysId+'">' +
               '<dt><img src="'+list[i].coverImg+'"></dt>' +
               '<dd>'+
               '<h4>'+list[i].title+'</h4>' +
               '<span>'+list[i].creatAt+'</span>' +
               '<p>'+list[i].describe+'</p>' +
               '</dd>' +
               ' <img src="images/list_img_over_xiaojiantou.png">' +
               '</dl>';
       }
       $('.article_content').append(listHtml);
       reqCount++;
   }
    listAnimate();
    changeImg.click(function () {
        listAnimate()
        })
    $(document).on("click",".article_content dl",function () {
        //attr()方法 获取和设置元素属性
        var sysId=$(this).attr('sysId');
        window.location.href="article-detail.html?sysId="+sysId
    })
})