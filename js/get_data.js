$(function() {
	$.getJSON("https://mywebservice.info/beautyUniversity/data_out.php", function(data) {
		var str = "";
		for (var i = data.length - 1; i >= 0; i--) {
			if(data[i]["message"] === "" || data[i]["object_id"] === "") {
				continue;
			}
			str += "<img class='shadow-img' data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type='thumbnail'"+ "' width='100' height='100'>";
		}

		$("#main-content").append(str);
	 });

	$(window).on('ajaxComplete', function() {
  		setTimeout(function() {
  			$(window).lazyLoadXT();
  		}, 50);
	});
});

$( document ).on( "pagecreate", function() {
	$( ".photopopup" ).on({
		popupbeforeposition: function() {
			var maxHeight = $( window ).height() - 60 + "px";
			$( ".photopopup img" ).css( "max-height", maxHeight );
		}
	});
});