$(function() {
var myFullpage = new fullpage('#fullpage', {
    anchors: ['home', 'aboutMe', 'projects', 'letsTalk'],
    css3: true,
    //menu: '#gnb'
    normalScrollElements: '.scrollable-element',
  });

  // nav
  $('#gnb').on('click',function(){
    $('nav').toggleClass('on');
  });

  // 모바일 화면에서 햄버거 메뉴 클릭 시 내비게이션이 나타나는 애니메이션
var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function () {
    const style = $('header').hasClass('active');

    if (style == 0) {
        wrapperMenu.classList.add('open');
        $('header').addClass('active');
        $('header h1').addClass('active');
        $('.mobile_menu').animate({ right: '0%' }, 1000, 'easeOutCubic').addClass('show');
    } else {
        wrapperMenu.classList.remove('open');
        $('.mobile_menu').animate({ right: '-100%' }, 1000, 'easeOutCubic').removeClass('show');
        $('header').removeClass('active');
        $('header h1').removeClass('active');
        
    }
})

// mode_btn
$('.mode_box').on('click', function(){
    //.addClass()와 .removeClass()가 순차적으로 일어나는 매서드
    $('.mode_box').toggleClass('active');
    $('.mode_btn').toggleClass('active');
    $("body").css({"background":"#1d1d1d","color":"#fff"});
    $("header").css({"background":"#1d1d1d","color":"#fff"});
    $(".line-menu").css({"background":"#fff"});
    $(".mobile_menu").css({"background":"#1d1d1d"});
    $('.about_event .fp-controlArrow.fp-prev').toggleClass('active');
    $('.about_event .fp-controlArrow.fp-next').toggleClass('active');
    $(".scrollable-element > div").css({"background":"#fff"});
    $('#call1').toggleClass('active');
    $('#call2').toggleClass('active');
    $('#call3').toggleClass('active');
  });

});