var service = {}

service.getImages = function (callBack) {
	self.callBack = callBack;
	var apiUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=dog&format=json';

	$.ajax({
		url: apiUrl,
		dataType: "jsonp"
	});
}

function jsonFlickrFeed(data) {
	self.callBack(data);
}
