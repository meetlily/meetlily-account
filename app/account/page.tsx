import getCurrentUser from '../actions/getCurrentUser';
import AdminLayout from '../components/AdminLayout';
import EmptyPage from '../components/empty/EmptyPage';
import ModulePage from '../components/modules/ModuleListPage';

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
