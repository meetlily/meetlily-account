'use client';
import { FormFieldGroup } from '@/app/types/form';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

interface OrganizationViewProps {
	groups: FormFieldGroup[];
}

const OrganizationView: React.FC<OrganizationViewProps> = ({ groups }) => {
	const [formData, setformData] = useState(groups);
	const [isLoading, setIsLoading] = useState(false);
	const params = useParams();
	const slug = params?.slug;

	return (
		<div className="p-8 space-y-4">
			{formData.map((g, i) => (
				<div key={i} className="space-y-2">
					<h2 className="text-2xl font-bold">{g.label}</h2>
					{g.fields?.map((f, index) => (
						<div key={index} className="flex flex-row items-start">
							<div className="font-semibold">{f.label}</div>
							<div className="ml-2">{f.value}</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default OrganizationView;
