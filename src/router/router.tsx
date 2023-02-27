import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import { PrivateRoutes } from '../components';
import { navigationRoutes } from './navigation';
import { navigationRoutesI } from './types';

export const router = createBrowserRouter(
	createRoutesFromElements(
		navigationRoutes.map((route: navigationRoutesI, i) => {
			if (route.authRequired) {
				return (
					<Route
						path={route.path}
						key={i}
						element={
							<PrivateRoutes path={route.redirectUrl as string}>
								<route.Component />
							</PrivateRoutes>
						}
					/>
				);
			}

			return (
				<Route
					path={route.path}
					key={i}
					element={<route.Component />}
				/>
			);
		})
	)
);
