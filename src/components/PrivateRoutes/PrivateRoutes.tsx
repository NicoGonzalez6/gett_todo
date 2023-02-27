import React from 'react';
import { useAppSelector } from '../../store/store';
import { privateRoutesI } from './types';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes: React.FC<privateRoutesI> = ({ children, path }) => {
	const { isLoggedIn } = useAppSelector((state) => state.sessionReducer);

	if (!isLoggedIn) {
		return <Navigate to={path} />;
	}
	return children;
};
