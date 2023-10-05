export interface Instruction {
	description?: string;
	code?: string;
}

export interface Step {
	title: string;
	instructions: Instruction[];
}

export interface Guide {
	title: string;
	description: string;
	steps: Step[];
	categories: string[]; // This is the new field
}
