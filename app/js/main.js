$(function() {
  $(".slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    //slidesToScroll: 6,
    autoplay: false,
    speed: 900,
    autoplaySpeed: 700,
    responsive: [
      {
        breakpoint: 1092,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


