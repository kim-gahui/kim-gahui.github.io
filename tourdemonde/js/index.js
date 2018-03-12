$(function(){
  $('a').on('click', function(e){
    e.preventDefault();
  })
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    loop: true,
    autoplay:{
      delay:3500,
      disableOnInteraction:false,
    },
  })

  var i=0;
  var length=$('.photo-slide li').length;
  $('.slide .prev').on('click', function(){
    i--;
    if(i<0){i=length-5};
    $('.photo-slide').animate({'left':-(i*200)},800)
  })
  $('.slide .next').on('click', function(){
    i++;
    if(i>length-5){i=0};
    $('.photo-slide').animate({'left':-(i*200)},800)
  })

  $(window).scroll(function(){
    var asideHeight=$('aside').height();
    var festivalHeight=$('.festival').height();
    var footerHeight=$('footer').height();
    var winTop=$(window).scrollTop();
    var line=$('body').height()-(asideHeight+festivalHeight+footerHeight);

    if(winTop>=(line-250)){
      //console.log('위치');
      $('aside').css({
        position:'absolute',
        bottom:850,
        top:'initial'
      });
    }else{
      $('aside').css({
        position:'fixed',
        bottom:'initial',
        top:160
      });
    }
  })
})
