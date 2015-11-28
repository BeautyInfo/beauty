$(function() {
	$.parseJSON("https://mywebservice.info/beautyUniversity/data_out.php", function(data) {
		console.log(data[0]["message"]);
	});
});