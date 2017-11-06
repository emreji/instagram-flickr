var elizabeth = User("liza_sonny", "Elizabeth Sonny", "lizareji23@gmail.com", "liz@2017", "Software Engineer")

document.getElementById("user-name").innerHTML = elizabeth.userName
document.getElementById("name").innerHTML = elizabeth.name;
document.getElementById("description").innerHTML = elizabeth.description;



service.getImages(function (data) {
	var images = data["items"];
	for (var i = 0; i < images.length; i++) {
		var image = images[i];
		var media = image["media"]
		console.log(media["m"]);
	}
	
});
