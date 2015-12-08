$(function() {
	if(window.location.protocol === "https:") {
		location.href = "http://mywebservice.info/beauty/";
	}
	
	var url = "http://mywebservice.info/beautyUniversity/v1/school/university/analytic/false";
	
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
			url = "http://mywebservice.info/beautyUniversity/v1/school/FJU/analytic/false";
		}
		else {
			$("#go-school-btn").text("表特輔仁");
			$("#fans-page-name").text("表特大學");
			url = "http://mywebservice.info/beautyUniversity/v1/school/university/analytic/false";
		}
		jsonGet(url);
	});

	$("#highchart-btn").click(function(event) {
		event.preventDefault();
		var url = "";
		
		$("#img-contents").html("");
		$("#chart-container").html("");
		
		if($("#fans-page-name").text() === "表特輔仁") {
			url = "http://mywebservice.info/beautyUniversity/v1/school/FJU/analytic/true";
		}
		
		if($("#fans-page-name").text() === "表特大學") {
			url = "http://mywebservice.info/beautyUniversity/v1/school/university/analytic/true";
		}
		
		$.getJSON(url, function(data) {
			//console.log($.parseJSON(data));
			//using high chart
			$('#chart-container').highcharts({
				chart: {
					type: 'pie'
				},
					title: {
					text: $("#fans-page-name").text()
				},
				tooltip: {
					pointFormat: '人數: <b>{point.count}人</b>'
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							format: '<b>{point.name}</b>: {point.percentage:.1f} %',
							style: {
								color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
							}
						}
					}
				},
				series: [{
					name: 'Analytic',
					colorByPoint: true,
					data: data
				}]
			});
		});
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

				str += "<a title='" + data[i]["message"] + "' class='swipebox' href='" + "https://graph.facebook.com/" + data[i]["object_id"] + "/picture?type=normal" +"'>";
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

				str += "<a title='" + data[i]["message"] + "' class='swipebox' href='" + "https://graph.facebook.com/" + data[i]["object_id"] + "/picture?type=normal" +"'>";
				str += "<img class='imagelightbox shadow-img shadow-img-size' data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type=thumbnail"+ "'>";
				str += "</a>";
				j++;
			}	
		}
		$("#img-contents").append(str);
	 });
}