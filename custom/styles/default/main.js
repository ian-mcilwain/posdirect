"use strict";

var app = {};

app.init = function () {
	app.readMore();
	app.growSection();
	app.smoothScroll();
	app.filter();
	app.changeSize();
	app.mobileMenu();
	app.scrollEffect();
	console.log("I'm loaded");
};

app.scrollEffect = function () {
	console.log("called scroll");
	$(document).scroll(function () {
		var scrollPixels = $(document).scrollTop();
		console.log(scrollPixels);
	});
};

app.mobileMenu = function () {
	$('.hamburger').click(function () {
		$(this).toggleClass('open');
		$(this).parent().parent().parent().toggleClass('open');
	});
};

app.growSection = function () {
	$(".readMoreButton").click(function (e) {
		e.preventDefault();
		$(this).parent().addClass("open");
	});
};

// Mobile landing page button to show more content
app.readMore = function () {
	$('.readMoreLP').on('click', function (e) {
		e.preventDefault();

		$('.lpContent').slideToggle(250);
		$('.readMoreLP').toggleClass('show');
	});
};

// Resources filter tabs
app.filter = function () {
	var $filters = $('.resourceTags li [data-filter]'),
	    $boxes = $('.resource[data-category]');

	$filters.on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		$filters.removeClass('active');
		$this.addClass('active');

		var $filterTag = $this.attr('data-filter');

		if ($filterTag == 'all') {
			$boxes.parent().removeClass('is-animated').fadeOut().promise().done(function () {
				$boxes.parent().addClass('is-animated').fadeIn();
			});
		} else {
			$boxes.parent().removeClass('is-animated').fadeOut().promise().done(function () {
				$boxes.filter('[data-category = "' + $filterTag + '"]').parent().addClass('is-animated').fadeIn();
			});
		}
	});
};

// Font size change on blog detail page
app.changeSize = function () {
	$('#increaseFont').click(function (e) {
		e.preventDefault();
		var currentBodySize = parseInt($('.section.post-body p').css('font-size')) + 2;
		if (currentBodySize <= 24) {
			$('.section.post-body p').css('font-size', currentBodySize);
			$('.section.post-body span').css('font-size', currentBodySize);
			$('.section.post-body li').css('font-size', currentBodySize);
			$('.section.post-body h4').css('font-size', currentBodySize);
		}

		var currentH2Size = parseInt($('.section.post-body h2').css('font-size')) + 2;
		if (currentH2Size <= 28) {
			$('.section.post-body h2').css('font-size', currentH2Size);
		}

		var currentH3Size = parseInt($('.section.post-body h3').css('font-size')) + 2;
		if (currentH3Size <= 26) {
			$('.section.post-body h3').css('font-size', currentH3Size);
		}
	});

	$('#decreaseFont').click(function (e) {
		e.preventDefault();
		var currentBodySize = parseInt($('.section.post-body p').css('font-size')) - 2;
		if (currentBodySize >= 12) {
			$('.section.post-body p').css('font-size', currentBodySize);
			$('.section.post-body span').css('font-size', currentBodySize);
			$('.section.post-body li').css('font-size', currentBodySize);
			$('.section.post-body h4').css('font-size', currentBodySize);
		}

		var currentH2Size = parseInt($('.section.post-body h2').css('font-size')) - 2;
		if (currentH2Size >= 16) {
			$('.section.post-body h2').css('font-size', currentH2Size);
		}

		var currentH3Size = parseInt($('.section.post-body h3').css('font-size')) - 2;
		if (currentH3Size >= 14) {
			$('.section.post-body h3').css('font-size', currentH3Size);
		}
	});
};

app.smoothScroll = function () {
	$('a[href*=#]:not([href=#])').click(function () {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 40
				}, 1000);
				return false;
			}
		}
	});
};

$(window).load(function () {
	app.init();
});