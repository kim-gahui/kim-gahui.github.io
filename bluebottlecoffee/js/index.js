var swiper=new Swiper('.swiper-container', {
  speed:2000,
  autoplay:{
    delay:3500,
    disableOnInteraction:false,
  },
  effect:'fade',
});

$('.menu').on('click', function(){
  $('header').toggleClass('on');
  var icon=$(this).find('svg').attr('data-icon');
  if(icon=='bars'){
    $(this).find('svg').attr('data-icon','times');
  }else{
    $(this).find('svg').attr('data-icon','bars');
  }
})

$('.sec1 button').click(function(e){
  e.preventDefault();
  var value=$('.right input').val();
  if(value==''){
    $('.msg').fadeIn(200).text('Please fill in the form.');
  }else{
    $('.msg').fadeIn(200).text('Welcome blue bottle coffee!');
  }
})

$('.msg').click(function(){
  $(this).fadeOut(200);
})
