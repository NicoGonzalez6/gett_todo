import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTasks } from '../../services';
import { createAction } from '@reduxjs/toolkit';

export const getTask = createAction<number>('getTask');
export const deleteTask = createAction<number>('deleteTask');
export const editTask = createAction<any>('editTask');
export const newTask = createAction<any>('newTask');

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', async () => {
	try {
		return await getTasks().then((res) => res);
	} catch (error) {
		console.log(error);
	}
});
