import { getPosts } from '@/features/post';
import { IPost } from '@/shared/types';
import React from 'react';
import style from './style.module.scss';

const PostContainer = () => {
	const data = getPosts();
	console.log(data);
	return (
		<div>
			<div className={style.container}></div>
		</div>
	);
};

export default PostContainer;
