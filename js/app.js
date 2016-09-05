$(function(){
  console.log('NOGWEB INITIALIZED');

  //CHANGING MENU ICON TO X [POTENTIALLY CREATE THREE CLASSES LATER :)]
  $('.menu').click(function(){
    $('.menu-1').toggleClass('menu-1-collapse');

    $('.menu-2').toggleClass('menu-2-collapse');

    $('.menu-3').toggleClass('menu-3-collapse');

    if($('.overlay-menu').hasClass('overlay-menu-active')) {
        $('.overlay-menu').fadeOut(200).toggleClass('overlay-menu-active');
    } else {
      $('.overlay-menu').show().toggleClass('overlay-menu-active');
    }

    $('.title').toggleClass('overlay-active-white');

    $('.overlay-about').toggleClass('overlay-fade-left');

    $('.overlay-work').toggleClass('overlay-fade-right');

    $('.overlay-contact').toggleClass('overlay-fade-left');
  });

  $('.overlay-link').click(function(){
    var x = event.pageX - 5;
    var y = event.pageY - 5;
    $('body').append("<div class='click-circle' style='top:" + y + "px;left:" + x + "px;' data-top='" + y + "px' data-left='" + x + "px'></div>");
    $('.click-circle').animate({
      height: "200px",
      width: "200px",
      top: (y - 100) + "px",
      left: (x - 100) + "px"
    }, 1000);
  });
});
