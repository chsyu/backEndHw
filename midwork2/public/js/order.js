
	$(document).ready(function(){   
		var $container = $('#container');
			
		$container.imagesLoaded( function() {

			  $('#container').masonry({
			      itemSelector : '.pin',
			      columnWidth : 240,
			      isFitWidth: true,
		          isAnimated: true, /* Animating with jQuery*/
			   
			  	  animationOptions: {
			         duration: 500,
			         easing: 'linear',
			         queue: false
			     
			  	  }
			  });
			  
		});
		$(".pin masonry-brick").click(function(){
			window.open('about.html');

		});
		$('#pen').animate({
			left:'92vw',
		},4000);
	});

	});
