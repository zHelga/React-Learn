import messageReducer from "./messageReduser";
import postReducer from "./postsReducer";

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
	_state:  {
		postsPage : {
			posts: [
				{id: 1, message: 'Hello', likes: 0},
				{id: 2, message: 'How are you?', likes: 4},
				{id: 3, message: 'I\'m starting learn React', likes: 15},
				{id: 4, message: 'Nice to meet you', likes: 20,}
			],

			newPostText: 'New Post...',
		},
		messagesPage: {
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
		},
		sidebar: {
			friends : [
				{id: 1, name: 'Vanea'},
				{id: 2, name: 'Dalia'},
				{id: 3, name: 'Katea'},
			],
		}
	},

	getState() {
		return this._state;
	},
	
	_callSubscriber() {
		console.log('Changed');
	},

	subscribe(observer) {
			this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.postsPage = postReducer(this._state.postsPage, action);
		this._state.messagesPage = messageReducer(this._state.messagesPage, action);

		this._callSubscriber(this._state);
	},
}


window.state = store;
export default store;