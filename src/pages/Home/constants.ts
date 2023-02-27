import * as Yup from 'yup';

export const newTaskSchema = Yup.object().shape({
	userId: Yup.number().required('Campo Requerido'),
	title: Yup.string().required('Campo requerido'),
});
