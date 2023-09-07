'use client';

import { SafeUser } from "@/app/types";
import CardIcon from "./CardIcon";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import Loader from "./Loader";

interface DashboardProps {
    currentUser?: SafeUser | null
}

const Dashboard: React.FC<DashboardProps> = ({
    currentUser
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const iconSize = 36;
    useEffect(() => {
        // Simulating an asynchronous operation
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);
    return (
        <>


                
                    <div className="px-4 text-md flex flex-col items-center bg-gray-50 border-t border-b">
                        <Heading title="Administration" size="text-lg text-gray-700 text-center font-semibold"/>
                    </div>
                 
                    <div className="flex flex-col items-center justify-center mx-auto mb-4 p-4">
                        <div 
                            className="
                                grid
                                grid-cols-3
                                md:grid-cols-4
                                lg:grid-cols-5
                                xl:grid-cols-7
                                2xl:grid-cols-10
                                gap-4
                                md:gap-5
                                lg:gap-6
                                xl:gap-7
                                max-w-[600px]
                                md:max-w-[1024px]
                                lg:max-w-[1280px]
                                xl:max-w-[1920px]
                                2xl:max-w-[2500px]
                            "
                        >
                            
                            <CardIcon iconSize={iconSize} label="Servers" iconName="server" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Databases" iconName="database" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Develop" iconName="develop" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Integrations" iconName="integration" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Company" iconName="company" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Users" iconName="users" onClick={() => {}} />
                            
                            <CardIcon iconSize={iconSize} label="Theme" iconName="theme" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Vault" iconName="vault" onClick={() => {}} />
                            
                            <CardIcon iconSize={iconSize} label="Settings" iconName="configure" onClick={() => {}} />
                        </div>
                    </div>
           
                    <div className="px-4 text-md flex flex-col items-center bg-gray-50  border-t border-b">
                        <Heading title="Business Applications" size="text-lg text-gray-700 text-center font-semibold "/>
                    </div>
                   <div className="flex flex-col items-center justify-center mx-auto mb-4 p-4">
                        <div 
                            className="
                                grid
                                grid-cols-3
                                md:grid-cols-4
                                lg:grid-cols-6
                                xl:grid-cols-8
                                2xl:grid-cols-11
                                gap-4
                                md:gap-5
                                lg:gap-6
                                xl:gap-7
                                max-w-[600px]
                                md:max-w-[1024px]
                                lg:max-w-[1280px]
                                xl:max-w-[1920px]
                                2xl:max-w-[2500px]
                            "
                        >
                            
                            <CardIcon iconSize={iconSize} label="Accounting" iconName="accounting" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="POS" iconName="pos" onClick={() => {}} />
                            
                            <CardIcon iconSize={iconSize} label="Website" iconName="website" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Shop" iconName="shop" onClick={() => {}} />
                            
                            <CardIcon iconSize={iconSize} label="Invoice" iconName="invoice" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Sales" iconName="sales" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Timesheet" iconName="timesheet" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Projects" iconName="project" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Warehouse" iconName="warehouse" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Clock In/Out" iconName="clockInOut" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Employee" iconName="employees" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Ticketing" iconName="ticket" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Events" iconName="events" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Travel" iconName="booking" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Inventory" iconName="inventory" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="CRM" iconName="crm" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Blogs" iconName="blogs" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Vacation" iconName="homeRentals" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Rentals" iconName="carRental" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Campaign" iconName="emailCampaign" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Appointment" iconName="calendar" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Repair" iconName="repair" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="CMS" iconName="cms" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Learn" iconName="learn" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Dating" iconName="dating" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Booking" iconName="hotel" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Trucking" iconName="delivery" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Moving" iconName="moving" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="HR" iconName="hr" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Financial" iconName="bank" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Entertainment" iconName="entertainment" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Awards" iconName="awards" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Advertising" iconName="advertising" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Subscription" iconName="subscription" onClick={() => {}} />
                            
                            <CardIcon iconSize={iconSize} label="Club" iconName="club" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Payments" iconName="creditCard" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Contract" iconName="contract" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Jobs" iconName="jobs" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Hosting" iconName="hosting" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Forms" iconName="forms" onClick={() => {}} />
                        </div>
                    </div>
                
                    <div className="px-4 text-md flex flex-col items-center bg-gray-50  border-t border-b">
                        <Heading title="Tools and Utilities" size="text-lg text-gray-700 text-center font-semibold"/>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center mx-auto mb-4 p-4">
                    
                        <div 
                            className="
                                grid
                                grid-cols-3
                                md:grid-cols-4
                                lg:grid-cols-6
                                xl:grid-cols-8
                                2xl:grid-cols-12
                                gap-4
                                md:gap-5
                                lg:gap-6
                                xl:gap-7
                                max-w-[600px]
                                md:max-w-[1024px]
                                lg:max-w-[1280px]
                                xl:max-w-[1920px]
                                2xl:max-w-[2500px]
                            "
                        >
                            <CardIcon iconSize={iconSize} label="Music" iconName="music" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Movies" iconName="movies" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Sign" iconName="sign" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Contacts" iconName="contacts" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Dashboard" iconName="dashboard" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Files" iconName="fileManagement" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Weather" iconName="weather" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Docs" iconName="documentation" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Blocks" iconName="blocks" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Gallery" iconName="gallery" onClick={() => {}} />
                            
                            <CardIcon iconSize={iconSize} label="Todo List" iconName="todo" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Draw" iconName="draw" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Icons" iconName="icons" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Notes" iconName="notes" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Flow" iconName="flow" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Email" iconName="email" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Connect" iconName="connect" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Fonts" iconName="fonts" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Map" iconName="map" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="AI" iconName="robot" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="KB" iconName="knowledge" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Archive" iconName="archive" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Notifications" iconName="notification" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Board" iconName="board" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Coding" iconName="code" onClick={() => {}} />
                            <CardIcon iconSize={iconSize} label="Support" iconName="support" onClick={() => {}} />
                        </div>
                    </div>
          
        </>
           
    )}

export default Dashboard;