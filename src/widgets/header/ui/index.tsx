import { Navbar } from './nav';
import { Logo } from './logo';
import React from 'react';
import styles from './style.module.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<Navbar />
		</div>
	);
};

export { Header };
