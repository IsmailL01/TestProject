'use client';
import { ArrayOfPaths } from '@/shared/config';
import React from 'react';
import style from './style.module.scss';
import { Button } from '@/shared/ui';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className=''>
			<ul className={style.navbarItems}>
				{ArrayOfPaths.map((item) => {
					return (
						<Link className={style.linkItem} href={item.href} key={item.href}>
							<Button>
								<li>{item.href}</li>
							</Button>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
