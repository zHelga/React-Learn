import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

const Navbar = (props) => {
	let friendsElements = props.state.friends.map(f => <Friend name={f.name}/>)
	return (
		<div className={s.navbar}>
			<nav className={s.nav}>
				<div className={`${s.item} ${s.active}`}>
					<NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.link }>Profile</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/message' className = { navData => navData.isActive ? s.active : s.link }>Message</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/news' className = { navData => navData.isActive ? s.active : s.link }>News</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/music' className = { navData => navData.isActive ? s.active : s.link }>Music</NavLink>
				</div>
			</nav>
			<div className={s.friends}>
				<h2>Friends</h2>
				<div className={s.friends__items}>
					{friendsElements}
				</div>
				
			</div>
		</div>
		
	);
}

export default Navbar;