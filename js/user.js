function User(userName, name, emailAddress, password, description) {

	this.id = createID();
	this.userName = userName;
	this.name = name;
	this.password = password;
	this.description = description;
	this.emailAddress = emailAddress;
	this.joinedDate = new Date()
}

function createID() {
	return 1;
}


