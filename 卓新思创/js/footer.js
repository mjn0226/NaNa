$(function () {

    $('.music>li').hover(function () {
        var i=$(this).index();
        //console.log(i)
       $('<audio class="changeAudio" src="music/sound0'+i+'.mp3">').appendTo('body')
      $(this).click(function(){
           $('.changeAudio')[0].play(); //播放声音
          //console.log( $('.changeAudio'))
          //console.log( $('.changeAudio')[0])
       })
 },function () {
       $('.changeAudio').remove()
    })

    // var backTop = $('.fade_up')
    // backTop.click(
    //     function () {
    //         $('html,body').animate({scrollTop: 0}, 500);
    //     })
    $(window).scroll(function () {
        var scrollTop=$(window).scrollTop();
        if (scrollTop<500){
            $('.footImg_wrap').hide(0)
        }else {
            $('.footImg_wrap').fadeIn()
        }
    })
    $('.fade_up').click(function () {
        $('html,body').animate({
            'scrollTop':'0'
        },500)
        $('.footImg_wrap').animate({
         'bottom':'1100px',

            'opacity':0
        },1000,function () {
            $(this).css({
                'bottom':'160px',
            }).hide(0).css({
                'opacity':1
            })

        })
    })


})