import { getSession } from "next-auth/react";
import getCurrentUser from "../actions/getCurrentUser";
import AdminLayout from "../components/AdminLayout";
import ModulesTable from "../components/modules/ModulesTable";
import Dashboard from "../components/Dashboard";
import { getModuleLists } from "../actions/getModuleLists";
import ModuleLists from "../components/modules/ModuleLists";
import EmptyText from "../components/empty/EmptyText";
import EmptyPage from "../components/empty/EmptyPage";
import rolesData from "@/data/roles.json";

export default async function AdminPage() {
  
  const currentUser = await getCurrentUser();

  return (
    <>
      <AdminLayout currentUser={currentUser} showSidebar={false} showNavbar={true} showNavbarSearch={true}>
        <EmptyPage />
      </AdminLayout>
    </>
  )
}