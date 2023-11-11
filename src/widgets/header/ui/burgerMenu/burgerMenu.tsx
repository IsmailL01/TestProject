import React from 'react';
import Navbar from '../nav/Navbar';
import style from './style.module.scss';

const BurgerMenu = () => {
  
	return (
		<div className={style.burgerMenu}>
			<Navbar />
		</div>
	);
};

export default BurgerMenu;
