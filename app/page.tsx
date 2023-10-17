import NextTopLoader from 'nextjs-toploader';
import getCurrentUser from './actions/getCurrentUser';
import HomeLandingPage from './components/landingpages/HomeLandingPage';
import RootLayout from './layout';
import PageLayout from './layouts/PageLayout';

export default async function Home() {
	const currentUser = await getCurrentUser();
	let metaData = {
		title: 'Dashboard',
		subtitle: 'Welcome, Guest!'
	};

	return (
		<>
			<NextTopLoader />

			<RootLayout>
				<PageLayout showSidebar={false} hideNavbar={false}>
					<div className="flex flex-col w-full h-full">
						<HomeLandingPage />
					</div>
				</PageLayout>
			</RootLayout>
		</>
	);
}
