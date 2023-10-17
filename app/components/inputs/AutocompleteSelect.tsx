'use client';
import axios from 'axios';
import React, { useState } from 'react';
import Select from 'react-select';

const AutocompleteSelect: React.FC = () => {
	const [inputValue, setInputValue] = useState('');
	const [options, setOptions] = useState([]);

	const loadOptions = async (inputValue: string) => {
		try {
			const response = await axios.get(`http://localhost:3000/api/module/module?q=${inputValue}`);
		} catch (error) {
			console.error('Error loading options:', error);
		}
	};

	const handleInputChange = (newValue: string) => {
		setInputValue(newValue);
	};

	return (
		<Select
			options={options}
			onInputChange={handleInputChange}
			value={inputValue}
			isClearable
			placeholder="Search..."
		/>
	);
};

export default AutocompleteSelect;
