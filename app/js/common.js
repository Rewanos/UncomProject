$(function() {

	// Custom JS
		$('img.img-svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
						$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
						$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

		}, 'xml');

});


		$('#my-menu').mmenu({
			extensions: ['effect-menu-slide', 'theme-black', 'pagedim-black'],
			offCanvas: {
				position: 'right'
			}
		});

		var api = $('#my-menu').data('mmenu');
		api.bind('open:start', function() {
			$('.hamburger').addClass('is-active');
		});
		api.bind('close:before', function() {
			$('.hamburger').removeClass('is-active');
		})
	
	
	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 600,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
    	320: {
    		slidesPerView: 1,
    		spaceBetween: 10

    	},
    	480: {
    		slidesPerView: 1,
    		spaceBetween: 20

    	},
    	768: {
    		slidesPerView: 1,
    		spaceBetween: 20
    	},

    	992: {
    		slidesPerView: 2,
    		spaceBetween: 20
    	}

    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
  })

	

});
