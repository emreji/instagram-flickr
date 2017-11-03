function User(userName, name, emailAddress, password, description) {

	var user = {
		id: createID(),
		userName: userName,
		password: password,
		emailAddress: emailAddress,
		name: name,
		description: description,
		joinedDate: new Date()
	}

	return user;
}

function createID() {
	return 1;
}
