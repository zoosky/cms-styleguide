/**
 * JavaScript
 */

'use strict';

window.addEventListener('DOMContentLoaded', function(){

	/* todo Bild anpassen Asset aus DAM */
	var alvHeader = '<div class="alv-header alv-header--inverse bg-inverse">'+
		'<span class="alv-header__brand mb-0">'+
		'<img src="https://cdn.rawgit.com/alv-ch/styleguide/6306dee9/build/images/swiss.svg" width="20" height="20" class="d-inline-block" alt="Swiss Confederation">'+
		'&nbsp;Arbeitslosenversicherung ALV'+
		'</span>'+
		'</div>';

	var header = 	'<div class="header sticky-top">' +
		'<div class="navbar navbar-alv navbar-light bg-faded">' +
		'<div class="container"></div>' +
		'</div>' +
		'</div>';

	$('.container-main').removeClass('container');
	$('.container-fluid').addClass('container');

	$('header').wrap(header);
	if (!$('.alv-header').length){
		$('.header').prepend(alvHeader);
	}

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

	if (md.phone() || $(document).width()<480) {
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
});
