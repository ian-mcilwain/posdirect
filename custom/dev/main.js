"use strict";

var app = {};


app.init = function () {
	app.mobileMenu();
	app.smoothScroll();
	app.hardware();
	app.videoPlay();
};


app.videoPlay = function () {
	$('#play-video').on('click', function (ev) {
		console.log("videoPopup");
	
		$("#video")[0].src += "?autoplay=1";
		ev.preventDefault();
	
	});

}



app.hardware = function () {
	$(".eliteOption").click(function(e) {
		e.preventDefault();
		$(".device.echo").removeClass("visible");
		$(".device.elite").addClass("visible");
		$(".activeLink").removeClass("activeLink");
		$(this).addClass("activeLink");
		$(".hardwareImage .visible").removeClass("visible");
		$(".hardwareImage .eliteImage").addClass("visible");
	});
	$(".echoOption").click(function (e) {
		e.preventDefault();
		$(".device.elite").removeClass("visible");
		$(".device.echo").addClass("visible");
		$(".activeLink").removeClass("activeLink");
		$(this).addClass("activeLink");
		$(".hardwareImage .visible").removeClass("visible");
		$(".hardwareImage .echoImage").addClass("visible");
	});
};

app.mobileMenu = function () {
	$('.hamburger').click(function () {
		$(this).toggleClass('open');
		$(this).parent().parent().parent().toggleClass('open');
	});
}

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

app.smoothScroll = function () {
	$('a[href*=#]:not([href=#])').click(function () {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			|| location.hostname == this.hostname) {

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
}

$(window).load(function () {
	console.log("mainJS")
	app.init();
});