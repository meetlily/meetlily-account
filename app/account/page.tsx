import getCurrentUser from '../actions/getCurrentUser';
import EmptyPage from '../components/empty/EmptyPage';
import AccountModule from '../components/modules/account/AccountModule';
import AdminLayout from '../layouts/AdminLayout';

export default async function AccountPage() {
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
			<AdminLayout currentUser={currentUser} showNavbar showSidebar>
				{isAdmin ? <AccountModule currentUser={currentUser} /> : <EmptyPage />}
			</AdminLayout>
		</>
	);
}
