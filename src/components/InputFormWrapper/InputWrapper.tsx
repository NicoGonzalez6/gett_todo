import React from 'react';
import styled from 'styled-components';
import { Text } from '..';
import { inputWrapperI } from './types';

export const InputWrapper: React.FC<inputWrapperI> = ({
	id,
	name,
	onChange,
	onBlur,
	value,
	placeholder,
	label,
	error,
	errorMsg,
	type,
}) => {
	return (
		<StyledInput error={error}>
			<label>{label}</label>
			<input
				onBlur={onBlur}
				type={type}
				id={id}
				onChange={onChange}
				value={value}
				name={name}
				placeholder={placeholder}
			/>
			{error && (
				<Text textType='message' textColor='error'>
					{errorMsg as string}
				</Text>
			)}
		</StyledInput>
	);
};

const StyledInput = styled.div<inputWrapperI>`
	width: 100%;
	gap: ${({ theme }) => theme.spacing.sm};
	display: flex;
	flex-direction: column;

	label {
		font-size: 12px;
		color: ${({ theme, error }) => {
			if (error) {
				return `  ${theme.colors.error}`;
			} else {
				return 'rgb(73, 80, 87)';
			}
		}};
	}

	input {
		width: 100%;
		outline: none;
		border: ${({ theme, error }) => {
			if (error) {
				return `1px solid ${theme.colors.error}`;
			} else {
				return '1px solid rgb(134, 142, 150)';
			}
		}};
		border-radius: ${({ theme }) => theme.radius.sm};
		height: 44px;
		padding: ${({ theme }) => theme.spacing.sm};
		box-sizing: border-box;

		::placeholder {
			font-family: 'Montserrat', sans-serif;
		}
	}
`;
