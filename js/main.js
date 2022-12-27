$(function () {

  $('.rateYo').rateYo({
    starWidth: "36px"
  });


  var mixer = mixitup('.slider__transition');

  // ================Slider=========================
  $('.clients__slider').slick({
    arrows: false,
    slidesToShow: 2,
    // =============== ЧТОБЫ ВСЁ ПЕРЕКЛЮЧАЛОСЬ ВСЁ БЫСТРО И ПЛАВНО =========
    infinite: true,
    waitForAnimate: false,
    dots: true,
    // =============== АДАПТАЦИЯ СЛАЙДЕРА ПОД МОБИЛКУ=====================
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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

  // ===================== BYRGER ===============================

  // $(window).on('scroll', function (){
  //   if ($(window).scrollTop() > 0) {
  //     $('.burger').addClass('burger--folow')
  //   } else{
  //     $('.burger').removeClass('burger--folow')
  //   }
  // })

   setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false)  {
      $('.burger').addClass('burger--folow')
    } else {
      $('.burger').removeClass('burger--folow')
    }
  },0)
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.burger, header__inner').toggleClass('active')
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show') 
  })

  // setInterval(() => {
  //   if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false)  {
  //     $('.burger').addClass('burger--folow')
  //   } else {
  //     $('.burger').removeClass('burger--folow')
  //   }
  // },0)
  // $('.burger, .overlay').on('click', function (e) {
  //   e.preventDefault()
  //   $('.header__top').toggleClass('header__top--open')
  //   $('.overlay').toggleClass('overlay--show') 
  // })



































});