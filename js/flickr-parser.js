function FlickrParser() {
	
	this.parse = function (flickrJsonResponse) {

		var images = []
		var flickrImages = flickrJsonResponse["items"];
		for (var i = 0; i < flickrImages.length; i++) {
			var flickrImage = flickrImages[i];

			var title = flickrImage["title"];
			var url = flickrImage["media"]["m"];
			var dateTaken = flickrImage["date_taken"]; 
			var description = flickrImage["description"];
			var datePublished = flickrImage["published"];
			var tags = flickrImage["tags"];
			var image = new Image(title, url, dateTaken, description, datePublished, tags);

			images.push(image);
		}

		return images;
	}	
}