'use client';
import React, { useState } from 'react';

type Field = {
	label: string;
	name: string;
	type: string;
	placeholder: string;
};

type FormField = {
	label: string;
	group: string;
	fields: Field[];
};
interface GroupsFormProps {
	groups: FormField[];
}

const FormField: React.FC<GroupsFormProps> = ({ groups }) => {
	const [formState, setFormState] = useState(groups);
	return (
		<>
			{groups.map((group, index) => {
				<div key={index} className="flex flex-col">
					<div className="text-2xl">{group.group}</div>
					<div className="text-xl">{group.label}</div>
				</div>;
			})}
		</>
	);
};

export default FormField;
