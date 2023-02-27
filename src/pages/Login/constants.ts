import { initialValuesI } from './types';
import * as Yup from 'yup';

export const initialFormikValues: initialValuesI = {
	email: '',
	password: '',
};

export const loginInitialValues = [
	{
		placeholder: 'Email',
		title: 'email',
		label: 'Ingresa tu email',
		type: 'text',
	},
	{
		placeholder: 'Contraseña',
		title: 'password',
		label: 'Ingresa tu contraseña',
		type: 'password',
	},
];

export const signInSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.oneOf(['geet@test.com'])
		.required('Por favor, integresa tu correo'),
	password: Yup.string()
		.oneOf(['contraseña'])
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Por favor, integresa tu contraseña'),
});
