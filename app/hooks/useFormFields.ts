import countries from 'world-countries';
import { getFormField } from '../actions/getModuleLists';

const formattedCountries = countries.map((country) => ({
	value: country.cca2,
	label: country.name.common,
	flag: country.flag,
	latlng: country.latlng,
	region: country.region
}));

const useFormFields = async () => {
	const getAll = await getFormField();
	//const getAll = () => formattedCountries;

	const getByModule = (name: string) => {
		return getAll.find((item) => item.name === name);
	};

	return {
		getAll,
		getByModule
	};
};

export default useFormFields;
