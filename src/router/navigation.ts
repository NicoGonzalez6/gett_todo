import { Login, Home } from '../pages';
import { navigationRoutesI } from './types';

export const navigationRoutes: navigationRoutesI[] = [
	{
		label: 'Login',
		Component: Login,
		path: '/login',
		authRequired: false,
	},
	{
		label: 'Home',
		Component: Home,
		authRequired: true,
		path: '/',
		redirectUrl: '/login',
	},
];
