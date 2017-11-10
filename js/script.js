var modal = document.getElementById("myModal");
var elizabeth = new User("liza_sonny", "Elizabeth Sonny", "lizareji23@gmail.com", "liz@2017", "Software Engineer");
var images = [];
var defaultImageKeyword = "flowers";

function displayUserInfo(user) {
	document.getElementById("user-name").innerHTML = user.userName;
	document.getElementById("name").innerHTML = user.name;
	document.getElementById("description").innerHTML = user.description;
}

function renderImages(images) {
	this.images = images;
	displayImages(images);
	$("#loader").removeClass("show");
}

function getUserImages() {
	service.getImages(defaultImageKeyword, renderImages);
}

function displayImages(images) {
	var imageHTML = "";
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

//implement search
function search() {
	var keyword = document.getElementById("search-input").value;
	service.getImages(keyword, renderImages);
}


configureModal();
showModalWithImageId("profile-image");
showModalWithImageId("banner-image");
displayUserInfo(elizabeth);
getUserImages();
