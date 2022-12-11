$(function () {

  $('.rateYo').rateYo({
    starWidth: "36px"
  });


  var mixer = mixitup('.slider__transition');

  // ================Slider=========================
  $('.clients__slider').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    slidesToScroll: 1,
  })
  // ======================Slider-arrow===================

  // ======================Slider-arrow===================
  $('.clients__slide-prev').on('click', function (e) {
    e.preventDefault()
    $('.clients__slider').slick('slickPrev')
  })
  $('.clients__slide-next').on('click', function (e) {
    e.preventDefault()
    $('.clients__slider').slick('slickNext')
  })

  // ======================Реализация аккордиона===================
  // ======================main__accordion===================
  // ======================main__accordion===================


  $('.accordion__conteant-link').on('click', function (e) {
    e.preventDefault()
      if ($(this).hasClass('accordion__conteant-link--active')) {
        $(this).removeClass('accordion__conteant-link--active')
        $(this).children('.accordion__text').slideUp()
     } else {
        $('.accordion__conteant-link').removeClass('accordion__conteant-link--active')
        $('.accordion__text').slideUp()
        $(this).addClass('accordion__conteant-link--active')
        $(this).children('.accordion__text').slideDown()
    } 
  })






































});