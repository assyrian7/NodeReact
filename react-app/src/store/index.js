import {createStore} from 'redux'
import reducer from '../reducer';

var defaultState = {
	text: 'Hey',
	user: {
		username: '',
		password: ''
	}
}

export var store = (initialState=defaultState) => {
	return createStore(reducer, initialState);
}