'use client';
import Heading from '@/app/components/Heading';
import IconComponent from '@/app/components/icons/IconComponent';
import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import TerminalComponent from './Terminal';
interface TerminalPageProps {
	params?: any;
}
const TerminalPage: React.FC<TerminalPageProps> = ({ params }) => {
	const [fileTree, setFileTree] = useState<any[]>([]);
	const [codeData, setCodeData] = useState('const hello = "world";');
	useEffect(() => {
		// Fetch the file tree from the API route
		fetch('/api/file')
			.then((response) => response.json())
			.then((data) => setFileTree(data))
			.catch((error) => console.error('Error fetching file tree:', error));
	}, []);
	const handleCodeChange = (newCode: string) => {
		setCodeData(newCode);
	};
	const renderFileTree = (tree: any[]) => {
		return (
			<ul>
				{tree.map((item) => (
					<li key={item.path}>
						{item.isDirectory ? (
							<div className="flex flex-row items-center justify-start cursor-pointer hover:bg-gray-100">
								<div className="flex mr-1">
									<IconComponent iconName="fileRightArrow" />
								</div>
								<div className="flex mr-2">
									<IconComponent iconName="folderClose" />
								</div>
								<div className="flex">{item.name}</div>
							</div>
						) : (
							<div className="items-center justify-start ml-4 hidden">
								<div className="flex mr-2">
									<IconComponent iconName="fileItem" />
								</div>
								<div className="flex">{item.name}</div>
							</div>
						)}
						<div className="ml-8 hidden">
							{item.children.length > 0 && renderFileTree(item.children)}
						</div>
					</li>
				))}
			</ul>
		);
	};

	return (
		<>
			<div className="mt-4">
				<Heading title={params?.slug} iconName={params?.slug} />
			</div>
			<Card className="bg-gray-200 mt-6 rounded-md border-4 border-gray-400 shadow">
				<div className="flex flex-row items-start gap-1">
					<Card className="flex  w-1/4">
						<div className="h-[600px] overflow-auto">{renderFileTree(fileTree)}</div>
					</Card>
					<div className="card flex flex-col w-full">
						<div className="h-[618px] w-full shadow overflow-auto">
							<TerminalComponent />
							<div className="flex flex-row items-start justify-center gap-1">
								<Card className="w-full flex h-full"></Card>
								<Card className="w-full flex h-full"></Card>
								<Card className="w-full flex h-full"></Card>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</>
	);
};

export default TerminalPage;
