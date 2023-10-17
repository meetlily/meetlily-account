import getCurrentUser from '../actions/getCurrentUser';
import Dashboard from '../components/Dashboard';
import EmptyPage from '../components/empty/EmptyPage';
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
			<AdminLayout showNavbar currentUser={currentUser}>
				{isAdmin ? <Dashboard currentUser={currentUser} /> : <EmptyPage />}
			</AdminLayout>
		</>
	);
}
