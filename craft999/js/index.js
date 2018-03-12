$(function(){

  var $devWidth;
  var $limitSize=767;
  var mobileSlideHeight;
  $(window).resize(function(){
    $devWidth=$('body').width();
  }).resize();

  $('.gnb-nav').on('mouseenter', function(){
    if($devWidth < $limitSize) return false;
    $('.gnb-nav li ul').stop().slideDown(500);
    $('header').addClass('on');
  }).on('mouseleave', function(){
    if($devWidth < $limitSize) return false;
    $('.gnb-nav li ul').stop().slideUp(200);
    $('header').removeClass('on');
  })

  $('.gnb-nav > ul > li').on('click', function(){
    $('.gnb-nav > ul > li > a').removeClass('active');
    $(this).find('a').addClass('active');
  })

  $('.gnb-nav li ul li').on('click', function(){
    $('.gnb-nav > ul > li > a').removeClass('active');
    $(this).parents('a').addClass('active');
  })

  $('.sub-nav .btn-open').on('click', function(){
    if($devWidth < $limitSize) return false;
    $('.sub-nav input').val('');
    $('.sub-nav').toggleClass('open');
    $(this).find('i').toggleClass('icon-angle-double-left icon-angle-double-right');
    if($('.sub-nav').hasClass('open')){
      $('.sub-nav .sns li').removeClass('open')
      $('.sub-nav > .btn-search, .search-form').hide();
    }else{$('.sub-nav > .btn-search').show();}
  })

  $('.sub-nav > .btn-search').on('click',function(){
    var icon=$(this).find('svg').attr('data-icon');
    if($devWidth < $limitSize) return false;
    $('.search-form input').val('');
    $('.search-form').toggle();
    if(icon=='search'){
      $(this).find('svg').attr('data-icon','times');
    }else{
      $(this).find('svg').attr('data-icon','search');
    }
  })

  $('.sub-nav .sns li').on('click', function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open')
    }else{
      $('.sub-nav .sns li').removeClass('open');
      $(this).addClass('open')
      $('.sub-nav').addClass('open');
      $('.sub-nav .btn-open i').removeClass('icon-angle-double-left').addClass('icon-angle-double-right');
    }
  })

  $('.mobile-menu').on('click', function(){
    $('.gnb-nav').slideToggle();
    $('header').toggleClass('toggle');
    var mMenu=$(this).find('svg').attr('data-icon');
    if(mMenu=='bars'){
      $(this).find('svg').attr('data-icon', 'times');
    }else{
      $(this).find('svg').attr('data-icon', 'bars');
    }
  })

  $('.mobile-login').on('click', function(e){
    e.preventDefault();
    $('.gnb-nav').slideUp();
    $('header').removeClass('toggle');
    $('.mobile-menu svg').attr('data-icon', 'bars');
    $('.mobile-login-form').show().find('input').val('');
    $('body').append('<div class="bg"></div>');
  })

  $('.mobile-login-form .cancel').on('click', function(e){
    e.preventDefault();
    $('.mobile-login-form').hide();
    $('.bg').remove();
  })

  $('.store-list > ul > li, .store-list i').on('click', function(e){
    e.preventDefault();
    $('.store-list .store-detail').toggleClass('on');
    $('.store-list i').toggleClass('icon-angle-double-down icon-angle-double-up');
  })

  storeInfo=[{
    name:'롯데백화점 월드타워점',
    addr:'서울시 송파구 신천동 29 롯데백화점 에비뉴엘 월드타워 5층',
    open:'10:30AM - 08:00PM <p> 주말 : 10:30AM - 08:30PM',
    tel:'02-3213-2500',
    img:'image/store1.jpg',
    lat:37.513244,
    lng:127.101578,
  },{
    name:'롯데백화점 강남점',
    addr:'서울시 강남구 대치동 937 롯데백화점 3층',
    open:'10:30AM - 08:00PM <p> 주말 : 10:30AM - 08:30PM',
    tel:'02-531-2500',
    img:'image/store2.jpg',
    lat:37.497191,
    lng:127.053280,
  },{
    name:'IT Hysan place',
    addr:'Shop M1-2, 1 Hysan Ave, Causeway Bay, Hongkong',
    open:'10AM–10PM <p> Friday - Sunday : 10AM–11PM',
    tel:'+852-9383-6664',
    img:'image/store3.jpg',
    lat:22.280028,
    lng:114.183777,
  }];

  selectIndex=0;
  $('.store-list').on('click', '.store-detail li', function(){
    var store=$(this).find('a').text();
    $('.store-detail li').removeClass('active');
    $(this).addClass('active');
    $('.store-list > ul > li > a').text(store);
    selectIndex=$(this).index();
    initMap(storeInfo[selectIndex].lat, storeInfo[selectIndex].lng);
  })

  $('.popup-store .btn-close').on('click', function(){
    $('.popup-store').slideUp();
    $('.bg').remove();
  })

  var slideIndex = 0;
  showSlides();

  function showSlides(){
    if($devWidth < $limitSize){
    var i;
    var slides=$('.main-slide .mobile li');
    for (i = 0; i < slides.length; i++){
      $(slides[i]).fadeIn();
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    $(slides[slideIndex-1]).fadeOut();
    setTimeout(showSlides, 5000);
  }else{
    var i;
    var slides=$('.main-slide .pc li');
    for (i = 0; i < slides.length; i++){
      $(slides[i]).fadeIn();
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    $(slides[slideIndex-1]).fadeOut();
    setTimeout(showSlides, 5000);
  }
  }
})

function popupStore(){
  $('.store-img, .store-info').empty();
  $('.popup-header h1').text(storeInfo[selectIndex].name);
  $('.store-img').append('<img src="'+storeInfo[selectIndex].img+'" alt="'+storeInfo[selectIndex].name+'">');
  $('.store-info').append(
    '<dl>'
    +'  <dt>매장 주소</dt>'
    +'  <dd>'+storeInfo[selectIndex].addr+'</dd>'
    +'  <dt>영업시간</dt>'
    +'  <dd>'+storeInfo[selectIndex].open+'</dd>'
    +'  <dt>전화번호</dt>'
    +'  <dd>'+storeInfo[selectIndex].tel+'</dd>'
    +' </dl>'
  );
  $('.popup-store').slideDown();
  $('body').append('<div class=bg></div>');
}

function initMap(latVal, lngVal) {
  //console.log('구글지도위치값:',latVal, lngVal);
  //위도경도의 값이 정의되지 않았을 때 기본값을 저장하도록 설정
  if(latVal==undefined && lngVal==undefined){
    latVal=37.556133;
    lngVal=126.939037;
  }

  var uluru = {lat: latVal, lng: lngVal};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

  marker.addListener('click', function() {
    popupStore();
    // console.log('마커를 클릭함');
  });
}
