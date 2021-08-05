// event saat link diklik
$(function(){
	$('.page-scroll').on('click', function(e) {
		

		// ambil isi href
		var tujuan = $(this).attr('href');

		//tangkap elemen
		var elemenTujuan = $(tujuan);
		
		$('html , body').animate({
  			scrollTop: elemenTujuan.offset().top - 50
 		}, 1000, 'easeInOutQuart');

	 	e.preventDefault();
	});


	// parallax

	// about
	$(window).on('load', function() {
		$('.pKiri').addClass('pMuncul');
		$('.pKanan').addClass('pMuncul');
	});

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		// jumbotron
		$('.bg-light img').css({
			'transform' : 'translate(0px, '+ wScroll/5 +'%)'
		});

		$('.bg-light h1').css({
			'transform' : 'translate(0px, '+ wScroll/2 +'%)'
		});

		$('.bg-light p').css({
			'transform' : 'translate(0px, '+ wScroll/1.1 +'%)'
		});


		// portfolio
		if(wScroll > $('.portfolio').offset().top - 500) {
			$('.portfolio .img-thumbnail').each(function(i) {
				setTimeout(function() {
					console.log('ok');
					$('.portfolio .img-thumbnail').eq(i).addClass('muncul');
				}, 400 * i);
			});	
		}

	});
});