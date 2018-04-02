$(document).ready(function () {

	
				// кнопка мобильного меню
	// var mobMenuButton = $('.mobile-menu__btn'),
	// 		mobMenuBlock = $('.mobile-menu-nav-list');
	// $('.mobile-menu__btn').on('click', function (event) {
	// 	mobMenuBlock.toggleClass('mobile-menu-nav-list--show');
	// });

				// настройка списка в мобильном меню
	// $('.mobile-menu-drop').hide();
	// $('.mobile-menu-nav-list__item--title').click(function () {
	// 	$('.mobile-menu-nav-list__item--title').toggleClass('mobile-menu-nav-list__item-link--active');
	// 	$('.mobile-menu-drop').slideToggle(100);
	// });

				// настройка списков в футере
	// var footerListLink = $('.footer-nav__list-link');
	// 		footerListSubList = $('.footer-nav__sub-list');

	// $('.footer-nav__list-link').on('click', function (event) {
	// 	event.preventDefault();
	// 	$('.footer-nav__list-link').toggleClass('footer-nav__list-link--active');
	// 	$('.footer-nav__sub-list').toggleClass('footer-nav__sub-list--show');
	// });

				//- Кнопка скролла в начало страницы
	// $(".btnScroll").click(function() {
	// 	$("body").animate({ "scrollTop": 0}, 1000);
	// 	$("html").animate({ "scrollTop": 0}, 1000);
	// });
	// $(window).scroll(function() {
	// 	if( $(window).scrollTop() > 250 ){ 
	// 		$(".btnScroll").addClass("btnActive");
	// 	} else {
	// 		$(".btnScroll").removeClass("btnActive");		
	// 	}
	// })


					// WOW анимация
	// new WOW().init();


				// Плавный скролл к нужному элементу меню по якорю
	// $('a[href^="#"]').bind("click", function (e) {
		// if ( mobMenuBlock.hasClass('mobile-menu-block--show') ) { // Если нажатие происходит в моб меню
		// 	mobMenuBlock.toggleClass('mobile-menu-block--show'); // закрыть меню и перейти к секции
		// }
	// 	var anchor = $(this);

	// 	if ( $(window).width() <= '768') {
	// 		$('html, body').stop().animate({
	// 			scrollTop: $(anchor.attr("href")).offset().top
	// 		}, 1000);
	// 	} else {
	// 		$('html, body').stop().animate({
	// 			scrollTop: $(anchor.attr("href")).offset().top - 77 + "px" // 77 - высота меню
	// 		}, 1000);
	// 	}
	// 	e.preventDefault();
	// 	return false;
	// });

				// Фикcированный хедер при скролле
	// $("#nav-and-logo").removeClass("default");
	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 20) {
	// 		$("#nav-and-logo").addClass("default").fadeIn('fast');
	// 	} else {
	// 		$("#nav-and-logo").removeClass("default").fadeIn('fast');
	// 	};
	// });

					// Табы
	// function openTypeObjects(evt, cityName) {
	// 	var i, tabcontent, tablinks; // Declare all variables
	// 	tabcontent = document.getElementsByClassName("object__tabs-content"); // Get all elements with class="tabcontent" and hide them
	// 	for (i = 0; i < tabcontent.length; i++) {
	// 			tabcontent[i].style.display = "none";
	// 	}
	// 	tablinks = document.getElementsByClassName("objects__tabs-tablinks"); // Get all elements with class="tablinks" and remove the class "active"
	// 	for (i = 0; i < tablinks.length; i++) {
	// 			tablinks[i].className = tablinks[i].className.replace(" objects__tabs-tablinks--active", "");
	// 	}
	// 	document.getElementById(cityName).style.display = "flex"; // Show the current tab, and add an "active" class to the button that opened the tab
	// 	evt.currentTarget.className += " objects__tabs-tablinks--active";
	// }
	// document.getElementById("defaultOpen").click();



	const second = 1000,
				minute = second * 60,
				hour = minute * 60,
				day = hour * 24;

	let countDown = new Date('Apr 2, 2018 22:00:00').getTime();

  let x = setInterval(function() {
		let now = new Date().getTime();

		let distance = countDown - now;

		document.getElementById('days').innerText = Math.floor(distance / (day));
		document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
		document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
		document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

		document.getElementById('days2').innerText = Math.floor(distance / (day));
		document.getElementById('hours2').innerText = Math.floor((distance % (day)) / (hour));
		document.getElementById('minutes2').innerText = Math.floor((distance % (hour)) / (minute));
		document.getElementById('seconds2').innerText = Math.floor((distance % (minute)) / second);
	
		//do something later when date is reached
		//if (distance < 0) {
		//  clearInterval(x);
		//  'IT'S MY BIRTHDAY!;
		//}

	}, second)
	

});