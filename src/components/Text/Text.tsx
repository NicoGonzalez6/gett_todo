import React from 'react';
import styled from 'styled-components';
import { textI } from './types';

export const Text: React.FC<textI> = ({
	children,
	textType,
	textColor = 'black',
}) => {
	return (
		<StyledText textType={textType} textColor={textColor}>
			{children}
		</StyledText>
	);
};

const StyledText = styled.p<textI>`
	font-size: ${({ textType }) => {
		switch (textType) {
			case 'title':
				return '30px';
			case 'subtitle':
				return '20px';
			case 'text':
				return '16px';
			case 'message':
				return '12px';
		}
	}};

	color: ${({ textColor, theme }) => {
		switch (textColor) {
			case 'white':
				return theme.colors.white;
			case 'black':
				return theme.colors.black;
			case 'error':
				return theme.colors.error;
		}
	}};

	letter-spacing: ${({ textType }) => {
		switch (textType) {
			case 'title':
				return '.5px';
		}
	}};
`;
