const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
	posts: [
		{id: 1, message: 'Hello', likes: 0},
		{id: 2, message: 'How are you?', likes: 4},
		{id: 3, message: 'I\'m starting learn React', likes: 15},
		{id: 4, message: 'Nice to meet you', likes: 20,}
	],

	newPostText: 'New Post...',
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST:
			let newPost = {
				id: 5, 
				message: state.newPostText, 
				likes: 0,
			};
	
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
	
		case UPDATE_NEW_POST:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = () => {
	return {
		type: ADD_NEW_POST,
	}
}
export const updateNewPostActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST,
		newText: text,
	}
}
export default postsReducer;