import React from 'react';
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
	return (
		<div className={s.friend}>
			<div className={s.avatar}></div>
			<div className={s.name}>
				{props.name}
			</div>
		</div>
	);
}

export default Friend;