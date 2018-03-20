$(function(){
  var swiper1 = new Swiper ('.swiper1', {
    pagination : {
      el: '.swiper-pagination',
      clickable:true,
      renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    autoplay:{
      delay: 3500,
      disableOnInteraction:false,
    },
    loop: true,
  })

  var swiper2 = new Swiper ('.swiper2', {
    autoplay:{
      delay: 3500,
      disableOnInteraction:false,
    },
    loop: true,
  })

  swiper2.on('slideChange', function(){
    var index=swiper2.realIndex;
    if(index==0){
      $('#tour_pakage > span b').text('1');
    }else{
      $('#tour_pakage > span b').text('2');
    }
  })

  $('.lnb-nav .wrap > ul > li').on('mouseenter', function(){
    $('header').addClass('on');
    $(this).find('div').show();
  }).on('mouseleave', function(){
    $('header').removeClass('on');
    $(this).find('div').hide();
  })

  $('#book_find .tab ul li').on('click', function(e){
    e.preventDefault();
    var tabV=$(this).find('a').attr('href');
    $('#book_find .tab ul li').removeClass('active');
    $(this).addClass('active');

    $('.tab_contents > div').css('display','none');
    $('.tab_contents').find(tabV).css('display','block');
  })

  $('.departure').on('click', function(){
    $('body').append('<div class="bg"></div>');
    $('#departure').show();
    $('#departure li a').on('click', function(e){
      e.preventDefault();
      $('#departure li a').removeClass('onClick');
      $(this).addClass('onClick');
      var Dvalue=$('#departure .onClick').text();
      $('#departure .submit').on('click', function(){
        $('#departure').hide();
        $('.bg').remove();
        $('.departure').prev().find('input').val(Dvalue);
      })
    })
  })

  $('.arrival').on('click', function(){
    $('body').append('<div class="bg"></div>');
    $('#arrival').show();
    $('#arrival li a').on('click', function(e){
      e.preventDefault();
      $('#arrival li a').removeClass('onClick');
      $(this).addClass('onClick');
      var Dvalue=$('#arrival .onClick').text();
      $('#arrival .submit').on('click', function(){
        $('#arrival').hide();
        $('.bg').remove();
        $('.arrival').prev().find('input').val(Dvalue);
      })
    })
  })

  $('.close').on('click', function(){
    $('.lightBox').hide();
    $('.bg').remove();
  })

})
