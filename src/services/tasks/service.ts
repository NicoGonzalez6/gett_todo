import axios from 'axios';
import { taskI } from '.';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTasks = async (): Promise<taskI[] | []> => {
	let data: taskI[] | [] = [];
	try {
		data = await axios(URL).then((res) => res.data);
	} catch (error) {}

	return data;
};
