$(document).ready(function(){
	// AJAX retrieve json data from 'officers' json file onto officer div
    $.getJSON("json_files/officers.json", function(data) {
		$.each(data, function() {
			$.each(this, function(index, value) {
				$(".officer").append(
					"<h3>" + value.position + "</h3>" +
					"<p>" + value.name + "</p>" +
                    "<img class='officer_img' src='" + value.image + 
					"' alt='" + value.name + "'></img>"
				);
			});
		});
	});
});
