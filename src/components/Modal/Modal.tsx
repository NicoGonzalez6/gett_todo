import React from 'react';
import styled from 'styled-components';
import { Text, Button } from '..';
import { modalI } from './types';

export const Modal: React.FC<modalI> = ({
	children,
	onConfirm,
	onCancel,
	title,
}) => {
	return (
		<StyledModal>
			<ModalContent>
				<ModalHeader>
					<Text textType='subtitle'>{title}</Text>
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
				<ModalFooter>
					<Button btnSyze='md' btnType='secundary' onClick={onCancel}>
						Cancelar
					</Button>
					<Button btnSyze='md' onClick={onConfirm}>
						Confirmar
					</Button>
				</ModalFooter>
			</ModalContent>
		</StyledModal>
	);
};

const StyledModal = styled.div`
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
	position: absolute;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 5000;
`;

const ModalContent = styled.div`
	width: 90%;
	height: auto;
	min-height: 150px;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.radius.md};
	padding: ${({ theme }) => theme.spacing.md};
	box-sizing: border-box;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 600px;
		height: auto;
		min-height: 150px;
	}
`;

const ModalHeader = styled.div`
	border-radius: ${({ theme }) => theme.radius.md};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
`;

const ModalBody = styled.div`
	min-height: 50px;
	height: auto;
	padding-bottom: ${({ theme }) => theme.spacing.lg};
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.lg};
`;

const ModalFooter = styled.div`
	border-radius: ${({ theme }) => theme.radius.md};
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 60px;
`;
