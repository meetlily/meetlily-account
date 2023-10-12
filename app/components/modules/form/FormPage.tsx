'use client';
import React, { useState } from 'react';
import FormRenderFields from './FormRenderFields';

interface FormData {
	[fieldName: string]: string | number;
}
interface SelectData {
	[fieldName: string]: string | number;
}
interface FormPageProps {
	formfields: any;
	values: FormData;
}

const FormPage: React.FC<FormPageProps> = ({ formfields, values }) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className="flex flex-col gap-4 px-4">
			<FormRenderFields fields={formfields} values={values} />
		</div>
	);
};

export default FormPage;
