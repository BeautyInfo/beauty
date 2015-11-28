$(function() {
	var url = "https://mywebservice.info/beautyUniversity/data_out.php?school=university";
	$( '.swipebox' ).swipebox();
	jsonGet(url);
	$(window).on('ajaxComplete', function() {
  		setTimeout(function() {
  			$(window).lazyLoadXT();
  		}, 50);
	});

	$("#go-top").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	$("#go-school-btn").click(function(event) {
		event.preventDefault();	
		$("#img-contents").html("");
		if($("#fans-page-name").text() === "表特大學") {
			$("#go-school-btn").text("表特大學");
			$("#fans-page-name").text("表特輔仁");
			url = "https://mywebservice.info/beautyUniversity/data_out.php?school=FJU";
		}
		else {
			$("#go-school-btn").text("表特輔仁");
			$("#fans-page-name").text("表特大學");
			url = "https://mywebservice.info/beautyUniversity/data_out.php?school=university";
		}
		jsonGet(url);
	});
});

function jsonGet(url) {
	$.getJSON(url, function(data) {
		var str = "";
		if(url.indexOf("university") !== -1) {
			for (var i = data.length - 1; i >= 0; i--) {
				if(data[i]["message"] === "" || data[i]["object_id"] === "") {
					continue;
				}

				str += "<a class='swipebox' href='" + "https://graph.facebook.com/" + data[i]["object_id"] + "/picture?type=normal" +"'>";
				str += "<img class='imagelightbox shadow-img shadow-img-size' data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type=thumbnail"+ "'>";
				str += "</a>";
			}
		}
		else {
			for (var i = 0; i < data.length; i++) {
				if(data[i]["message"] === "" || data[i]["object_id"] === "") {
					continue;
				}

				str += "<a class='swipebox' href='" + "https://graph.facebook.com/" + data[i]["object_id"] + "/picture?type=normal" +"'>";
				str += "<img class='imagelightbox shadow-img shadow-img-size' data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type=thumbnail"+ "'>";
				str += "</a>";
			}	
		}

		$("#img-contents").append(str);
	 });
}