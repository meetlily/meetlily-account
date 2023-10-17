import getCurrentUser from '@/app/actions/getCurrentUser';
import EmptyPage from '@/app/components/empty/EmptyPage';
import ModulesTable from '@/app/components/modules/ModulesTable';
import AdminLayout from '@/app/layouts/AdminLayout';

export default async function ModulesPage() {
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
				{isAdmin ? <ModulesTable /> : <EmptyPage />}
			</AdminLayout>
		</>
	);
}
