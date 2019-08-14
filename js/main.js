function goToWebsite(link) {
	setTimeout(function() {
		location.href = link;
	}, 500);
}


$('nav a, #home a').click(function(event) {
	event.preventDefault();
	TweenMax.to(window, 1, {scrollTo: $(this).attr('href')})
});

$('.screen').click(function(event) {
	event.preventDefault();
	var link = $(this).parent('a').attr('href');
	if (!$(this).hasClass('no-link')){
		TweenMax.fromTo($(this), 1, {position: 'fixed', top: '50%', left: '50%', x: '-50%', y: '-50%',width: '50%', height: '50%', zIndex: 9999},{top: '0%', left: '0%', position: 'fixed',x: '0%', y: '0%', width: '100%', height: '100%', zIndex: 9999, onComplete: goToWebsite(link)});
	}
});


$(window).scroll(function() {
	var windowScroll = $(window).scrollTop();
	$('#home').css({'background-position-y': -0.3 * windowScroll});
});

TweenMax.from($('#main-header'), 2, {y: '-20px', autoAlpha: 0 , ease: Power4.easeOut}).delay(1);
TweenMax.from($('#main-header + *'), 2, {y: '-20px', autoAlpha: 0 , ease: Power4.easeOut}).delay(2);
