import 'styled-components';
import { colors, transitions, spacing, radius, breakpoints } from '.';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: colors;
		radius: radius;
		spacing: spacing;
		breakpoints: breakpoints;
		transitions: transitions;
	}
}
