$(function(){

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

  if(winTop>=(about-100)){
    $('nav').addClass('fixed');
  }else{
    $('nav').removeClass('fixed');
  }

  if(winTop>=$('#about').offset().top && winTop<($('#portfolio').offset().top-1000)){
    $('section').addClass('stuck');
  }else{
    $('section').removeClass('stuck');
  }

  if(winTop>=contact){
    $('#about nav').addClass('color');
  }else{
    $('#about nav').removeClass('color');
  }

}).scroll();

  $('nav a').on('click', function(){
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
    $('html,body').animate({
      scrollTop:$('#about').offset().top
    },800);
  })

  var $grid=$('.grid').isotope();
  $('#portfolio button').on('click', function(){
    $('#portfolio button').removeClass('on');
    $(this).addClass('on');
    var selector=$(this).attr('data-filter');
    $grid.isotope({filter:selector});
  })

})
