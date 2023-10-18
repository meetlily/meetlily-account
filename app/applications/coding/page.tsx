import getCurrentUser from '@/app/actions/getCurrentUser';
import CodeEditorWithFileTree from '@/app/components/applications/codeEditor/CodeEditorWithFileTree';
import EmptyPage from '@/app/components/empty/EmptyPage';
import useFiles from '@/app/hooks/useFiles';
import AdminLayout from '@/app/layouts/AdminLayout';

export default async function ApplicationPage() {
	const currentUser = await getCurrentUser();
	const files = useFiles();

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
				fluid={true}
			>
				{isAdmin ? (
					<CodeEditorWithFileTree
						files={files.getAll}
						refresh={files.getAll}
					></CodeEditorWithFileTree>
				) : (
					<EmptyPage />
				)}
			</AdminLayout>
		</>
	);
}
