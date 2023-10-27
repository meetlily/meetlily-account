'use client';
import { Metadata } from 'next';

import { CalendarDateRangePicker } from '@/app/dashboard/components/date-range-picker';
import { MainNav } from '@/app/dashboard/components/main-nav';
import { Overview } from '@/app/dashboard/components/overview';
import { Search } from '@/app/dashboard/components/search';
import TeamSwitcher from '@/app/dashboard/components/team-switcher';
import { UserNav } from '@/app/dashboard/components/user-nav';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs';
import { Button, Card } from '@radix-ui/themes';

import { RecentMembers } from '@/app/dashboard/components/recent-members';
import IconComponent from './icons/IconComponent';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Example dashboard app built using the components.'
};
interface DashboardPageProps {
	currentUser: any;
	analytics?: any;
}

export default function DashboardPage({ currentUser, analytics }: DashboardPageProps) {
	console.log(analytics);
	return (
		<>
			<div className="hidden flex-col md:flex ">
				<div className="border-b dark:border-gray-700">
					<div className="flex h-16 items-center px-4">
						<TeamSwitcher currentUser={currentUser} />
						<MainNav className="mx-6" />
						<div className="ml-auto flex items-center space-x-4">
							<Search />
							<UserNav currentUser={currentUser} />
						</div>
					</div>
				</div>
				<div className="flex-1 space-y-4 p-8">
					<div className="flex items-center justify-between space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
						<div className="flex items-center space-x-2 ">
							<CalendarDateRangePicker />
							<Button variant="soft">Download</Button>
						</div>
					</div>
					<Tabs color="soft" defaultValue="overview" className="space-y-4">
						<TabsList>
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="analytics" disabled>
								Analytics
							</TabsTrigger>
							<TabsTrigger value="reports" disabled>
								Reports
							</TabsTrigger>
							<TabsTrigger value="notifications" disabled>
								Notifications
							</TabsTrigger>
						</TabsList>
						<TabsContent value="overview" className="space-y-4">
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
								<Card variant="classic" className="relative">
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
										<div className="flex absolute top-10 right-6 w-1/2 h-full">
											<IconComponent iconName="group" size={70} />
										</div>
									</CardHeader>
									<CardContent>
										<div className="text-7xl font-bold">12</div>
										<p className="text-xs text-muted-foreground">+20.1% from last month</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="h-4 w-4 text-muted-foreground"
										>
											<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
											<circle cx="9" cy="7" r="4" />
											<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
										</svg>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+2350</div>
										<p className="text-xs text-muted-foreground">+180.1% from last month</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">Members</CardTitle>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="h-4 w-4 text-muted-foreground"
										>
											<rect width="20" height="14" x="2" y="5" rx="2" />
											<path d="M2 10h20" />
										</svg>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+12,234</div>
										<p className="text-xs text-muted-foreground">+19% from last month</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">Active Now</CardTitle>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="h-4 w-4 text-muted-foreground"
										>
											<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
										</svg>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+573</div>
										<p className="text-xs text-muted-foreground">+201 since last hour</p>
									</CardContent>
								</Card>
							</div>
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
								<Card className="col-span-4">
									<CardHeader>
										<CardTitle>Overview</CardTitle>
									</CardHeader>
									<CardContent className="pl-2">
										<Overview analytics={analytics} />
									</CardContent>
								</Card>
								<Card className="col-span-3">
									<CardHeader>
										<CardTitle>New Members</CardTitle>
										<CardDescription>265 new members this month</CardDescription>
									</CardHeader>
									<CardContent>
										<RecentMembers />
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
}
