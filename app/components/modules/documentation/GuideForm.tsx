'use client';
import { Guide, Step } from '@/app/types';
import { ChangeEvent, FC, useState } from 'react';

const GuideForm: FC<{ guide: Guide }> = ({ guide }) => {
	const [formState, setFormState] = useState<Guide>(guide);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		});
	};

	const handleStepsChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
		const newSteps = [...formState.steps];
		const name = event.target.name as keyof Step;

		if (name in newSteps[index] && typeof newSteps[index][name] === 'string') {
			newSteps[index][name as 'title'] = event.target.value;
			setFormState({
				...formState,
				steps: newSteps
			});
		}
	};

	const handleInstructionsChange = (
		event: ChangeEvent<HTMLTextAreaElement>,
		stepIndex: number,
		instructionIndex: number
	) => {
		const newSteps = [...formState.steps];
		newSteps[stepIndex].instructions[instructionIndex].description = event.target.value;
		setFormState({
			...formState,
			steps: newSteps
		});
	};

	return (
		<form className="space-y-4">
			<label className="block">
				<span className="text-gray-700">Title:</span>
				<input
					type="text"
					defaultValue={guide.title}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
				/>
			</label>
			<label className="block">
				<span className="text-gray-700">Description:</span>
				<textarea
					defaultValue={guide.description}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
				/>
			</label>
			{guide.steps.map((step, index) => (
				<div key={index} className="space-y-4">
					<label className="block">
						<span className="text-gray-700">Step Title:</span>
						<input
							type="text"
							defaultValue={step.title}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
						/>
					</label>
					{step.instructions.map((instruction, i) => (
						<label key={i} className="block">
							<span className="text-gray-700">Instruction:</span>
							<textarea
								defaultValue={instruction.description}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
							/>
						</label>
					))}
				</div>
			))}
			<label className="block">
				<span className="text-gray-700">Categories:</span>
				<input
					type="text"
					defaultValue={guide.categories.join(', ')}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
				/>
			</label>
			<input
				type="submit"
				value="Submit"
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
			/>
		</form>
	);
};

export default GuideForm;
