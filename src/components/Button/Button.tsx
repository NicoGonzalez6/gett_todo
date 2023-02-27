import React from 'react';
import styled from 'styled-components';
import { Text } from '..';
import { buttonI } from './types';
import { ClipLoader } from 'react-spinners';

export const Button: React.FC<buttonI> = ({
	children,
	onClick,
	btnSyze = 'full',
	isLoading,
	btnType = 'primary',
}) => {
	return (
		<StyledButton onClick={onClick} btnSyze={btnSyze} btnType={btnType}>
			{isLoading ? (
				<ClipLoader
					color={'#fff'}
					loading={isLoading}
					size={20}
					aria-label='Loading Spinner'
				/>
			) : (
				<Text textType='text' textColor='white'>
					{children}
				</Text>
			)}
		</StyledButton>
	);
};

const StyledButton = styled.div<buttonI>`
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${({ theme }) => theme.radius.md};
	height: 40px;
	cursor: pointer;
	transition: ${({ theme }) => theme.transitions.sm};

	&:hover {
		filter: brightness(90%);
	}

	background-color: ${({ btnType, theme }) => {
		switch (btnType) {
			case 'primary':
				return `${theme.colors.primary}`;
			case 'secundary':
				return `${theme.colors.error}`;
		}
	}};

	width: ${({ btnSyze }) => {
		switch (btnSyze) {
			case 'full':
				return '100%';
			case 'sm':
				return '180px';
			case 'md':
				return '200px';
			case 'lg':
				return '240px';
		}
	}};
`;
