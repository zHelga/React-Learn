import React from 'react';
import s from './../Message.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

	let path = '/message/' + props.id;

	return (<div className={s.dialog}>
		<div className={s.avatar}></div>
		<NavLink to={path} className = { navData => navData.isActive ? s.active : s.link }>{props.name}</NavLink> 
	</div>)
}

export default Dialog;