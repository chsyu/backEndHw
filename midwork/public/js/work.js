
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
		$('#pen').animate({
				left:'92vw',
			},4000);
		/*$('.work').click(function(){
			$('#pen-img').attr('src','../images/0.png')
		});*/
	});
