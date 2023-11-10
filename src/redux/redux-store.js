import {combineReducers ,legacy_createStore as createStore} from 'redux';
import postsReducer from './postsReducer';
import messageReducer from './messageReduser';
import sidebarReducer from './sidebarReducer';


let reducers = combineReducers({
	postsPage: postsReducer,
	messagesPage: messageReducer,
	sidebar: sidebarReducer,
})

let store = createStore(reducers);

export default store;