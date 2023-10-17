'use client';

import { SafeUser } from '@/app/types';
import administrationData from '@/data/administration.json';
import sidebar from '@/data/sidebar.json';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import CardIcon from './CardIcon';

import { Card } from 'flowbite-react';
import ButtonIcon from './ButtonIcon';
import Heading from './Heading';
import ModuleLists from './modules/ModuleLists';
interface DashboardProps {
	currentUser?: SafeUser | null;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser }) => {
	const router = useRouter();

	const iconSize = 36;
	const scrollRef = useRef<HTMLDivElement>(null);
	if (!currentUser) {
		router.push('/sign-in');
	}
	const scrollToBottom = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	};

	return (
		<>
			<div className="flex flex-col mt-2">
				<Heading title="Dashboard" showOptionButton iconName="dashboard" enableSearch />
			</div>

			<div className="flex flex-col lg:flex-row gap-4">
				<div className="flex flex-col">
					<div
						className="
						flex flex-col md:flex-row h-full w-full  gap-4 mt-4
					"
					>
						<div
							className="
						flex flex-col h-full w-full 
					"
						>
							<Card>
								<ButtonIcon
									icon={'organizations'}
									size={'text-lg lg:text-2xl'}
									iconSize={80}
									showLabel
									label="My Organization"
								/>
							</Card>
						</div>
						<div
							className="
						flex flex-col h-full w-full 
					"
						>
							<Card>
								<ButtonIcon
									icon={'user'}
									size={'text-lg lg:text-2xl'}
									iconSize={80}
									showLabel
									label="My Account"
								/>
							</Card>
						</div>
						<div
							className="
						flex flex-col h-full w-full 
					"
						>
							<Card>
								<ButtonIcon
									icon={'cog'}
									size={'text-lg lg:text-2xl'}
									iconSize={80}
									showLabel
									label="My Settings"
								/>
							</Card>
						</div>
					</div>
					<div
						className="
						flex flex-col h-full w-full items-center justify-center mt-2
					"
					>
						<Card>
							<div
								className="
				
						grid
						grid-cols-3
						md:grid-cols-6
						gap-4
						md:gap-5
						lg:gap-6
						xl:gap-7
						max-w-[600px]
						md:max-w-[1024px]
						lg:max-w-[1280px]
						xl:max-w-[1920px]
						2xl:max-w-[2500px]"
							>
								{administrationData.administration.map((admin, i) => (
									<>
										<CardIcon
											module={admin}
											key={admin.slug}
											iconSize={iconSize}
											label={admin.name}
											iconName={admin.icon_name}
											buttonId={`${admin.slug}-button`}
											contentId={`${admin.slug}-content`}
											description={admin.description}
											onClick={() => router.push(`/admin/${admin.slug}`)}
											showPopover={true}
										/>
									</>
								))}
							</div>
						</Card>
					</div>
				</div>
				<div
					className="
						flex flex-col h-full lg:w-1/4 items-center justify-center mt-4
					"
				>
					<Card className="p-2">
						<div
							className="
				
						grid
						grid-cols-3
						md:grid-cols-2
						gap-4
						md:gap-5
						lg:gap-6
						xl:gap-7
						max-w-[600px]
						md:max-w-[1024px]
						lg:max-w-[1280px]
						xl:max-w-[1920px]
						2xl:max-w-[2500px]"
						>
							{sidebar.map((admin, i) => (
								<>
									<CardIcon
										module={admin}
										key={admin.name}
										iconSize={iconSize}
										label={admin.name}
										iconName={admin.icon_name}
										buttonId={`${admin.name}-button`}
										contentId={`${admin.name}-content`}
										onClick={() => router.push(`/admin/${admin.name}`)}
									/>
								</>
							))}
						</div>
					</Card>
				</div>
			</div>
			<div
				className="
						flex flex-col h-full w-full items-start justify-center mt-4
					"
			>
				<Card className="p-2">
					<Heading title="Modules" />
					<ModuleLists />
				</Card>
			</div>
		</>
	);
};

export default Dashboard;
