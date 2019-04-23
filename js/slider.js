$(function() {
  var adaptiveWidth = 1190;

  $(document).on('click', '.slider-nav-button', function(e) {
    if ($(this).is('.active')) return;

    var activeButton = $(this).siblings('.active');
    var activeButtonIndex = $(this).siblings('.active').index();
    var thisIndex = $(this).index();

    var nav = $(this).parents('.slider-nav');
    var sliderId = nav.attr('data-slider');
    
    var windowWidth = $(window).outerWidth();
    var slider = $('[data-slides='+ sliderId +']');
    var adaptiveSlider = slider.attr('data-adapt');
    var adaptive = windowWidth < adaptiveWidth;
    console.log(adaptive, adaptiveSlider);
    if (!adaptiveSlider && adaptive) return;

    var slideList = slider.find('.slides');
    if (slideList.hasClass('transitioning')) return;
    slideList.off('transitionend webkitTransitionEnd oTransitionEnd');

    var slidesPosition = slideList.css('left');
    var slide = slider.find('.slide');
    var dataNumber = slider.attr('data-number');
    if (!adaptive && !dataNumber) return;
    var slidesNumber = adaptive ? 1 : dataNumber;

    activeButton.removeClass('active');
    $(this).addClass('active');

    var slidesWidth = (slide.outerWidth() * slidesNumber) + (parseInt(slide.css('margin-right')) * slidesNumber);
    slideList.css('left', parseInt(slidesPosition) + (activeButtonIndex - thisIndex) * slidesWidth + 'px');
    slideList.addClass('transitioning');
    slideList.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
      $(this).removeClass('transitioning');
    });
  });
});