'use client';
import React, { useState } from 'react';

interface Field {
	Label: string;
	Type: string;
	Value: string;
}

interface Section {
	Fields: Field[];
}

interface ResumeFormProps {
	formStructure: { [key: string]: Section };
}

const ResumeForm: React.FC<ResumeFormProps> = ({ formStructure }) => {
	const [formState, setFormState] = useState(formStructure);

	const handleInputChange = (sectionKey: string, fieldIndex: number, newValue: string) => {
		const newFormState = { ...formState };
		newFormState[sectionKey].Fields[fieldIndex].Value = newValue;
		setFormState(newFormState);
	};

	return (
		<form className="p-8 space-y-4">
			{Object.keys(formState).map((sectionKey) => (
				<div key={sectionKey} className="space-y-2">
					<h2 className="text-2xl font-bold">{sectionKey}</h2>
					{formState[sectionKey].Fields.map((field, index) => (
						<div key={index} className="flex flex-col">
							<label className="mb-1">{field.Label}</label>
							<input
								type={field.Type}
								value={field.Value}
								onChange={(e) => handleInputChange(sectionKey, index, e.target.value)}
								className="p-2 border rounded-md"
							/>
						</div>
					))}
				</div>
			))}
			<button type="submit" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md">
				Submit
			</button>
		</form>
	);
};

export default ResumeForm;
