$(document).ready(function() {
    console.log( "ready!" );
});

$(function () { 
	$('.plus').on('click', function() { 
		console.log('1');
		$(this).siblings('.reviews-body').find(".reviews-text").toggleClass('active'); 
		$(this).toggleClass('active')
	});
	$(".table_slider").slick( {
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false, 
		touchMove: false, 
		infinite: false,
		responsive: [ 
			{
				breakpoint: 1023, 
				settings: {
					slidesToShow: 3, 
					touchMove: false
				}
			}, 
			{
				breakpoint: 767, 
				settings: {
					slidesToShow: 2, 
					touchMove: false
				}
			}, 
			{
				breakpoint: 478, 
				settings: {
					slidesToShow: 1, 
					touchMove: false
				}
			}
		]
	}); 
	$('.reviews-inner').slick( {
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false, 
		touchMove: false, 
		infinite: true
	}) ;

})


