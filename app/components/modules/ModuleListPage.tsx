'use client';

import { SafeUser } from '@/app/types';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DocumentationPage from './DocumentationPage';

interface ModuleListPageProps {
	currentUser?: SafeUser | null;
	showSidebar?: boolean;
	data?: any;
}
const ModuleListPage: React.FC<ModuleListPageProps> = ({ currentUser, showSidebar, data }) => {
	const params = useParams();
	const searchParams = useSearchParams();

	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState(data);

	useEffect(() => {
		//setIsLoading(true);
		// fetch(`/api/admin/${params?.slug}`)
		// 	.then((response) => response.json())
		// 	.then((fData) => {
		// 		setIsLoading(false);
		// 		setFormData(fData);
		// 	})
		// 	.catch((error) => console.error(`Error fetching  ${params?.slug}`, error))
		// 	.finally(() => setIsLoading(false));
	}, [params, setFormData]);
	return (
		<>
			<div className="h-full w-full flex flex-col px-0">
				{params?.slug && params?.slug === 'documentation' && (
					<>
						<DocumentationPage nameDoc={'vs_code'} currentUser={currentUser} />
					</>
				)}
			</div>
		</>
	);
};
export async function getServerSideProps() {
	// Fetch data from an API
	const response = await fetch('/api/me');
	const data = await response.json();

	// Pass the data to the page via props
	return { props: { data } };
}
export default ModuleListPage;
