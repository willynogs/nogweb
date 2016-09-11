$(function(){
  console.log('NOGWEB INITIALIZED');

  //CHANGING MENU ICON TO X [POTENTIALLY CREATE THREE CLASSES LATER :)]
  $('.menu').click(function(){
    $('.menu-1').toggleClass('menu-1-collapse');

    $('.menu-2').toggleClass('menu-2-collapse');

    $('.menu-3').toggleClass('menu-3-collapse');

    if($('.overlay-menu').hasClass('overlay-menu-active')) {
        $('.overlay-menu').fadeOut(200).toggleClass('overlay-menu-active');
        $('.click-circle').fadeOut(200);
    } else {
      $('.overlay-menu').show().toggleClass('overlay-menu-active');
    }

    $('.title').toggleClass('overlay-active-white');

    $('.overlay-about').toggleClass('overlay-fade-left');

    $('.overlay-work').toggleClass('overlay-fade-right');

    $('.overlay-contact').toggleClass('overlay-fade-left');
  });

  //NAVIGATION
  $('.overlay-link').click(function(event){
    var parentLink = $(this);
    var x = event.pageX - 5;
    var y = event.pageY - 5;
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    //default r of 200
    var r = 200;
    //CIRCLE RADIUS SHOULD BE EQUAL TO FARTHEST DIAGONAL FROM CENTER
    if ((pageWidth / 2) > x) {
      d = (Math.sqrt((Math.pow((pageWidth - x), 2) + Math.pow((pageHeight / 2), 2))) * 2);
    } else {
      var newX = pageWidth - x;
      var newY = pageHeight - y;
      d = (Math.sqrt((Math.pow((pageWidth - newX), 2) + Math.pow((pageHeight / 2), 2))) * 2) + 50;
    }
    $('body').append("<div class='click-circle' style='top:" + y + "px;left:" + x + "px;'></div>");
    $('.click-circle').animate({
      height: d + "px",
      width: d + "px",
      top: (y - (d / 2)) + "px",
      left: (x - (d / 2)) + "px"
    }, 800, function(){
      //AFTER ANIMATION ENDS
      $(this).css({
        "height": "100vh",
        "width": "100vw",
        "top": "0px",
        "left": "0px",
        "border-radius": "0"
      });

      $('.click-circle').empty();
      var html = '';

      if(parentLink.hasClass('overlay-about')) {
        html = $('.about-wrapper').html();
      } else if(parentLink.hasClass('overlay-work')) {
        html = $('.work-wrapper').html();
      } else if(parentLink.hasClass('overlay-contact')){
        html = $('.contact-wrapper').html();
      }

      $('.click-circle').append(html);
    });
  });
});
