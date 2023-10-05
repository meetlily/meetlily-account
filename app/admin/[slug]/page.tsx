import { default as getCurrentUser } from '@/app/actions/getCurrentUser';
import AdminLayout from '@/app/components/AdminLayout';
import EmptyPage from '@/app/components/empty/EmptyPage';
import ModulePage from '@/app/components/modules/ModuleListPage';

export default async function AdminModulePage() {
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
