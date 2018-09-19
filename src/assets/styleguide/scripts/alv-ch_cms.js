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

	//add work.swiss to language href to change url accordingly
	var url_en = 'work.swiss';
	var hrefEn = $(‘.nav-lang a[lang="en"]’).attr(‘href’); // den bestehenden Link auslesen
	var newHref = url_en+=hrefEn;
    //hrefEn.replace(‘arbeit.swiss’, ’work.swiss’); // den bestehenden Link anpassen: arbeit.swiss ersetzen mit zBsp: work.swiss oder wie der neue Link dann auch aussieht, dass ensprechende ersetzen
    $(‘.nav-lang a[lang="en"]’).attr(‘href’,newHref); // den Link ersetzen mit dem neuen

	
	if (md.phone() || $(document).width()<768) {
		$('.navbar-alv').after(navi);

		$('.toolbar-nav').click(function(){
			$(this).toggleClass('show');
		});
	}
	else {
		//$('.mod-searchfield').after(navi);
		$('.mod-searchfield:not(.global-search)').after(navi);
		
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
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-36686902-8', 'auto');
	ga('set', 'anonymizeIp', true);
	ga('send', 'pageview');
});
