
import getCurrentUser from "@/app/actions/getCurrentUser";
import Dashboard from "@/app/components/Dashboard";
import MainNavbar from "@/app/components/navbar/MainNavbar";
import { SafeUser } from "@/app/types";
import PageLayout from "@/layouts/Pages";
import { useEffect, useState } from "react";

interface DashboardPageProps {
    currentUser?: SafeUser | null
  }
  
const DashboardPage: React.FC<DashboardPageProps> = ({
    currentUser
}) => {

    const meta = {
      title: 'Dashboard',
      description: 'Welcome, Guest!'
    }
    return (
        <>
            <div className="fluid max-w-[2500px] flex flex-col items-center mx-auto justify-center border bg-gray-50 h-full">
            
            <PageLayout showSidebar={true} metadata={meta} hideNavbar={true}>
                
                <div className="flex flex-col w-full border-l h-full bg-white">
                    <Dashboard currentUser={currentUser}/>
                </div>
                
            </PageLayout>
            </div>
        </>
    )
}

export default DashboardPage;