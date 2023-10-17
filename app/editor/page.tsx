import getCurrentUser from '../actions/getCurrentUser';
import EmptyPage from '../components/empty/EmptyPage';
import CodeEditorWithFileTree from '../components/modules/codeEditor/CodeEditorWithFileTree';
import useFiles from '../hooks/useFiles';
import AdminLayout from '../layouts/AdminLayout';

export default async function ModulesPage() {
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
				{isAdmin ? (
					<CodeEditorWithFileTree files={files.getAll}></CodeEditorWithFileTree>
				) : (
					<EmptyPage />
				)}
			</AdminLayout>
		</>
	);
}
