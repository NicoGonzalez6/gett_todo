export interface buttonI {
	children: any;
	onClick?: () => void;
	btnSyze?: 'sm' | 'md' | 'lg' | 'full';
	btnType?: 'primary' | 'secundary';
	isLoading?: boolean;
}
