'use client';

import React from 'react';
import style from 'styled-components';

type IButton = {
	value: string;
	fontSize: string;
};

const Button = style.div<IButton>`
   font-size: ${(props) => props.fontSize};
   width: ${(props) => props.value || '30px'}
`;

const StyledComponent: React.FC<IButton> = ({ value, fontSize }) => {
	return (
		<Button fontSize={fontSize} value={value}>
			Hello
		</Button>
	);
};

export default StyledComponent;
