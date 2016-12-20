$(document).ready(function(){
	
	$('.image-slider').slick({
		'autoplay': true,
		'arrows':true,
		'autoplaySpeed': 5000, 
		'slidesToShow': 4,
		'focusOnselect':true,
		'responsive': [
		{
			breakpoint: 1366,
			settings: {
				'slidesToShow': 3
			}
		},
		{
			breakpoint: 1024,
			settings: {
				'slidesToShow': 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				'slidesToShow': 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				'slidesToShow': 1
			}
		}
		]
	});
	$(document).on('click', '.prev', function(e){
		e.preventDefault();
		$('.image-slider').slick('slickPrev');
	});
	
	$(document).on('click', '.next', function(e){
		e.preventDefault();
		$('.image-slider').slick('slickNext');
	});
});	