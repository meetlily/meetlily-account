export type FormField = {
	name: string;
	label: string;
	type: string;
	value?: string | number;
	placeholder?: string;
	required?: boolean;
	displayCondition?: string;
	options?: string[];
};

export type FormFieldGroup = {
	label: string;
	group: string;
	fields: FormField[];
};
