$(function() {
	$.getJSON("https://mywebservice.info/beautyUniversity/data_out.php", function(data) {
		console.log(data);
		var res = $.parseJSON(data);
		console.log(res[0]["message"]);
	});
});