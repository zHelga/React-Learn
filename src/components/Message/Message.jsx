import React from 'react';
import s from './Message.module.css';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialogs/Dialogs';
import MessageItem from './MessagesPage/MessagesPage';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messageReduser';


const Message = (props) => {
	
	let dialogsElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)

	let messagesElements = props.state.messages.map(m => <MessageItem message={m.message}/>)
	let newMessage = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}

	let onMessageChange = () => {
		let text = newMessage.current.value;
		let action = updateNewMessageActionCreator(text)
		props.dispatch(action);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs__item}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div className={s.messages__items}>
					{ messagesElements}
				</div>
				<div className={s.messages__input}>
					<textarea onChange={onMessageChange} ref={newMessage} value={props.state.newMessageText} ></textarea>
					<button onClick={addMessage}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Message;