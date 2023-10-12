'use client';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

interface Field {
	Label: string;
	Type: string;
	Value: string;
}

interface Section {
	Fields: Field[];
}

interface ResumeViewProps {
	formData: { [key: string]: Section };
}
interface Resume {
	id: number;
	firstName: string;
	lastName: string;
	email?: string;
	education: string;
	experience: string;
}
const ResumeView: React.FC<ResumeViewProps> = ({ formData }) => {
	const [resume, setResume] = useState<Resume | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const params = useParams();
	const slug = params?.slug;

	return (
		<div className="p-8 space-y-4">
			{Object.keys(formData).map((sectionKey) => (
				<div key={sectionKey} className="space-y-2">
					<h2 className="text-2xl font-bold">{sectionKey}</h2>
					{formData[sectionKey].Fields.map((field, index) => (
						<div key={index} className="flex flex-col">
							<span className="font-semibold">{field.Label}</span>
							<span>{field.Value}</span>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default ResumeView;
