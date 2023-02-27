import { useEffect, useState } from 'react';
import {
	Button,
	PageLayout,
	Table,
	Modal,
	InputWrapper,
	SelectInput,
} from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
	getAllTasks,
	deleteTask,
	editTask,
	getTask,
	newTask,
} from '../../store/taskStore/actions';
import React from 'react';
import { taskI } from '../../services';
import styled from 'styled-components';
import { AiOutlineCloseCircle, AiFillEdit } from 'react-icons/ai';

import { useFormik } from 'formik';
import { newTaskSchema } from './constants';

export const Home = () => {
	const { isLoading, tasks, singleTask } = useAppSelector(
		(state) => state.taskReducer
	);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>();
	const [showEditModal, setShowEditModal] = useState<boolean>();
	const [showCreateModal, setShowCreateModal] = useState<boolean>();
	const [selectedTask, setSelectedTask] = useState<number | undefined>(
		undefined
	);

	const editFormik = useFormik({
		initialValues: {
			userId: '',
			title: '',
			completed: '',
		},
		onSubmit: (values, { resetForm }) => {
			const { completed, title, userId, id } = singleTask[0];

			Dispatch(
				editTask({
					id: id,
					userId: values.userId || userId,
					completed: values.completed || completed,
					title: values.title || title,
				})
			);
			resetForm();
			editModalHandler();
		},
	});

	const createTaskFormik = useFormik({
		initialValues: {
			userId: '',
			title: '',
		},
		validationSchema: newTaskSchema,
		onSubmit: (values, { resetForm }) => {
			const lastTask = tasks?.at(-1);

			Dispatch(
				newTask({
					...values,
					completed: false,
					id: (lastTask?.id as number) + 1,
				})
			);
			resetForm();
			createModalHandler();
		},
	});

	const Dispatch = useAppDispatch();

	useEffect(() => {
		Dispatch(getAllTasks());
	}, []);

	const data = React.useMemo(
		() => tasks?.map((task) => task),
		[isLoading, tasks]
	);

	const columns: any = React.useMemo(
		() => [
			{
				Header: 'ID usuario',
				accessor: 'userId',
				width: 25,
			},
			{
				Header: 'Id',
				accessor: 'id',
				width: 25,
			},
			{
				Header: 'Titulo',
				accessor: 'title',
				width: 25,
			},
			{
				Header: 'Completadas',
				width: 25,
				Cell: ({ row }: any) => {
					return String(row.original.completed);
				},
			},

			{
				Header: 'Acciones',
				width: 25,
				Cell: ({ row }: any) => {
					return (
						<>
							<AiOutlineCloseCircle
								onClick={() => openDeleteModal(row.original.id)}
							/>
							<AiFillEdit
								onClick={() =>
									openEditModalHandler(row.original.id)
								}
							/>
						</>
					);
				},
			},
		],
		[]
	);

	const deleteModalHandler = (): void => setShowDeleteModal(!showDeleteModal);

	const openDeleteModal = (id: number) => {
		setSelectedTask(id);
		deleteModalHandler();
	};

	const deleteTaskHandler = (id: number) => {
		Dispatch(deleteTask(id));
		deleteModalHandler();
	};

	const editModalHandler = (): void => setShowEditModal(!showEditModal);

	const openEditModalHandler = (id: number): void => {
		setSelectedTask(id);
		Dispatch(getTask(id));
		editModalHandler();
	};

	const createModalHandler = (): void => setShowCreateModal(!showCreateModal);

	if (isLoading) {
		return (
			<PageLayout>
				<p>Cargando...</p>
			</PageLayout>
		);
	}

	const taskOptions = [
		{
			value: true,
			label: 'true',
		},
		{
			value: false,
			label: 'false',
		},
	];

	return (
		<PageLayout>
			<HomeLayout>
				{showDeleteModal && (
					<Modal
						title='¿Desea eliminar la siguiente tarea?'
						onCancel={deleteModalHandler}
						onConfirm={() =>
							deleteTaskHandler(selectedTask as number)
						}
					></Modal>
				)}
				{showEditModal && (
					<Modal
						title='¿Desea editar la siguiente tarea?'
						onCancel={editModalHandler}
						onConfirm={editFormik.handleSubmit}
					>
						<InputWrapper
							label={'ID usuario'}
							id={'userId'}
							name={'userId'}
							type={'text'}
							onChange={editFormik.handleChange}
							onBlur={editFormik.handleBlur}
							placeholder={singleTask[0].userId}
						/>
						<InputWrapper
							label={'Titulo'}
							id={'title'}
							name={'title'}
							type={'text'}
							onChange={editFormik.handleChange}
							onBlur={editFormik.handleBlur}
							placeholder={singleTask[0].title}
						/>
						<SelectInput
							label='Completo'
							options={taskOptions}
							onChange={editFormik.handleChange}
							id={'completed'}
							name={'completed'}
						></SelectInput>
					</Modal>
				)}

				{showCreateModal && (
					<Modal
						title='¿Desea agregar una nueva tarea?'
						onCancel={createModalHandler}
						onConfirm={createTaskFormik.handleSubmit}
					>
						<InputWrapper
							label={'ID usuario'}
							id={'userId'}
							name={'userId'}
							type={'text'}
							onChange={createTaskFormik.handleChange}
							error={
								createTaskFormik.errors.userId &&
								createTaskFormik.touched.userId
							}
							errorMsg={createTaskFormik.errors.userId}
						/>
						<InputWrapper
							label={'Titulo'}
							id={'title'}
							name={'title'}
							type={'text'}
							onChange={createTaskFormik.handleChange}
							error={
								createTaskFormik.errors.title &&
								createTaskFormik.touched.title
							}
							errorMsg={createTaskFormik.errors.title}
						/>
					</Modal>
				)}
				<div className='table-container'>
					<Button btnSyze='sm' onClick={createModalHandler}>
						Agregar Tarea
					</Button>
					<Table data={data as taskI[]} columns={columns} />
				</div>
			</HomeLayout>
		</PageLayout>
	);
};

const HomeLayout = styled.section`
	width: 100%;
	padding: ${({ theme }) => theme.spacing.sm};
	box-sizing: border-box;
	.table-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing.sm};

		svg {
			cursor: pointer;
			font-size: 16px;
			margin: ${({ theme }) => `0px ${theme.spacing.sm}`};
		}
	}
`;
