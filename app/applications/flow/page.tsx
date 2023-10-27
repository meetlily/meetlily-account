import getCurrentUser from '@/app/actions/getCurrentUser';
import {
	getDatabaseModuleLists,
	getFormData,
	getFormField,
	getMainModuleLists,
	getModuleLists,
	getOrganizations,
	getUsers
} from '@/app/actions/getModuleLists';
import MeetlilyFlow from '@/app/components/applications/flow/MeetlilyFlow';
import EmptyPage from '@/app/components/empty/EmptyPage';
import useFiles from '@/app/hooks/useFiles';
import AdminLayout from '@/app/layouts/AdminLayout';
import flowData from '@/flow/main.json';

export default async function ApplicationFlowPage() {
	const currentUser = await getCurrentUser();
	const files = useFiles();

	const formFields = await getFormField();
	const formData = await getFormData();
	const modules = await getModuleLists();
	const mainModules = await getMainModuleLists();
	const dbModules = await getDatabaseModuleLists();
	const organizations = await getOrganizations();
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
		<>
			<AdminLayout
				currentUser={currentUser}
				showSidebar={true}
				showNavbar={true}
				showNavbarSearch={true}
				fluid={true}
			>
				<div className="flex flex-col h-full w-full">
					{isAdmin ? (
						<>
							<MeetlilyFlow
								files={files.getByValue('flow')}
								modules={modules}
								mainModules={flowData}
							/>
						</>
					) : (
						<EmptyPage />
					)}
				</div>
			</AdminLayout>
		</>
	);
}
