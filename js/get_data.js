$(function() {
	$( '.swipebox' ).swipebox();
	jsonGet("https://mywebservice.info/beautyUniversity/data_out.php?school=university");
	$(window).on('ajaxComplete', function() {
  		setTimeout(function() {
  			$(window).lazyLoadXT();
  		}, 50);
	});

	$("#go-top").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	$("#go-fju").click(function(event) {
		event.preventDefault();
		$("#main-content").html("");
		$("#main-content").append('<a id="university-btn" onclick="goUniversity()" href="#" data-role="button">表特大學專頁</a>');
		$("#university-btn").button();
		//$("#university-btn").button("enable");
		jsonGet("https://mywebservice.info/beautyUniversity/data_out.php?school=FJU");
	});
});

function goUniversity() {
	$("#main-content").html("");
	$("#main-content").append('<a id="go-fju" href="#" data-role="button">表特輔大專頁</a>');
	jsonGet("https://mywebservice.info/beautyUniversity/data_out.php?school=university");
}

function jsonGet(url) {
	$.getJSON(url, function(data) {
		var str = "";
		for (var i = data.length - 1; i >= 0; i--) {
			if(data[i]["message"] === "" || data[i]["object_id"] === "") {
				continue;
			}

			str += "<a class='swipebox' href='" + "https://graph.facebook.com/" + data[i]["object_id"] + "/picture?type=normal" +"'>";
			str += "<img class='imagelightbox shadow-img shadow-img-size' data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type=thumbnail"+ "'>";
			str += "</a>";
		}

		$("#main-content").append(str);
	 });
}