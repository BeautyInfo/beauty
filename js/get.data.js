$(function() {
	if(window.location.protocol === "https:") {
		location.href = "http://mywebservice.info/beauty/";
	}
	
	var url = "http://mywebservice.info/beautyUniversity/data_out/school/university";
	$( '.swipebox' ).swipebox();
	jsonGet(url);
	getCollegeProcess();
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
			url = "http://mywebservice.info/beautyUniversity/data_out/school/FJU";
		}
		else {
			$("#go-school-btn").text("表特輔仁");
			$("#fans-page-name").text("表特大學");
			url = "http://mywebservice.info/beautyUniversity/data_out/school/university";
		}
		jsonGet(url);
	});

	$("#highchart-btn").click(function(event) {
		event.preventDefault();

	});
});

function mouseEnter(object_id) {
	console.log("mouseEnter");
	$("#" + object_id).css("width", "600px");
	$("#" + object_id).css("height", "600px");
}

function mouseLeave(object_id) {
	console.log("mouseLeave");
	$("#" + object_id).css("width", "100px");
	$("#" + object_id).css("height", "100px");
}

function jsonGet(url) {
	$.getJSON(url, function(data) {
		var str = "";
		var j = 0;
		if(url.indexOf("university") !== -1) {
			for (var i = data.length - 1; i >= 0; i--) {
				if(data[i]["message"] === "" || data[i]["object_id"] === "") {
					continue;
				}

				str += "<a onmouseleave='mouseLeave(" + '"' + data[i]["object_id"] + '"' + ")' onmouseenter='mouseEnter(" + '"' + data[i]["object_id"] + '"' + ")' class='swipebox' href='" + "https://graph.facebook.com/" + data[i]["object_id"] + "/picture?type=normal" +"'>";
				str += "<img id="+ "'" + data[i]["object_id"]+ "'" +" class='imagelightbox shadow-img shadow-img-size' data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type=thumbnail"+ "'>";
				str += "</a>";
				j++;
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
				j++;
			}	
		}
		console.log(j);
		$("#img-contents").append(str);
	 });
}

function getCollegeProcess() {
	$.getJSON("http://mywebservice.info/beautyUniversity/data_out/school/colleges/university", function(data) {
		console.log(data);
	});
}

function processFJU(url) {

}