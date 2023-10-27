import getCurrentUser from './actions/getCurrentUser';
import { getPublicIP, getPublicIPInfo } from './actions/getPublicIP';
import HomeLandingPage from './components/landingpages/HomeLandingPage';
import RootLayout from './layout';
import PageLayout from './layouts/PageLayout';

export default async function Home() {
	const ip = await getPublicIP();

	const ipInfo = await getPublicIPInfo(ip);
	console.log(ip, ipInfo);
	const currentUser = await getCurrentUser();
	let metaData = {
		title: 'Dashboard',
		subtitle: 'Welcome, Guest!'
	};

	return (
		<>
			<RootLayout>
				<PageLayout currentUser={currentUser} showSidebar={false} hideNavbar={false}>
					<div className="flex flex-col w-full h-full">
						<HomeLandingPage />
					</div>
				</PageLayout>
			</RootLayout>
		</>
	);
}
