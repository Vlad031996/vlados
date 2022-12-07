$(function () {

  $('.rateYo').rateYo({
    starWidth: "36px"
  });
 

  var mixer = mixitup('.slider__transition');
  
  // ================Slider=========================
  $('.clients__slider').slick({
    arrows: false,
    slidesToShow: 2,
    // dots: true,
    slidesToScroll: 1,
 })
 // ======================Slider-arrow===================
 $('.clients__slide-prev').on('click', function (e) {
  e.preventDefault()
  $('.clients__slider').slick('slickPrev')
})
$('.clients__slide-next').on('click', function (e) {
  e.preventDefault()
  $('.clients__slider').slick('slickNext')
})








































});