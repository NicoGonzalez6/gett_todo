import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles, defaultTheme } from './styles';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	</Provider>
);
