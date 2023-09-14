
import getCurrentUser from "@/app/actions/getCurrentUser";
import  getSession  from "@/app/actions/getCurrentUser";
import AdminLayout from "@/app/components/AdminLayout";
import ModulePage from "@/app/components/modules/ModulePage";


export default async function ModulePageComponent() {
  const session = await getSession();
  const currentUser = await getCurrentUser();
  console.log(currentUser)
  return (
    <>
      <AdminLayout currentUser={currentUser} showSidebar={false} showNavbar={true} showNavbarSearch={true}>
        <ModulePage currentUser={currentUser}/>
      </AdminLayout>
    </>
  )
}