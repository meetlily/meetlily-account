'use client';

import { SafeUser } from '@/app/types';
import formData from '@/data/moduleFormFields/organization.json';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Heading from '../Heading';
import OrganizationForm from './organization/OrganizationForm';
interface OrganizationPageProps {
	currentUser?: SafeUser | null;
	showSidebar?: boolean;
}
const OrganizationPage: React.FC<OrganizationPageProps> = ({ currentUser, showSidebar }) => {
	const params = useParams();
	const [isLoading, setIsLoading] = useState(false);
	// Default value

	return (
		<>
			<div className="px-8 pt-2">
				<Heading title="Organization" />
			</div>
			<OrganizationForm groups={formData} />
		</>
	);
};

export default OrganizationPage;
