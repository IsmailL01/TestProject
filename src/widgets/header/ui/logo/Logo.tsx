import React from 'react';
import Image from 'next/image';
import logo from '@/public/svg/Logo.svg';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href={'/home'}>
			<Image src={logo} alt='Logo of our site' />;
		</Link>
	);
};

export default Logo;
