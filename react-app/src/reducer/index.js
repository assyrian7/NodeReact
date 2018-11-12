module.exports = (state={}, action) => {
	switch(action.type){
		case 'USER_LOGIN':
			return Object.assign({}, state, {
				user: action.user
			})
		case 'CHANGE_TEXT':
			return {
				text: action.text
			}
		default:
			return state;
	}
}