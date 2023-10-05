'use client';

import { SafeUser } from '@/app/types';
import documentationsData from '@/data/docs/documentation';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { CodePreview } from './codeEditor/CodePreview';
import GuidePage from './documentation/GuidePage';

interface DocumentationPageProps {
	currentUser?: SafeUser | null;
	showSidebar?: boolean;
	nameDoc?: keyof typeof documentationsData;
}
const DocumentationPage: React.FC<DocumentationPageProps> = ({
	currentUser,
	showSidebar,
	nameDoc
}) => {
	const params = useParams();
	const [isLoading, setIsLoading] = useState(false);
	let nameData: any[] = []; // Default value
	if (nameDoc) {
		nameData = documentationsData[nameDoc];
	} else {
		nameData = Object.keys(documentationsData);
	}
	return (
		<>
			{/* {nameData.map((name) => {
				<Card>
					<p>{name}</p>
				</Card>;
			})} */}

			<CodePreview title="Default accordion" className="dark:bg-gray-900">
				{nameData?.map((guide, index) => (
					<GuidePage key={index} guide={guide} />
				))}
			</CodePreview>
		</>
	);
};

export default DocumentationPage;
