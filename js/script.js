// Animasi Navigasi Bootstrap
jQuery( document ).ready( function($) {
	$( window ).scroll( function () {
	  if ( $(document).scrollTop() > 150 ) {
		// Navigation Bar
		$('.navbar').removeClass('fadeIn');
		$('body').addClass('shrink');
		$('.navbar').addClass('animated fadeInDown');
	  } else {
		$('.navbar').removeClass('fadeInDown');
		$('body').removeClass('shrink');
		$('.navbar').addClass('animated fadeIn');
	  }
	});
  });

// efek ketikan
var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
	}

	setTimeout(function() {
	that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
		  new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};
/******************************************************************************************************************************
Waypoints
*******************************************************************************************************************************/ 
var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.02);
        }, 40);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});


$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});



/******************************************************************************************************************************
Nav Button
*******************************************************************************************************************************/ 

// $(window).load(function() {

// 	$('.nav_slide_button').click(function() {
// 		$('.pull').slideToggle();
// 	});

// });


// $(function() {

// 	$('a[href*=#]:not([href=#])').click(function() {
// 		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 			if (target.length) {
// 				$('html,body').animate({
// 					scrollTop: target.offset().top - 125
// 				}, 1000);
// 				return false;
// 			}
// 		}
// 	});

// });

// /******************************************************************************************************************************
// Nav Transform
// *******************************************************************************************************************************/ 

// document.querySelector("#nav-toggle").addEventListener("click", function() {
// 	this.classList.toggle("active");
// });

// /******************************************************************************************************************************
// Flexsliders
// *******************************************************************************************************************************/ 

// $(window).load(function() {

// 	$('#blogSlider').flexslider({
// 		animation: "slide",
// 		directionNav: false,
// 		controlNav: true,
// 		touch: false,
// 		pauseOnHover: true,
// 		start: function() {
// 			$.waypoints('refresh');
// 		}
// 	});

// 	$('#servicesSlider').flexslider({
// 		animation: "slide",
// 		directionNav: false,
// 		controlNav: true,
// 		touch: true,
// 		pauseOnHover: true,
// 		start: function() {
// 			$.waypoints('refresh');
// 		}
// 	});

// 	$('#teamSlider').flexslider({
// 		animation: "slide",
// 		directionNav: false,
// 		controlNav: true,
// 		touch: true,
// 		pauseOnHover: true,
// 		start: function() {
// 			$.waypoints('refresh');
// 		}
// 	});
	
// 		$('#clientSlider').flexslider({
// 		animation: "slide",
// 		directionNav: false,
// 		controlNav: true,
// 		touch: true,
// 		pauseOnHover: true,
// 		start: function() {
// 			$.waypoints('refresh');
// 		}
// 	});

// });



