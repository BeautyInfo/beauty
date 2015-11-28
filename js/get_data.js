$(function() {
	$.getJSON("https://mywebservice.info/beautyUniversity/data_out.php", function(data) {
		var str = "";
		for (var i = data.length - 1; i >= 0; i--) {
			str += "<p><img data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture"+ "' width='300' height='200' class='lazy-loaded'></p>";
		}

		$("#main-content").append(str);
	});
});