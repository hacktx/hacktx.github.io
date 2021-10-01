$(function () {
	var $contactForm = $('#contact-form');
	$contactForm.submit(function (e) {
		e.preventDefault();
		$.ajax({
			url: 'https://formspree.io/xvowplwm',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function () {
				$('#subscribe-box').hide();
				$('#send').hide();
				$contactForm.append('<div class="alert alert--loading">Subscribing...</div>');
			},
			success: function (data) {
				$contactForm.find('.alert--loading').hide();
				$contactForm.append('<div class="alert alert--success">Successfully subscribed! <i class="fa fa-check-circle" aria-hidden="true"></i></div>');
			},
			error: function (err) {
				$contactForm.find('.alert--loading').hide();
				$('#subscribe-box').show();
				$('#send').show();
				$contactForm.append('<div class="alert alert--error">Oops, please try again! <i class="fa fa-times-circle" aria-hidden="true"></i></div>');
			}
		});
	});
});
