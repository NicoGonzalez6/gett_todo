import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';

const sessionSlice = createSlice({
	name: 'session',
	initialState: initialState,
	reducers: {
		login: (state) => {
			state.isLoggedIn = true;
		},
	},
});

export const sessionReducer = sessionSlice.reducer;

export const { login } = sessionSlice.actions;
