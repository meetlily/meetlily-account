'use client';
import React, { useState } from 'react';

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
	console.log(values);
	return (
		<div className="flex flex-col gap-4 px-4 h-screen relative">
			{/* <FormRenderFields fields={formfields} values={values} fixed={true} /> */}
		</div>
	);
};

export default FormPage;
