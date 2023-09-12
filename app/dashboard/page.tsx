
import { getSession } from "next-auth/react";
import getCurrentUser from "../actions/getCurrentUser";
import AdminLayout from "../components/AdminLayout";
import { sidebarAddItems, writeJsonToFile } from '@/app/utils/utils'
import administrationData from "@/data/administration.json" 
import Dashboard from "../components/Dashboard";


export default async function DashboardPage() {
  let currentUser = await getCurrentUser();

  return (
    <>
      <AdminLayout currentUser={currentUser}>
        <Dashboard />
      </AdminLayout>
    </>
      
  )
}