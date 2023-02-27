import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    padding: 0;
	margin: 0;
}

h1,h2,p{
	margin: 0;
	padding: 0;
}

input,select,option{
	  font-family: 'Montserrat', sans-serif;
}

`;

export const defaultTheme: DefaultTheme = {
	colors: {
		primary: '#63a105',
		background: '#eeeeee',
		white: '#fff',
		black: '#000',
		error: '#e34036',
	},
	radius: {
		sm: '8px',
		md: '10px',
		lg: '14px',
	},
	spacing: {
		sm: '6px',
		md: '10px',
		lg: '15px',
		xl: '24px',
	},
	breakpoints: {
		sm: '768px',
		md: '998px',
		lg: '1250px',
	},
	transitions: {
		sm: '0.1s ease-in-out',
		md: '0.2s ease-in-out',
		lg: '0.3s ease-in-out',
	},
};
