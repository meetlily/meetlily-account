import getCurrentUser from '../actions/getCurrentUser';
import EmptyPage from '../components/empty/EmptyPage';
import AdminLayout from '../layouts/AdminLayout';
import Sample from '../layouts/Sample';

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
				{isAdmin ? <Sample /> : <EmptyPage />}
			</AdminLayout>
		</>
	);
}
