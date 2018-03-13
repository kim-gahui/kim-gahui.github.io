$(function(){
  // new WOW().init();
  wow = new WOW(
    {
    // boxClass:     'wow',      // default
    // animateClass: 'animated', // default
    offset:       500,          // default
    // mobile:       true,       // default
    // live:         true        // default
  }
  )
  wow.init();

  $(window).scroll(function(){
    var home=$('#home').offset().top;
    var about=$('#about').offset().top-300;
    var portfolio=$('#portfolio').offset().top-400;
    var contact=$('#contact').offset().top-400;
    var winTop=$(window).scrollTop();

    var index;
    if(winTop>=home && winTop<about){
      index=0;
    }else if(winTop>=about && winTop<portfolio){
      index=1;
    }else if(winTop>=portfolio && winTop<contact){
      index=2;
    }else if(winTop>=contact){
      index=3;
    }
    $('nav li a').removeClass('active');
    $('nav li').eq(index).find('a').addClass('active');

    if(winTop>=home && winTop<(about+300)){
      $('.gnb-nav').css('display','none');
    }else{
      $('.gnb-nav').css('display','block');
    }

    if(winTop>=(portfolio+100) && winTop<(contact-200)){
      $('.swiper-button-next, .swiper-button-prev').fadeIn();
    }else{
      $('.swiper-button-next, .swiper-button-prev').fadeOut();
    }
  }).scroll();

  $('.btn-toggle').on('click', function(){
    $('nav').slideToggle();
  })

  $('nav a').on('click', function(e){
    e.preventDefault();
    if(this.hash !== ""){
      var hash=this.hash;
      $('html,body').animate({
        scrollTop:$(hash).offset().top
      },800, function(){
        window.location.href=hash;
      });
    }
  })

  $('.scroll a').on('mouseenter', function(){
    $(this).text('or click me');
  }).on('mouseleave', function(){
    $(this).text('keep scrolling');
  })

  $('.scroll a').on('click',function(e){
    e.preventDefault();
    $('nav').css('display','none');
    $('html,body').animate({
      scrollTop:$('#about').offset().top
    },800);
  })

  $('#contact input, #contact textarea').on('focusin', function(){
    $(this).prev().css('color', '#e29898');
  }).on('focusout', function(){
    $(this).prev().css('color', '#232323');
  })

  var swiper = new Swiper('.swiper-container', {
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },
    loop:true,
  });
})
