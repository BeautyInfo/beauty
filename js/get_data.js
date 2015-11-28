$(function() {
	$('#main-content').on('lazyshow', function () {
		$.getJSON("https://mywebservice.info/beautyUniversity/data_out.php", function(data) {
			var str = "";
			for (var i = data.length - 1; i >= 0; i--) {
				str += "<p><img data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type='thumbnail'"+ "' width='100' height='100'></p>";
			}

			$("#main-content").append(str);
			$(window).lazyLoadXT();
          			$('#main-content').lazyLoadXT({visibleOnly: false, checkDuplicates: false});
		});
	 }).lazyLoadXT({visibleOnly: false});
});