$(function() {
	$.getJSON("https://mywebservice.info/beautyUniversity/data_out.php", function(data) {
		var str = "";
		for (var i = data.length - 1; i >= 0; i--) {
			if(data[i]["message"] === "" || data[i]["object_id"] === "") {
				continue;
			}

			str += "<a href='" + "https://graph.facebook.com/" + data[i]["object_id"] + "/picture?type='normal'" +"'";
			str += "<img class='shadow-img shadow-img-size' data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type='thumbnail'"+ "'>";
			str += "</a>";
		}

		$(".popup-gallery").append(str);
	 });

	$(window).on('ajaxComplete', function() {
  		setTimeout(function() {
  			$(window).lazyLoadXT();
  		}, 50);

  		/*
  		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
		*/
	});
});