var elizabeth = new User("liza_sonny", "Elizabeth Sonny", "lizareji23@gmail.com", "liz@2017", "Software Engineer");
var images = [];

function displayUserInfo(user) {
	document.getElementById("user-name").innerHTML = user.userName;
	document.getElementById("name").innerHTML = user.name;
	document.getElementById("description").innerHTML = user.description;
}

function getUserImages() {

	service.getImages(function (data) {
		var flickrImages = data["items"];
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

		displayImages(images);
		$("#loader").removeClass("show");
	});
}

function displayImages(images) {
	var imageHTML = ""
	for (var i = 0; i < images.length; i++) {
		var image = images[i];
		imageHTML += "<li><img src='" + image.url + "'></li>";
		$("#images-array").html(imageHTML);
		
	}
}

displayUserInfo(elizabeth);
getUserImages();
