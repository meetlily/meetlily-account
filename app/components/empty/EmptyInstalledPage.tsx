'use client';

import { Card } from 'flowbite-react';

interface EmptyInstalledPageProps {
	message?: React.ReactNode;
}

const EmptyInstalledPage: React.FC<EmptyInstalledPageProps> = ({ message }) => {
	return (
		<>
			<Card className="mt-8 mb-12 py-6">
				<div className="flex flex-col items-center justify-center w-full text-center text-md">
					{message}
				</div>
			</Card>
		</>
	);
};

export default EmptyInstalledPage;
