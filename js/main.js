$(function() {
	$('.back').click(function() {
		$('body, html').animate({scrollTop:0}, {duration: 700, specialEasing: {scrollTop: 'swing'}});
	});

	if($('.scrollbar-inner').length) $('.scrollbar-inner').scrollbar();

	$('.hiddenmenu__icon, .hiddenmenu__list').click(function(e){
		$('.hiddenmenu__list').toggleClass('hiddenmenu__list_active');
	});

	$(document).click(function(e){
		if(!$(e.target).is('.hiddenmenu') && !$(e.target).parents('.hiddenmenu').length) {
			$('.hiddenmenu__list').removeClass('hiddenmenu__list_active');
		}
	});

	$('.during__more').click(function(){
		$(this).prev('.during__itemdesc').slideToggle().toggleClass('opened');
		if($(this).prev('.during__itemdesc').is('.opened')) {
			$(this).text('Свернуть');
		}

		if(!$(this).prev('.during__itemdesc').is('.opened')) {
			$(this).text('Показать описание');
		}
	})

	$('.common__play').click(function(){
		$(this).hide();
		$(this).prev().hide();
		var iframe = $(this).siblings('iframe');
		var src = iframe.attr('src');
		iframe.attr('src', src + '?rel=0&showinfo=0&autoplay=1');
	})

	$('.video-button').on('click', function() {
		$(this).hide().prev().hide();
	});
});

