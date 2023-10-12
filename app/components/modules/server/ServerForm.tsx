'use client';
import { FormFieldGroup } from '@/app/types/form';
import { Card } from 'flowbite-react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

interface ServerFormProps {
	serverData: FormFieldGroup[] | null;
}

const ServerForm: React.FC<ServerFormProps> = ({ serverData }) => {
	const [formData, setformData] = useState(serverData);
	const [isLoading, setIsLoading] = useState(false);
	const params = useParams();
	const slug = params?.slug;

	return (
		<div className="p-8 space-y-4">
			<Card className="bg-gray-50">
				<div className="flex flex-col items-center justify-center mx-auto mb-4 p-4">
					<div
						className="
                                grid
                                grid-cols-1
                                lg:grid-cols-2
                                gap-6
                            "
					>
						{formData?.map((g, i) => (
							<div key={i} className="w-full space-y-2">
								<h2 className="text-2xl font-bold">{g.label}</h2>
								{g.fields?.map((f, index) => (
									<div key={index} className="flex flex-col md:flex-row items-center justify-start">
										<div className="font-semibold w-full md:min-w-[240px] lg:max-w-[200px] xl:max-w-[300px]">
											{f.label}
										</div>
										<div className="w-full min-w-[340px] lg:max-w-[260px] md:min-w-[340px] lg:min-w-[300px] xl:min-w-[340px] xl:max-w-[340px] my-3">
											{f.type === 'text' && (
												<input
													className="w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
													type={f.type}
													name={f.name}
													value={f.value}
													placeholder={f.placeholder}
												/>
											)}
											{f.type === 'email' && (
												<input
													className="w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
													type={f.type}
													name={f.name}
													value={f.value}
													placeholder={f.placeholder}
												/>
											)}
											{f.type === 'number' && (
												<input
													className="w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
													type={f.type}
													name={f.name}
													value={f.value}
													placeholder={f.placeholder}
												/>
											)}
											{f.type === 'tel' && (
												<input
													className="w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
													type={f.type}
													name={f.name}
													value={f.value}
													placeholder={f.placeholder}
												/>
											)}
											{f.type === 'date' && (
												<input
													className="w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
													type={f.type}
													name={f.name}
													value={f.value}
													placeholder={f.placeholder}
												/>
											)}
											{f.type === 'textarea' && (
												<textarea
													className="w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
													name={f.name}
													value={f.value}
													placeholder={f.placeholder}
												/>
											)}
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ServerForm;
