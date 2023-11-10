import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/postsReducer';


const MyPosts = (props) => {
	
	let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likes}/>)

	let newPost = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}
	let onPostChange = () => {
		let text = newPost.current.value;
		props.dispatch(updateNewPostActionCreator(text));
	}

	return (
				<div className={s.posts__block}>
					<h3>My Posts</h3>
					<div>
						<div>
							<textarea onChange={onPostChange} ref={newPost} value={props.newPostText}/>
						</div>
						<div>
							<button onClick={addPost}>Add</button>
						</div>
					</div>
					<div className={s.posts}>
						{postsElement}
					</div>
				</div>
	);
}

export default MyPosts;