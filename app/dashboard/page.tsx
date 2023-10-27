import getCurrentUser from '../actions/getCurrentUser';
import { getSLSSessions } from '../actions/getSLSData';
import Dashboard from '../components/Dashboard';
import AdminLayout from '../layouts/AdminLayout';

export default async function DashboardPage() {
	const currentUser = await getCurrentUser();
	const SLSSessions = getSLSSessions();
	return (
		<>
			<AdminLayout
				currentUser={currentUser}
				showNavbar={true}
				showNavbarSearch={true}
				showSidebar={true}
			>
				<section className="hidden md:block">
					<div className="overflow-hidden rounded-lg border shadow mb-6 mt-10  dark:border-gray-700">
						<Dashboard currentUser={currentUser} analytics={SLSSessions} />
					</div>
				</section>
			</AdminLayout>
		</>
	);
}
