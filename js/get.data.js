$(function() {
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
	
	$(".shadow-img-size").mouseenter(function() {
		$(".shadow-img-size").css('width', "0px");
		$(".shadow-img-size").css('height', "0px");
	});
	
	$(".shadow-img-size").mouseleave(function() {
		$(".shadow-img-size").css('width', "100px");
		$(".shadow-img-size").css('height', "100px");
	});
});

function jsonGet(url) {
	$.getJSON(url, function(data) {
		var str = "";
		var j = 0;
		if(url.indexOf("university") !== -1) {
			for (var i = data.length - 1; i >= 0; i--) {
				if(data[i]["message"] === "" || data[i]["object_id"] === "") {
					continue;
				}

				str += "<a class='swipebox' href='" + "https://graph.facebook.com/" + data[i]["object_id"] + "/picture?type=normal" +"'>";
				str += "<img class='imagelightbox shadow-img shadow-img-size' data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type=thumbnail"+ "'>";
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
	$.getJSON("https://mywebservice.info/beautyUniversity/colleges/university", function(data) {
		console.log(data);
	});
}

function processFJU(url) {

}