'use client';

import modules from '@/data/modules.json';
import { Badge, Button, Checkbox, Table } from 'flowbite-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import IconComponent from '../icons/IconComponent';
import ModulesHeader from './ModulesHeader';
interface FormData {
	[fieldName: string]: string | number;
}
export default function ModulesTable() {
	const params = useParams();
	const [isLoading, setIsLoading] = useState(false);

	const [checkInstall, setCheckInstall] = useState<FormData>({});
	useEffect(() => {
		// Code to run after component has rendered
		setIsLoading(true);
		// Example: Fetch data from an API
		// fetch(`/api/admin/${params?.slug}`)
		//   .then(response => response.json())
		//   .then(data => {
		//     // Process the fetched data
		//     setIsLoading(false)
		//   }).catch((error)=>{
		//     setIsLoading(false)
		//   });
	}, [setIsLoading, params]);
	const handleCheckInstall = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setCheckInstall((prevData) => ({
			...prevData,
			[name]: value
		}));

		console.log(name, value);
	};
	const toggleCheckInstall = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		if (value === 'on') {
			setCheckInstall((prevData) => ({
				...prevData,
				[name]: value
			}));
		}
	};
	return (
		<>
			<div className="relative w-full h-full flex flex-col">
				<div className="flex flex-col bg-white">
					<ModulesHeader />
				</div>
				<div className="flex flex-col  bg-white-50 overflow-auto">
					<Table>
						<Table.Head>
							<Table.HeadCell>Installed</Table.HeadCell>
							<Table.HeadCell>Module</Table.HeadCell>
							<Table.HeadCell>Description</Table.HeadCell>
							<Table.HeadCell>Category</Table.HeadCell>
							<Table.HeadCell>Tags</Table.HeadCell>

							<Table.HeadCell>
								<span className="sr-only">Edit</span>
							</Table.HeadCell>
						</Table.Head>
						<Table.Body className="divide-y">
							{modules.data.map((item) => (
								<Table.Row
									key={item.slug}
									className="bg-white dark:border-gray-700 dark:bg-gray-800"
								>
									<>
										<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
											{/* <IconComponent iconName={item.icon_name} size={22} color="gray" /> */}

											<Checkbox
												id={`${item.slug}-moduleInstalled`}
												name={`${item.slug}-moduleInstalled`}
												onChange={handleCheckInstall}
											/>
										</Table.Cell>
										<Table.Cell>{item.name}</Table.Cell>
										<Table.Cell>{item.short_description}</Table.Cell>
										<Table.Cell>
											<div className="flex flex-row gap-2">
												{item.category.map((cat) => (
													<Badge
														key={cat.name}
														color="gray"
														className="rounded-lg px-2 outline outline-1 outline-gray-200 bg-transparent"
													>
														<p className="w-30 whitespace-nowrap text-ellipsis overflow-hidden">
															{cat.name}
														</p>
													</Badge>
												))}
											</div>
										</Table.Cell>
										<Table.Cell>
											<div className="flex flex-row gap-2">
												{item.tags.map((tag) => (
													<Badge
														key={`${item.slug}-${tag}`}
														color="light"
														className="rounded-full px-3"
													>
														<p>{tag}</p>
													</Badge>
												))}
											</div>
										</Table.Cell>
										<Table.Cell>
											<Button.Group color="dark" className="hover:bg-transparent gap-0">
												<Link
													color=""
													className="bg-white  text-gray-800 hover:bg-transparent hover:text-cyan-500"
													href={`/modules/${item.slug}/add`}
												>
													<IconComponent iconName="add" />
												</Link>
												<Link
													color=""
													className="bg-white  text-gray-800 hover:bg-transparent hover:text-cyan-500"
													href={`/modules/${item.slug}/edit`}
												>
													<IconComponent iconName="edit" />
												</Link>
												<Button
													color=""
													className="bg-white  text-red-800 hover:bg-transparent hover:text-red-500"
													size="xs"
												>
													<IconComponent iconName="close" />
												</Button>
											</Button.Group>
										</Table.Cell>
									</>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</div>
			</div>
		</>
	);
}
