exports.login = (user) => {
	return {
		type: 'USER_LOGIN',
		user
	}
}
exports.changeText = (text) => {
	return {
		type: 'CHANGE_TEXT',
		text
	}
}