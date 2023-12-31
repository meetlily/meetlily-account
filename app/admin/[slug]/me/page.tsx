import { default as getCurrentUser } from '@/app/actions/getCurrentUser';
import { getFormData, getFormField, getModuleLists, getUsers } from '@/app/actions/getModuleLists';
import EmptyPage from '@/app/components/empty/EmptyPage';
import AdminModule from '@/app/components/modules/admin/AdminModule';
import AdminLayout from '@/app/layouts/AdminLayout';
import { SafeUser } from '@/app/types';

export default async function AdminModulePage() {
	const currentUser: SafeUser | null = await getCurrentUser();
	const formFields = await getFormField();
	const formData = await getFormData();
	const modules = await getModuleLists();
	const users = await getUsers();
	const supAdm = 'Super Administrator';
	let isAdmin = false;
	if (currentUser?.Role) {
		const foundSupAdmin = currentUser.Role.find((obj) => obj.name === supAdm);
		if (foundSupAdmin) {
			isAdmin = true;
		}
	}
	return (
		<AdminLayout
			currentUser={currentUser}
			showSidebar={true}
			showNavbar={true}
			showNavbarSearch={true}
		>
			{isAdmin ? (
				<AdminModule currentUser={currentUser} modules={modules} fields={formFields} />
			) : (
				<EmptyPage />
			)}
		</AdminLayout>
	);
}
