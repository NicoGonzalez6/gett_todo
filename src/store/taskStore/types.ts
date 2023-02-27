import { taskI } from '../../services';

export interface initialTaskStateI {
	isLoading: boolean;
	tasks: taskI[] | undefined;
	singleTask: any;
}
