'use client';

import { SafeUser } from "@/app/types";
import CardIcon from "./CardIcon";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import Spinner from "./Spinner";

interface DashboardProps {
    currentUser?: SafeUser | null
}

const Dashboard: React.FC<DashboardProps> = ({
    currentUser
}) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Simulating an asynchronous operation
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);
    return (
        <>
            {isLoading && (
                <>
                <div className="flex flex-col justify-center items-center mx-auto p-10">
                    <Spinner />
                </div>
                </>
            )}
            {!isLoading && (
                <>
                <div className="flex flex-col justify-start">
                    <div className="bg-gray-700 px-4 text-md">
                        <Heading title="Administration" size="text-lg text-white font-semibold"/>
                    </div>
                    <hr />
                    
                    <div 
                        className="
                            grid
                            grid-cols-3
                            md:grid-cols-6
                            lg:grid-cols-8
                            xl:grid-cols-10
                            gap-1
                            py-1
                            text-center
                            max-w-[600px]
                            md:max-w-[1024px]
                            lg:max-w-[1280px]
                            xl:max-w-[1920px]
                            border
                            bg-white
                        "
                    >
                        
                        <CardIcon iconSize={30} label="Servers" iconName="server" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Databases" iconName="database" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Develop" iconName="develop" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Integrations" iconName="integration" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Company" iconName="company" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Users" iconName="users" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Settings" iconName="configure" onClick={() => {}} />
                    </div>
                </div>
                <div className="flex flex-col justify-start mt-4">
                    <div className="bg-gray-700 px-4 text-md ">
                        <Heading title="Business Applications" size="text-lg text-white font-semibold"/>
                    </div>
                    <hr />
                    
                    <div 
                        className="
                            grid
                            grid-cols-3
                            md:grid-cols-6
                            lg:grid-cols-8
                            xl:grid-cols-10
                            gap-1
                            py-1
                            text-center
                            max-w-[600px]
                            md:max-w-[1024px]
                            lg:max-w-[1280px]
                            xl:max-w-[1920px]
                            border
                            bg-white
                        "
                    >
                        
                        <CardIcon iconSize={30} label="Accounting" iconName="accounting" onClick={() => {}} />
                        <CardIcon iconSize={30} label="POS" iconName="pos" onClick={() => {}} />
                        
                        <CardIcon iconSize={30} label="Website" iconName="website" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Shop" iconName="shop" onClick={() => {}} />
                        
                        <CardIcon iconSize={30} label="Invoice" iconName="invoice" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Sales" iconName="sales" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Timesheet" iconName="timesheet" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Projects" iconName="project" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Warehouse" iconName="warehouse" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Clock In/Out" iconName="clockInOut" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Employee" iconName="employees" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Ticketing" iconName="ticket" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Events" iconName="events" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Travel" iconName="booking" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Inventory" iconName="inventory" onClick={() => {}} />
                        <CardIcon iconSize={30} label="CRM" iconName="crm" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Blogs" iconName="blogs" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Vacation" iconName="homeRentals" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Rentals" iconName="carRental" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Campaign" iconName="emailCampaign" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Appointment" iconName="calendar" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Repair" iconName="repair" onClick={() => {}} />
                        <CardIcon iconSize={30} label="CMS" iconName="cms" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Learn" iconName="learn" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Dating" iconName="dating" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Booking" iconName="hotel" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Trucking" iconName="delivery" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Moving" iconName="moving" onClick={() => {}} />
                        <CardIcon iconSize={30} label="HR" iconName="hr" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Financial" iconName="bank" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Entertainment" iconName="entertainment" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Awards" iconName="awards" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Advertising" iconName="advertising" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Subscription" iconName="subscription" onClick={() => {}} />
                        
                        <CardIcon iconSize={30} label="Club" iconName="club" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Payments" iconName="creditCard" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Contract" iconName="contract" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Jobs" iconName="jobs" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Hosting" iconName="hosting" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Forms" iconName="forms" onClick={() => {}} />
                    </div>
                </div>
                <div className="flex flex-col justify-start mt-4">
                    <div className="bg-gray-700 px-4 text-md ">
                        <Heading title="Tools and Utilities" size="text-lg text-white font-semibold"/>
                    </div>
                    <hr />
                    
                    <div 
                        className="
                            grid
                            grid-cols-3
                            md:grid-cols-6
                            lg:grid-cols-8
                            xl:grid-cols-10
                            gap-1
                            py-1
                            text-center
                            max-w-[600px]
                            md:max-w-[1024px]
                            lg:max-w-[1280px]
                            xl:max-w-[1920px]
                            border
                            bg-white
                        "
                    >
                        <CardIcon iconSize={30} label="Music" iconName="music" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Movies" iconName="movies" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Sign" iconName="sign" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Contacts" iconName="contacts" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Dashboard" iconName="dashboard" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Files" iconName="fileManagement" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Weather" iconName="weather" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Docs" iconName="documentation" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Blocks" iconName="blocks" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Gallery" iconName="gallery" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Vault" iconName="vault" onClick={() => {}} />
                        
                        <CardIcon iconSize={30} label="Coding" iconName="code" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Todo List" iconName="todo" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Draw" iconName="draw" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Icons" iconName="icons" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Notes" iconName="notes" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Flow" iconName="flow" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Email" iconName="email" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Connect" iconName="connect" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Fonts" iconName="fonts" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Map" iconName="map" onClick={() => {}} />
                        <CardIcon iconSize={30} label="AI" iconName="robot" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Theme" iconName="theme" onClick={() => {}} />
                        <CardIcon iconSize={30} label="KB" iconName="knowledge" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Archive" iconName="archive" onClick={() => {}} />
                        <CardIcon iconSize={30} label="Notifications" iconName="notification" onClick={() => {}} />
                        
                        <CardIcon iconSize={30} label="Board" iconName="board" onClick={() => {}} />
                        
                        <CardIcon iconSize={30} label="Support" iconName="support" onClick={() => {}} />
                    </div>
                </div>
            </>
            )}

            
        </>
           
    )}

export default Dashboard;