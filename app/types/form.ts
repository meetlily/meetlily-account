export type FormField = {
	name: string;
	label: string;
	type: string;
	value?: any;
	placeholder?: string;
	required?: boolean;
	displayCondition?: string;
	options?: string[];
	fields?: FormField[];
};

export type FormFieldGroup = {
	label: string;
	group: string;
	fields: FormField[];
};

export default FormField;
