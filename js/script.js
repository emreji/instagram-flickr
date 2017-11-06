var elizabeth = User("liza_sonny", "Elizabeth Sonny", "lizareji23@gmail.com", "liz@2017", "Software Engineer");

document.getElementById("user-name").innerHTML = elizabeth.userName;
document.getElementById("name").innerHTML = elizabeth.name;
document.getElementById("description").innerHTML = elizabeth.description;

var images = [];

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
		var image = Image(title, url, dateTaken, description, datePublished, tags);

		images.push(image);
	}

	displayImages(images)
});


function displayImages(images) {
	var imageHTML = ""
	for (var i = 0; i < images.length; i++) {
		var image = images[i];
		imageHTML += "<li><img src='" + image.url + "'></li>";
		$("#images-array").html(imageHTML);
	}
}
