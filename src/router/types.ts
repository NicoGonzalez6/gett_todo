export interface navigationRoutesI {
	label: string;
	Component: React.FC;
	authRequired: boolean;
	path: string;
	redirectUrl?: string;
}
