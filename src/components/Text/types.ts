export interface textI {
	children: string;
	textType: 'title' | 'subtitle' | 'text' | 'message';
	textColor?: 'black' | 'white' | 'error';
	placeholder?: string;
}
