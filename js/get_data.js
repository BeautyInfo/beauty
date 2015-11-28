$(function() {
	$('#marker').on('lazyshow', function () {
		$.getJSON("https://mywebservice.info/beautyUniversity/data_out.php", function(data) {
			var str = "";
			for (var i = data.length - 1; i >= 0; i--) {
				str += "<p><img data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture"+ "' width='300' height='200'></p>";
			}

			$("#main-content").append(str);
			$(window).lazyLoadXT();
          			$('#marker').lazyLoadXT({visibleOnly: false, checkDuplicates: false});
		});
	 }).lazyLoadXT({visibleOnly: false});
});