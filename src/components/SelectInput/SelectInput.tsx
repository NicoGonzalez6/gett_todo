import React from 'react';
import styled from 'styled-components';
import { selectInputI } from './types';

export const SelectInput: React.FC<selectInputI> = ({
	onChange,
	id,
	name,
	options,
	label,
}) => {
	return (
		<StyledInput>
			<label>{label}</label>
			<select onChange={onChange} id={id} name={name}>
				<option value={''}>Sin eleccion</option>
				{options?.map((option: any) => {
					return <option value={option.value}>{option.label}</option>;
				})}
			</select>
		</StyledInput>
	);
};

const StyledInput = styled.div`
	width: 100%;
	gap: ${({ theme }) => theme.spacing.sm};
	display: flex;
	flex-direction: column;

	label {
		font-size: 12px;
		color: 'rgb(73, 80, 87)';
	}

	select {
		width: 100%;
		outline: none;
		border-radius: ${({ theme }) => theme.radius.sm};
		height: 44px;
		padding: ${({ theme }) => theme.spacing.sm};
		box-sizing: border-box;
	}
`;
