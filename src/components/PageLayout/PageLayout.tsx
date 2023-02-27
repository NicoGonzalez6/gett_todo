import React from 'react';
import styled from 'styled-components';
import { pageLayoutI } from './types';

export const PageLayout: React.FC<pageLayoutI> = ({ children }) => {
	return <Layout>{children}</Layout>;
};

const Layout = styled.main`
	background-color: ${({ theme }) => theme.colors.background};
	width: 100%;
	height: auto;
	min-height: 100vh;
`;
