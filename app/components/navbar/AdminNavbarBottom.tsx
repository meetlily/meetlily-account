'use client';
import useAccountModal from '@/app/hooks/useAccountModal';
import { SafeUser } from '@/app/types';
import { useEffect, useState } from 'react';
interface ContentData {
	id: string;
	name: string;
	slug: string;
	description: string;
	icon: string;
	active: boolean;
}
interface AdminNavbarBottomProps {
	currentUser?: SafeUser | null;
	showSearch?: boolean;
}
const AdminNavbarBottom: React.FC<AdminNavbarBottomProps> = ({ currentUser, showSearch }) => {
	const accountModal = useAccountModal();
	const [tabContent, setTabContent] = useState<ContentData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const tabData: ContentData[] = tabContent;
	useEffect(() => {
		setIsLoading(true);
		// Fetch the data from the API
		fetch('/api/admin/configuration')
			.then((response) => response.json())
			.then((data) => setTabContent(data))
			.catch((error) => console.error('Error fetching sections:', error))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<div className="bg-gray-800 flex flex-col items-center"></div>
		</>
	);
};

export default AdminNavbarBottom;
