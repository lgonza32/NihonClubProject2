//superscrollorama jQuery plugin
$(document).ready(function() {  
    var controller = $.superscrollorama();
	// individual element tween examples
	controller.addTween('.upcoming_events', TweenMax.from( $('.upcoming_events'), 1, {css:{opacity: 0}}));
	controller.addTween('.past_events', TweenMax.from( $('.past_events'), 1, {css:{opacity: 0}}));
	// controller.addTween('.past_events-2', TweenMax.from( $('.past_events-2'), 1.25, {css:{opacity: 0}}));
	// controller.addTween('.past_events-3', TweenMax.from( $('.past_events-3'), 1.25, {css:{opacity: 0}}));
	// controller.addTween('.past_events-4', TweenMax.from( $('.past_events-4'), 1.25, {css:{opacity: 0}}));
	
	// AJAX retrieve json file data 'past_events' json file onto past_events div
	$.getJSON("json_files/past_events.json", function(data) {
		$.each(data, function() {
			$.each(this, function(index, value) {
				$(".past_events").append(
					"<img src='" + value.image + "' alt='" + value.title +"'></img>" +
					"<h3>" + value.title + "</h3>" +
					"<p>" + value.desc + "</p>" + "<br><br><br><br><br><br>"
				);
			});
		});
	});

});

