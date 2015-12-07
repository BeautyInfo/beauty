$(function() {
	if(window.location.protocol === "https:") {
		location.href = "http://mywebservice.info/beauty/";
	}
	
	var url = "http://mywebservice.info/beautyUniversity/data_out/school/university";
	
	$( '.swipebox' ).swipebox();
	if ( $.swipebox.isOpen ) {
		// do stuff
		console.log($("img[name='swipebox-img']").attr('src'));
	}
	
	/*
		$("img[src*='normal']").captionjs({
				'class_name'      : 'captionjs', // Class name for each <figure>
				'schema'          : true,        // Use schema.org markup (i.e., itemtype, itemprop)
				'mode'            : 'stacked',   // default | stacked | animated | hide
				'debug_mode'      : false,       // Output debug info to the JS console
				'force_dimensions': true,        // Force the dimensions in case they cannot be detected (e.g., image is not yet painted to viewport)
				'is_responsive'   : false,       // Ensure the figure and image change size when in responsive layout. Requires a container to control responsiveness!
				'inherit_styles'  : false        // Have the caption.js container inherit box-model properties from the original image
			});
	*/
	
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
			url = "http://mywebservice.info/beautyUniversity/data_out/school/FJU";
		}
		else {
			$("#go-school-btn").text("表特輔仁");
			$("#fans-page-name").text("表特大學");
			url = "http://mywebservice.info/beautyUniversity/data_out/school/university";
		}
		jsonGet(url);
	});

	/*
	$("#highchart-btn").click(function(event) {
		event.preventDefault();
		var str = "";
		if($("#fans-page-name").text() === "表特輔仁") {
			str = "FJU";
		}
		else {
			str = "university";
		}
		$("#img-contents").html("");
		$("#chart-container").html("");
		
		//using high chart
		
		 $('#chart-container').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie'
			},
			title: {
				text: 'Browser market shares January, 2015 to May, 2015'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });
	});
	*/
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

function getAnalytic(url) {
	
}