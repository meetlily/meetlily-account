'use client';

import Dashboard from "@/app/components/Dashboard";
import MainNavbar from "@/app/components/navbar/MainNavbar";
import { SafeUser } from "@/app/types";
import PageLayout from "@/app/layouts/page";
import { useState } from "react";


interface MainDashPageProps {
    currentUser?: SafeUser | null
}
  
const MainDashPage: React.FC<MainDashPageProps> = ({
    currentUser
}) => {
    const [isLoading, setIsLoading] = useState()
    const meta = {
      title: 'Dashboard',
      description: 'Welcome, Guest!'
    }
    return (
        
        <>
            <MainNavbar currentUser={currentUser} />
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

export default MainDashPage;