import getCurrentUser from '../actions/getCurrentUser';
import EmptyPage from '../components/empty/EmptyPage';
import ModulesTable from '../components/modules/ModulesTable';
import AdminLayout from '../layouts/AdminLayout';

export default async function ModulesPage() {
	const currentUser = await getCurrentUser();
	console.log(currentUser);
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
