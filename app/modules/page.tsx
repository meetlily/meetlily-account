import getCurrentUser from '../actions/getCurrentUser';
import AdminLayout from '../components/AdminLayout';
import EmptyPage from '../components/empty/EmptyPage';
import ModulesTable from '../components/modules/ModulesTable';

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
