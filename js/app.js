document.addEventListener("DOMContentLoaded", function() {

	$(".toggle-mnu").click(function() {
  	$(this).toggleClass("on");
  	$(".header-menu_mobile").slideToggle();
  return false;
	});

	$("input.phone").mask("+7 (999) 999-9999");

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	var owl = $('.our-doctors-carusel');
	owl.owlCarousel({
		loop: true,
		margin: 20,
		responsive : {
    0 : {
        items: 1
    },
    576 : {
        items: 2
    },
    768 : {
        items: 3
    },
    992 : {
        items: 3
    },
    1200 : {
        items: 4
    }
}
	});
	// Go to the next item
	$('.customNextBtn').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})

	$(".services-form").click(function () {
	var chk = $('.services-form').find('input[type=checkbox]:checked').length
	var price = $('[name="service-name"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0);
	
	$(".count-services span").text(chk);
	$(".result span").text(price);
	
	});

});
