var modal = document.getElementById("myModal");
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
		imageHTML += '<li><img src="' + image.url + '" onclick="showModalWithIndex(' + i + ')"></li>';
		$("#images-array").html(imageHTML);
	}
}

function showModalWithIndex(imageIndex) {
	var modalImage = document.getElementById("modalImage");

	modal.style.display = "block";
    modalImage.src = images[imageIndex].url;
    $("body").css("overflow", "hidden");
}

function showModalWithImageId(imageId) {
	var img = document.getElementById(imageId);
	var modalImage = document.getElementById("modalImage");

	img.onclick = function() {
		modal.style.display = "block";
	    modalImage.src = this.src;
	    $("body").css("overflow", "hidden");
	}
}

function configureModal() {
	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
		modal.style.display = "none";
		$("body").css("overflow", "auto");
	}

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	        $("body").css("overflow", "auto");
	    }
	}

}

configureModal();
showModalWithImageId("profile-image");
showModalWithImageId("banner-image");
displayUserInfo(elizabeth);
getUserImages();
