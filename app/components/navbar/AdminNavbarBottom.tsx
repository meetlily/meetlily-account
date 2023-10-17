'use client';
import useAccountModal from '@/app/hooks/useAccountModal';
import { SafeUser } from '@/app/types';
import { Breadcrumb } from 'flowbite-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi2';
import IconComponent from '../icons/IconComponent';
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
	const params = useParams();

	useEffect(() => {
		setIsLoading(true);
		// Fetch the data from the API
		// fetch('/api/admin/configuration')
		// 	.then((response) => response.json())
		// 	.then((data) => setTabContent(data))
		// 	.catch((error) => console.error('Error fetching sections:', error))
		// 	.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<div className="flex flex-col items-center p-2 border-b bg-gray-50">
				<Breadcrumb aria-label="breadcrumb" className="uppercase">
					<Breadcrumb.Item href="/dashboard" icon={HiHome}>
						<p>Dashboard</p>
					</Breadcrumb.Item>
					<Breadcrumb.Item href="/admin">
						<IconComponent iconName={`admin`} /> <span className="ml-1">Admin</span>
					</Breadcrumb.Item>
					<Breadcrumb.Item className={`${params?.slug ? '' : 'hidden'}`}>
						<IconComponent iconName={`${params?.slug}`} />
						<span className="ml-1">{params?.slug}</span>
					</Breadcrumb.Item>
				</Breadcrumb>
			</div>
		</>
	);
};

export default AdminNavbarBottom;
