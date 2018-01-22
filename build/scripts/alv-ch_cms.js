/**
 * JavaScript
 */

'use strict';

window.addEventListener('DOMContentLoaded', function(){

	var header = 	'<div class="header sticky-top">' +
		'<div class="navbar navbar-alv navbar-light bg-faded">' +
		'<div class="container"></div>' +
		'</div>' +
		'</div>';

	$('.container-main').removeClass('container');
	$('.container-fluid').addClass('container');

	$('header').wrap(header);

	if ($('.landing-page').length) {
		var i=1;
		var count=$('.mod-columncontrols').length;
		$('.mod-columncontrols').each(function(){
			$(this).addClass('columncontrols--landingpage').addClass('columncontrols__'+i);
			if (i===1){
				$(this).addClass('columncontrols__first');
			}
			if (i===count){
				$(this).addClass('columncontrols__last');
			}
			i++;
		});

		$('.mod-breadcrumb').hide();
	}
});

// Reset CD Bund
$( document ).ready(function() {
	var navi = $('.mod-mainnavigation').detach();
	var md = new MobileDetect(window.navigator.userAgent);

	if (md.phone() || $(document).width()<768) {
		$('.navbar-alv').after(navi);

		$('.toolbar-nav').click(function(){
			$(this).toggleClass('show');
		});
	}
	else {
		$('.mod-searchfield').after(navi);

		$('.dropdown.yamm-fw').each(function(){
			var containerWidth = $('.container-main > .container').outerWidth();
			var positionLeft = $(this).offset().left;
			var marginMegamenu = ($(document).width() - containerWidth) / 2;
			var diff = -(positionLeft - marginMegamenu);
			$(this).children('.dropdown-menu').css('left', diff);
		});

		$(window).resize(function() {

			$('.dropdown.yamm-fw').each(function(){
				var containerWidth = $('.container-main > .container').outerWidth();
				var positionLeft = $(this).offset().left;
				var marginMegamenu = ($(document).width() - containerWidth) / 2;
				var diff = -(positionLeft - marginMegamenu);
				$(this).children('.dropdown-menu').css('left', diff);
			});
		});
	}

	// hyphenator
	Hyphenator.config({remoteloading: false, defaultlanguage: 'de'});
	Hyphenator.run();

	// GA
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'UA-36686902-8');
	gtag('config', 'GA_TRACKING_ID', { 'anonymize_ip': true });
});
