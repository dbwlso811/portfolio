$(function() {
    


    //       $switch-thumb: grey;
// $switch-thumb--active: #83b154;
// $switch-track: #ccc;
// $switch-track--active: #d0efa8;
// fullpage
var myFullpage = new fullpage('#fullpage', {
    anchors: ['home', 'aboutMe', 'projects', 'letsTalk'],
    css3: true,
    //menu: '#gnb'
    normalScrollElements: '.scrollable-element',
  });

  // nav
  $('#gnb').on('click',function(){
    $('nav').toggleClass('on');


//       $switch-thumb: grey;
// $switch-thumb--active: #83b154;
// $switch-track: #ccc;
// $switch-track--active: #d0efa8;
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
});