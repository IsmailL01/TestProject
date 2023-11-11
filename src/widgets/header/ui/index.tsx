'use client';

import { Navbar } from './nav';
import { Logo } from './logo';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { sumAllThingInTheCard } from '../lib';

const Header = () => {
	const [count, setCount] = useState(0);

	function showFinishedPrice() {
		setCount(() => {
			return sumAllThingInTheCard(4, 2);
		});
	}

	return (
		<div className={styles.header}>
			<Logo />
			<button onClick={showFinishedPrice}>Click </button>
			<p>{count}</p>
			<Navbar />
		</div>
	);
};

export { Header };
