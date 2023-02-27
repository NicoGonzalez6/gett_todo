import { createSlice } from '@reduxjs/toolkit';
import { getAllTasks, deleteTask, editTask, getTask, newTask } from './actions';
import { initialState } from './constants';

const taskSlice = createSlice({
	name: 'tasks',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllTasks.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllTasks.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.tasks = payload;
		});
		builder.addCase(getAllTasks.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(getTask, (state, { payload }) => {
			state.singleTask = state.tasks?.filter((task) => {
				if (task.id == payload) {
					return task;
				}
			});
		});
		builder.addCase(deleteTask, (state, { payload }) => {
			state.tasks = state.tasks?.filter((task) => {
				if (task.id != payload) {
					return task;
				}
			});
		});
		builder.addCase(editTask, (state, { payload }) => {
			state.tasks = state.tasks?.map((task) => {
				if (task.id == payload.id) {
					task = { ...payload };
				}
				return task;
			});
		});
		builder.addCase(newTask, (state, { payload }) => {
			let newTask = payload;
			if (state.tasks && state.tasks?.length > 0) {
				state.tasks = [...state.tasks, newTask];
			} else {
				state.tasks = [...newTask];
			}
		});
	},
});

export const taskReducer = taskSlice.reducer;
