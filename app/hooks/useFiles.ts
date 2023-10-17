import { getFilesByDirectory } from '../actions/getDirectoryContent';

const files: any = await getFilesByDirectory();

const useFiles = () => {
	const getAll = files;
	const getByValue = (name: string) => {
		return files.find((item: any) => item?.name === name);
	};
	return {
		getAll,
		getByValue
	};
};

export default useFiles;
