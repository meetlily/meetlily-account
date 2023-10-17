import getCurrentUser from '@/app/actions/getCurrentUser';
import EmptyPage from '@/app/components/empty/EmptyPage';
import CodeEditorWithFileTree from '@/app/components/modules/codeEditor/CodeEditorWithFileTree';
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
	const handleChange = (newCode: any) => {
		console.log(newCode, 'handleChange page');
	};

	return (
		<>
			<AdminLayout
				currentUser={currentUser}
				showSidebar={true}
				showNavbar={true}
				showNavbarSearch={true}
			>
				{isAdmin ? <CodeEditorWithFileTree /> : <EmptyPage />}
			</AdminLayout>
		</>
	);
}
