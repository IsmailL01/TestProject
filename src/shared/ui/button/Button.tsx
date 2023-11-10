import React from 'react';

interface IButton {
	children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ children }) => {
	return <div>{children}</div>;
};

export default Button;
