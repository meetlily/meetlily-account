import getCurrentUser from '../actions/getCurrentUser';
import EmptyPage from '../components/empty/EmptyPage';
import ModulePage from '../components/modules/ModuleListPage';
import AdminLayout from '../layouts/AdminLayout';

export default async function AdminPage() {
	const currentUser = await getCurrentUser();
	const supAdm = 'Super Administrator';
	let isAdmin = false;
	if (currentUser?.Role) {
		const foundSupAdmin = currentUser.Role.find((obj) => obj.name === supAdm);
		if (foundSupAdmin) {
			isAdmin = true;
		}
	}
	return (
		<>
			<AdminLayout
				currentUser={currentUser}
				showSidebar={true}
				showNavbar={true}
				showNavbarSearch={true}
			>
				{isAdmin ? <ModulePage currentUser={currentUser} /> : <EmptyPage />}
			</AdminLayout>
		</>
	);
}
