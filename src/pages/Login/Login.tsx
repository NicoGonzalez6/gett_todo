import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, Text, InputWrapper, PageLayout } from '../../components';
import { login } from '../../store/sessionStore/store';
import { useAppDispatch } from '../../store/store';
import {
	initialFormikValues,
	loginInitialValues,
	signInSchema,
} from './constants';
import { inputIndexT } from './types';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
	const Dispatch = useAppDispatch();
	const navigate = useNavigate();

	const Formik = useFormik({
		initialValues: initialFormikValues,
		validationSchema: signInSchema,
		onSubmit: (values) => {
			Dispatch(login());
			navigate('/');
		},
	});

	return (
		<PageLayout>
			<LoginLayout>
				<FormContainer>
					<div className='title-container'>
						<Text textType='title'>Inicia sesion</Text>
					</div>
					<div className='inputs-container'>
						{loginInitialValues.map((input, i) => {
							return (
								<InputWrapper
									key={i}
									placeholder={input.placeholder}
									label={input.label}
									id={input.title}
									name={input.title}
									type={input.type}
									onChange={Formik.handleChange}
									onBlur={Formik.handleBlur}
									value={
										Formik.values[
											input.title as inputIndexT
										]
									}
									error={
										Formik.errors[
											input.title as inputIndexT
										] &&
										Formik.touched[
											input.title as inputIndexT
										]
									}
									errorMsg={
										Formik.errors[
											input.title as inputIndexT
										]
									}
								/>
							);
						})}
					</div>
					<div className='button-container'>
						<Button onClick={Formik.handleSubmit} btnSyze='full'>
							Ingresar
						</Button>
					</div>
				</FormContainer>
			</LoginLayout>
		</PageLayout>
	);
};

const LoginLayout = styled.section`
	display: flex;
	justify-content: center;
	width: inherit;
	min-height: 100vh;
	height: auto;
`;

const FormContainer = styled.form`
	width: 100%;
	height: 380px;
	background-color: ${({ theme }) => theme.colors.white};
	margin-top: 100px;
	padding: ${({ theme }) => theme.spacing.lg};
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		border-radius: ${({ theme }) => theme.radius.lg};
		width: 400px;
	}

	.inputs-container {
		min-height: 50%;
		display: flex;
		gap: 20px;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding-top: ${({ theme }) => theme.spacing.md};
		padding-bottom: ${({ theme }) => theme.spacing.md};
	}

	.title-container,
	.button-container {
		height: 20%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
