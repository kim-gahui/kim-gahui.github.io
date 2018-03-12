$(function(){
  $(window).scroll(function(){
    var intro=$('#intro').offset().top-100;
    var artist=$('#artist').offset().top-200;
    var timetable=$('#timetable').offset().top-200;
    var tickets=$('#tickets').offset().top-200;
    var information=$('#information').offset().top-200;
    var sponsor=$('#sponsor').offset().top-200;
    var faqContact=$('#faq_contact').offset().top-200;
    var footer=$('footer').offset().top;
    var winTop=$(window).scrollTop();

    var index;
    if(winTop>=intro && winTop<artist){
      index=0;
    }else if(winTop>=artist && winTop<timetable){
      index=1;
    }else if(winTop>=timetable && winTop<tickets){
      index=2;
    }else if(winTop>=tickets && winTop<information){
      index=3;
    }else if(winTop>=information && winTop<sponsor){
      index=4;
    }else if(winTop>=sponsor && winTop<faqContact){
      index=5;
    }else if(winTop>=faqContact<footer){
      index=6;
    }

    if(winTop>=intro+200){
      $('#goTop').fadeIn();
    }else{
      $('#goTop').fadeOut();
    }

    $('nav li a').removeClass('active');
    $('nav li').eq(index).find('a').addClass('active');

  })

  $('a').on('click', function(e){e.preventDefault();})

$('.btn-menu').click(function(){
  var text=$(this).find('i').text();
  if(text=='menu'){
    $(this).find('i').text('close');
    $('nav').addClass('on');
    $('body').append('<div class="bg"></div>')
  }else{
    $(this).find('i').text('menu');
    $('nav').removeClass('on');
    $('.bg').remove();
  }
})

$('body').on('click', '.bg', function(){
  $('.btn-menu i').text('menu');
  $('nav').removeClass('on');
  $(this).remove();
})

$('nav a').on('click', function(){
  if(this.hash !== ""){
    var hash=this.hash;
    $('html,body').animate({
      scrollTop:$(hash).offset().top
    }, 800, function(){
      window.location.href=hash;
    });
  }
})

$('.panel-title').on('click', function(){
  $('.panel-body').stop().slideUp();
  $('.panel-title i').text('keyboard_arrow_down');
  var body=$(this).next().css('display');
  if(body!='block'){
    // 보이지 않는 상태에서 눌렀으면
    $(this).find('i').text('keyboard_arrow_up');
  }else{
    // 보이는 상태에서 눌렀으면
    $(this).find('i').text('keyboard_arrow_down');
  }
  $(this).next().stop().slideToggle();
})

$('.btn-down').on('click', function(){
  $('html,body').animate({
    scrollTop:$('#artist').offset().top
  }, 800);
})

$('#goTop').on('click', function(){
  $('html,body').animate({
    scrollTop:$('#intro').offset().top
  }, 800);
})

})

function initMap(latVal, lngVal) {
  //console.log('구글지도위치값:',latVal, lngVal);
  //위도경도의 값이 정의되지 않았을 때 기본값을 저장하도록 설정
  if(latVal==undefined && lngVal==undefined){
    latVal=37.520891;
    lngVal=127.121387;
  }

  var olympic = {lat: latVal, lng: lngVal};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: olympic
  });
  var marker = new google.maps.Marker({
    position: olympic,
    map: map
  });
}
