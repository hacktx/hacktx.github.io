$(document).ready(function() {
	function smoothScroll(el, to, duration) {
	    if (duration < 0) {
	        return;
	    }
	    var difference = to - $(window).scrollTop();
	    var perTick = difference / duration * 10;
	    this.scrollToTimerCache = setTimeout(function() {
	        if (!isNaN(parseInt(perTick, 10))) {
	            window.scrollTo(0, $(window).scrollTop() + perTick);
	            smoothScroll(el, to, duration - 10);
	        }
	    }.bind(this), 10);
	}
	$("#what object").on("load", function() {
		var svg = this.contentDocument,
			els = svg.querySelectorAll("#square1, #triangle1, #circle1"),
			timeline = anime.timeline({
				loop: true,
				direction: "alternate",
				autoplay: false
			});

		for (var i = 0; i < els.length; i++) {
			var el = els[i];
			timeline.add({
				targets: el,
				opacity: [0, 1],
				duration: 100,
				delay: 300,
			});
		}

		timeline.add({
			targets: selectElements(svg, "#circlearrow2 *"),
			strokeDashoffset: [initialStroke, 0],
			duration: 300,
			easing: "easeInOutSine",
		}).add({
			targets: selectElements(svg, "#circle2"),
			opacity: [0, 1],
			duration: 200,
			delay: -100,
		}).add({
			targets: selectElements(svg, "#circle21"),
			opacity: [0, 1],
			duration: 200,
			delay: -100,
		}).add({
			targets: selectElements(svg, "#squarearrow2 *"),
			strokeDashoffset: [initialStroke, 0],
			duration: 300,
			easing: "easeInOutSine",
		}).add({
			targets: selectElements(svg, "#square2front, #square2back"),
			opacity: [0, 1],
			duration: 200,
			delay: -100,
		}).add({
			targets: selectElements(svg, "#trianglearrow2 *"),
			strokeDashoffset: [initialStroke, 0],
			duration: 300,
			easing: "easeInOutSine",
		}).add({
			targets: selectElements(svg, "#triangle2front, #triangle2back"),
			opacity: [0, 1],
			duration: 200,
			delay: -100,
		});

		registerAnimation(svg, 1, timeline, 1.6);
	});

	$("#who object").on("load", function() {
		var svg = this.contentDocument,
			timeline = anime.timeline({
				loop: true,
				direction: "alternate",
				autoplay: false
			});

		var t = ["#triangle", "#squaredash", "#circle", "#triangledash", "#square", "#circledash"].map(function(x) {
			return svg.querySelectorAll(x)[0];
		}).forEach(function(el) {
			timeline.add({
				targets: el,
				opacity: [0, 1],
				duration: 300,
			});
		});

		registerAnimation(svg, 2, timeline, 2);
	});

	$("#freetail object").on("load", function() {
		var svg = this.contentDocument,
			timeline = anime.timeline({
				loop: true,
				direction: "alternate",
				autoplay: false
			});

		timeline.add({
			targets: selectElements(svg, "#bridge"),
			opacity: [1, 1],
			duration: 200,
		}).add({
			targets: selectElements(svg, "#moon"),
			fill: ["transparent", "white"],
			translateY: [250, 0],
			duration: 300,
		}).add({
			targets: selectElements(svg, "#bat"),
			opacity: [0, 1],
			duration: 200,
		});

		registerAnimation(svg, 3, timeline, 1.2);
	});

	function initialStroke(pathEl) {
		var offset = anime.setDashoffset(pathEl);
		pathEl.setAttribute("stroke-dashoffset", offset);
		return offset;
	}

	function selectElements(svg, selector) {
		var items = [], els = svg.querySelectorAll(selector);
		for (var i = 0; i < els.length; i++) items.push(els[i]);
		return items;
	}

	var timelines = [];
	function registerAnimation(svg, page, timeline, speed) {
		// $(svg).mouseover(function() {
		// 	timelines[page].timeline.play();
		// });
		timelines[page] = {
			timeline: timeline,
			speed: speed,
		};
	}

	$(window).scroll(function() {
		if ($("body").width() < 600) {
			for (i in timelines) {
				timelines[i].timeline.seek(timelines[i].timeline.duration);
			}
			return;
		}

		var sectionsScrolled  = $(this).scrollTop() / $("#register").height();
		$("#progress div").removeClass("active");
		$("#progress div").eq(sectionsScrolled).addClass("active");
		$("section").removeClass("visible").eq(sectionsScrolled).addClass("visible");

		sectionsScrolled += 3/5;
		var section = parseInt(sectionsScrolled);
		var actualProgress = sectionsScrolled % 1;
		var progress = 1;
		if (section in timelines) progress = Math.min(1, actualProgress * timelines[section].speed);

		if (section + 1 in timelines) timelines[section + 1].timeline.seek(0);
		if (section in timelines) timelines[section].timeline.seek(timelines[section].timeline.duration * progress);
		if (section - 1 in timelines) timelines[section - 1].timeline.seek(timelines[section - 1].timeline.duration);
	}).scroll();

	for (var i = 0; i < $("section").length; i++) $("#progress").append($("<div data-pos="+i+">"));

	$("#progress div").click(function() {
		smoothScroll($(window), $("section").eq($(this).attr("data-pos")).offset().top, 300);
	}).first().addClass("active");

	// FAQ

	$("#faq .pair").addClass("collapsed").find("h3").click(function() {
		$(this).parent(".pair").toggleClass("collapsed");
	});

	// Subscribe button

	$("header .cta").click(function(e) {
		e.preventDefault();
		smoothScroll($(window), $("#register").offset().top, 400);
	});

	// Countdown

	var clock = $(".countdown");
	var daysSpan = clock.find(".days b");
	var hoursSpan = clock.find(".hours b");
	var minutesSpan = clock.find(".minutes b");
	var secondsSpan = clock.find(".seconds b");

	function updateClock() {
		var t = Date.parse("October 20 2018 10:00:00 GMT-0500") - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		daysSpan.text(days);
		hoursSpan.text(("0"+hours).slice(-2));
		minutesSpan.text(("0"+minutes).slice(-2));
		secondsSpan.text(("0"+seconds).slice(-2));
		if (t <= 0) {
			clearInterval(timeinterval);
			clock.hide();
		}
		if (Date.parse("September 7 2018 15:00:00 GMT-0500") <= Date.parse(new Date())) {
			$("#register .button").attr("href", "https://my.hacktx.com/");
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
});
