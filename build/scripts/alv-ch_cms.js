/**
 * JavaScript
 */

'use strict';

window.addEventListener('DOMContentLoaded', function(){

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


	// main nav
	//var navi = $('.mod-mainnavigation').detach();

	$('.container-main').removeClass('container');
	$('.container-fluid').addClass('container');

	$('header').wrap(header);
	if (!$('.alv-header').length){
		$('.header').prepend(alvHeader);
	}

	//$('.mod-searchfield').after(navi);

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
	/*
	$('.dropdown.yamm-fw').each(function(){
		var containerWidth = $('.container-main > .container').outerWidth();
		var positionLeft = $(this).offset().left;
		var marginMegamenu = ($(document).width() - containerWidth) / 2;
		var diff = -(positionLeft - marginMegamenu);
		$(this).children('.dropdown-menu').css('left', diff);
	});


	var md = new MobileDetect(window.navigator.userAgent);

	if (md.mobile()) {
		$('.drilldown-container').addClass('collapse');

		$('a[href="#collapseSubNav"]').click(function () {
			$('.drilldown-container').collapse('toggle');
		});
	}

	$('.mod-accordion').each(function(){
		if ($(this).children().attr('data-first-element-open')){
			if ($(this).children().attr('data-first-element-open')==='true') {
				$(this).find('.collapsed')[0].click();
			}
		}
	});
	*/
});
