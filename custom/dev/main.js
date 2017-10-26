var app = {};

app.init = function(){
	app.readMore();
	app.filter();
	app.blogSubscribe();
	app.changeSize();
	app.slide();
	app.dependantForm();
	app.exampleImage();
	app.displayPreview();
	app.mobileMenu();
};

app.mobileMenu = function() {
	$(".hamburger").click(function(e){
		e.preventDefault();
		$(this).parent().parent().toggleClass("active");
	})
}

app.exampleImage = function() {
    $("input[type='file']").parent().siblings("label").append('<img src="https://cdn2.hubspot.net/hubfs/3424896/saleshub/teeth.jpg" alt=""><img class="uploadPreview" src="#">');
    $("input[type='file']").parent().siblings("label").addClass("exampleImg");
    $("input[type='file']").parent().parent().addClass("imgUpload");
}



app.displayPreview = function () {
    $("input[type='file']").change(function(){
        var imgLink = $(this).parent().siblings("label").children(".uploadPreview");
        console.log( imgLink);
        imgLink.addClass("linkingimage");
        app.getPreview(this, imgLink);
    })
}

app.getPreview = function(input, imgLink) {
    // console.log(this);
     if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      imgLink.attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  } 
}

app.dependantForm = function () {
    console.log("forms");

    $(".hs-input").change(function(){
         $("input[type='file']").each(function(){
            //  console.log($(this).val());
             var fullFile = $(this).val();
             
             var fullFile = fullFile.slice(12);
             console.log(fullFile);
             $(this).parent().siblings("label").children().children(".fileName").html(fullFile);
         })
        
	    var selectValue = $(this).find(":selected").text();
	    var orthoOrPediatric = $(".hs_yes_no ").find(":selected").text();
	    var orthoForYouOrChild = $(".hs_ortho_for_you_or_your_child").find(":selected").text();
	    
	   // console.log("orthoOrPediatric is " + orthoOrPediatric);
	   
	   if (orthoForYouOrChild == "Myself") {
	       $(".child").removeClass("active");
	       $(".child").removeClass("ortho");
	       $(".child").removeClass("child");
	   } else if (orthoForYouOrChild == "Child"){
	       $(".hs_how_old_is_your_child.hs-form-field, .hs_parent_guardian_s_name").addClass("active ortho child");
	   }
	   	   if (orthoOrPediatric == "Orthodontics") {
	       //console.log("lisa needs braces");
	       $(".pediatric").removeClass("active");
	       $(".pediatric").removeClass("pediatric");
	       $(".hs_ortho_for_you_or_your_child.hs-form-field, .hs_primary_concerns_yourself, .hs_email, .hs_patient_first_name, .hs_patient_last_name, .hs_city, .hs_province, .hs_phone, .hs_face_front_smile, .hs_face_side_smile, .hs_teeth_right_side, .hs_teeth_left_side, .hs_top_teeth, .hs_bottom_teeth,").addClass("active ortho");
	       $(".pediatricInstructions").removeClass("active");
	       $(".orthoInstructions").addClass("active");
	       
	   } else if (orthoOrPediatric == "Pediatrics") {
	       //console.log("baby!");
	       $(".ortho").removeClass("active");
	       $(".ortho").removeClass("ortho");
	       $(".hs_how_old_is_your_child.hs-form-field .hs_primary_concerns_yourself, .hs_email, .hs_patient_first_name, .hs_patient_last_name, .hs_parent_guardian_s_name, .hs_city, .hs_province, .hs_phone, .hs_pediatric_area_of_concern, .hs_pediatric_other_pictures").addClass("active pediatric");
	       $(".hs_have_they_ever_been_to_the_dentist.hs-form-field").addClass("active pediatric");
	       $(".orthoInstructions").removeClass("active");
	       $(".pediatricInstructions").addClass("active");
	   };
	   //var value = $(this).val();
	   // console.log(value);
	    
    });
}


app.slide = function() {
	$(".slickContainer").slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false
	});
}

// Mobile landing page button to show more content
app.readMore = function(){
	$('.readMoreLP').on('click', function(e){
		e.preventDefault();

		$('.lpContent').slideToggle(250);
		$('.readMoreLP').toggleClass('show');
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

// Font size change on blog detail page
app.changeSize = function(){
	$('#increaseFont').click(function(e){
		e.preventDefault();
		var currentBodySize = parseInt($('.section.post-body p').css('font-size')) + 2;
		if (currentBodySize<=24){
			$('.section.post-body p').css('font-size', currentBodySize);
			$('.section.post-body span').css('font-size', currentBodySize);
			$('.section.post-body li').css('font-size', currentBodySize);
			$('.section.post-body h4').css('font-size', currentBodySize);
		}

		var currentH2Size = parseInt($('.section.post-body h2').css('font-size')) + 2;
		if (currentH2Size<=28){
			$('.section.post-body h2').css('font-size', currentH2Size);
		}

		var currentH3Size = parseInt($('.section.post-body h3').css('font-size')) + 2;
		if (currentH3Size<=26){
			$('.section.post-body h3').css('font-size', currentH3Size);
		}
	});

	$('#decreaseFont').click(function(e){
		e.preventDefault();
		var currentBodySize = parseInt($('.section.post-body p').css('font-size')) - 2;
		if (currentBodySize>=12){
			$('.section.post-body p').css('font-size', currentBodySize);
			$('.section.post-body span').css('font-size', currentBodySize);
			$('.section.post-body li').css('font-size', currentBodySize);
			$('.section.post-body h4').css('font-size', currentBodySize);
		}

		var currentH2Size = parseInt($('.section.post-body h2').css('font-size')) - 2;
		if (currentH2Size>=16){
			$('.section.post-body h2').css('font-size', currentH2Size);
		}

		var currentH3Size = parseInt($('.section.post-body h3').css('font-size')) - 2;
		if (currentH3Size>=14){
			$('.section.post-body h3').css('font-size', currentH3Size);
		}
	});
};


// Blog subscribe bar on blog detail page
app.blogSubscribe = function(){
	$(document).scroll(function () {
		var y = $(document).scrollTop();
		var topHeight = $('.full-blog-section .banner').height() + $('header').height();

		if (y >= topHeight) {
			$('.stickySubscribe').addClass('stickyBar');
		} else {
			$('.stickySubscribe').removeClass('stickyBar');
		}
	});


	if ($(window).width() > 767){}
	else {
		$('.blogSubscribeBar p').click(function(){
			$('.blogSubscribeBar form').slideToggle();
			$('.blogSubscribeBar p').toggleClass('formOpen');
		});
	}
};

$(window).load(function(){
	app.init();
});