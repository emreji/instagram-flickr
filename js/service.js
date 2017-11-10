var service = {}

service.getImages = function (keyword, callBack) {
	self.callBack = callBack;
	var apiUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + keyword + '&format=json';

	$.ajax({
		url: apiUrl,
		dataType: "jsonp"
	});
}

function jsonFlickrFeed(flickJsonResponse) {
	var flickrParser = new FlickrParser()
	var images = flickrParser.parse(flickJsonResponse);
	self.callBack(images);
}
