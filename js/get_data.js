$(function() {
	$.getJSON("https://mywebservice.info/beautyUniversity/data_out.php", function(data) {
		var str = "";
		for (var i = data.length - 1; i >= 0; i--) {
			if(data[i]["message"] === "" || data[i]["object_id"] === "") {
				continue;
			}

			str += "<a name='lightbox' href='" + "https://graph.facebook.com/" + data[i]["object_id"] + "/picture?type=normal" +"'";
			str += "<img class='imagelightbox shadow-img shadow-img-size' data-src='"+"https://graph.facebook.com/"+ data[i]["object_id"] + "/picture?type=thumbnail"+ "'>";
			str += "</a>";
		}

		$("#main-content").append(str);
	 });

	$(window).on('ajaxComplete', function() {
  		setTimeout(function() {
  			$(window).lazyLoadXT();
  			//$( 'a[name="lightbox"]' ).imageLightbox();
  		}, 50);

  		//
	});
});