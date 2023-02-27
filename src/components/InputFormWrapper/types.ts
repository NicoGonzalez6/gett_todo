export interface inputWrapperI {
	id?: string;
	name?: string;
	onChange?: any;
	onBlur?: any;
	value?: any;
	placeholder?: string;
	label?: string;
	error?: boolean | undefined | string;
	errorMsg?: string;
	type?: string;
}
