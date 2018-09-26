$(function () { 


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
		arrows: true,
		// variableWidth: true,
		touchMove: false, 
		infinite: true, 
		responsive: [ 
			{
				breakpoint: 1023, 
				settings: {
					slidesToShow: 2, 
					slidesToScroll: 1,
					variableWidth: false,
				}
			}, 
			{
				breakpoint: 767, 
				settings: {
					slidesToShow: 1, 
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
	}) ;
  $('.review__file-trigger').on('click', function () {
    $('.answer__file').click();
  });
  $('.answer__file').on('change', function () {
    var name = $(this)[0].value.split('\\');
		var filesName = name[name.length - 1];
    alert('Ваш файл ' + filesName + ' загружен');
  
	}); 
	$('.btn-review').click(function () {
    var reviewInput1 = $('.input__val-1').val().length ,
        reviewInput2 = $('.input__val-2').val().length ,
        reviewInput3 = $('.input__val-3').val().length ;
    if (reviewInput1 !== 0 && reviewInput2 !== 0 && reviewInput3 !== 0) {
      $('.popup__review').addClass('active');
      $('.popup__review').click(function () {
        $(this).removeClass('active');
      });
    } else {
      alert('Заполните поля');
    }
	}); 
	$('.reviews-inner').on('beforeChange', function(){
		$('.reviews-text').removeClass('active'); 
		$(".plus").removeClass('active');
	});  
	$('.plus').on('click', function() { 
		$(this).siblings('.reviews-body').find(".reviews-text").toggleClass('active'); 
		$(this).toggleClass('active')
	}); 
	$('.component-top').on('mouseover', function () { 
		var img1 = $('.component-img1'); 
		var img2 = $('.component-img2'); 
		var img3 = $('.component-img3'); 
		var img4 = $('.component-img4');
		$(this).find('.component-img').addClass('active');  
		if( img4.hasClass('active') || img2.hasClass('active')) {
			$('.human-inside').addClass('active-before');
		} 
		else {
			$('.human-inside').addClass('active-after');
		}

	}).on('mouseout', function() {
		$(this).find('.component-img').removeClass('active'); 
		$('.human-inside').removeClass('active-before'); 
		$('.human-inside').removeClass('active-after');
	}) ; 
	


});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

