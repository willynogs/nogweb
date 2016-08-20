$(function(){
  console.log('NOGWEB INITIALIZED');

  //CHANGING MENU ICON TO X [POTENTIALLY CREATE THREE CLASSES LATER :)]
  $('.menu').click(function(){
    $('.menu-1').toggleClass('menu-1-collapse');

    $('.menu-2').toggleClass('menu-2-collapse');

    $('.menu-3').toggleClass('menu-3-collapse');

    if($('.overlay-menu').hasClass('overlay-menu-active')) {
        $('.overlay-menu').hide().toggleClass('overlay-menu-active');
    } else {
      $('.overlay-menu').show().toggleClass('overlay-menu-active');
    }

    $('.title').toggleClass('overlay-active-white');

    $('.overlay-about').toggleClass('overlay-fade-left');

    $('.overlay-work').toggleClass('overlay-fade-right');

    $('.overlay-contact').toggleClass('overlay-fade-left');
  });
});
