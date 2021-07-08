$(function() {

$('.header__btn-menu').on('click', function() {
    $('.menu').toggleClass('menu--open');
});


  $(".slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    //slidesToScroll: 6,
    autoplay: false,
    speed: 900,
    autoplaySpeed: 700,
    variableWidth: true,
    
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3
        }
      },
     
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          arrows: false
         
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
});


