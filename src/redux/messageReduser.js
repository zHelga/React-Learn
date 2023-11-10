const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
	dialogs : [
		{id: 1, name: 'Olya'},
		{id: 2, name: 'Vanea'},
		{id: 3, name: 'Dalia'},
		{id: 4, name: 'katea'},
	],
	messages : [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'Nice to meet you'},
		{id: 4, message: 'Nice to meet you'},
	],
	newMessageText: 'text me...',
}

const messageReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_NEW_MESSAGE:
			let newMessage = {
				id: 5,
				message: state.newMessageText,
			};
		
			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;

		case UPDATE_NEW_MESSAGE: 
			state.newMessageText = action.newText;

		default:
			return state;
	}
}
export const addMessageActionCreator = () => {
	return {
		type: ADD_NEW_MESSAGE,
	}
}

export const updateNewMessageActionCreator = (text) => {
	return {type: UPDATE_NEW_MESSAGE, newText: text}
}

export default messageReducer;