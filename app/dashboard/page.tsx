import getCurrentUser from '../actions/getCurrentUser';
import AdminLayout from '../components/AdminLayout';
import Dashboard from '../components/Dashboard';

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
