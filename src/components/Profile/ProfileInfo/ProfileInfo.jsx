import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
				<div className={s.image}>
					<img src='https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/01/good-nature-homepage-hero_2-scaled.jpg'/>
				</div>
				<div className={s.description__block}>Avatar</div>
			</div>
	);
}

export default ProfileInfo;