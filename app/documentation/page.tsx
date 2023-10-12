import getCurrentUser from '../actions/getCurrentUser';
import DocumentationPage from '../components/modules/DocumentationPage';
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
				<div className="h-full w-full flex flex-col px-0">
					<DocumentationPage nameDoc={'react'} />
				</div>
			</AdminLayout>
		</>
	);
}
