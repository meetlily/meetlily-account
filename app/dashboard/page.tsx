import getCurrentUser from '../actions/getCurrentUser';
import Dashboard from '../components/Dashboard';
import AdminLayout from '../layouts/AdminLayout';

export default async function DashboardPage() {
	const currentUser = await getCurrentUser();
	return (
		<>
			<AdminLayout
				currentUser={currentUser}
				showNavbar={true}
				showNavbarSearch={true}
				showSidebar={true}
			>
				<Dashboard currentUser={currentUser} />
			</AdminLayout>
		</>
	);
}
