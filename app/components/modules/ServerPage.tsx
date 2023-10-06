'use client';

import { SafeUser } from '@/app/types';
import serverData from '@/data/moduleFormFields/server.json';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Heading from '../Heading';
import ServerForm from './server/ServerForm';
interface ServerPageProps {
	currentUser?: SafeUser | null;
	showSidebar?: boolean;
}
const ServerPage: React.FC<ServerPageProps> = ({ currentUser, showSidebar }) => {
	const params = useParams();
	const [isLoading, setIsLoading] = useState(false);
	// Default value

	return (
		<>
			<div className="px-8 pt-2">
				<Heading title="Server" />
			</div>
			<ServerForm serverData={serverData} />
		</>
	);
};

export default ServerPage;
