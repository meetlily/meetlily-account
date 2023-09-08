'use client';

import { SafeUser } from "@/app/types";
import CardIcon from "./CardIcon";
import { useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import Loader from "./Loader";
import administrationData from "@/data/administration.json" 
import AppIcons from "./icons/AppIcons";

interface DashboardProps {
    currentUser?: SafeUser | null
}

const Dashboard: React.FC<DashboardProps> = ({
    currentUser
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const iconSize = 36;
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };
    useEffect(() => {
        // Simulating an asynchronous operation
        setIsLoading(true);
        // Scroll to the bottom when the component mounts or when the content changes
        scrollToBottom();
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);
    return (
        <>

            <div className="px-4 text-md flex flex-col items-center bg-gray-50 border-t border-b">
                <Heading title="Administration" size="text-lg text-gray-700 text-center font-semibold"/>
            </div>
            <div className="flex flex-col items-start justify-center mx-auto mb-4 p-4">
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
                    {administrationData.administration.map((admin) => (
                        <CardIcon key={admin.slug} iconSize={iconSize} label={admin.name} iconName={admin.icon_name} onClick={() => {}} />
                    ))}
                </div>
            </div>
    
            <div className="px-4 text-md flex flex-col items-center bg-gray-50  border-t border-b">
                <Heading title="Business Applications" size="text-lg text-gray-700 text-center font-semibold "/>
            </div>
            <div className="flex flex-col items-start justify-center mx-auto mb-4 p-4">
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
                    {administrationData.applications.map((item) => (
                        <CardIcon key={item.slug} iconSize={iconSize} label={item.name} iconName={item.icon_name} onClick={() => {}} />
                    ))}
                    {/* 

                    <CardIcon iconSize={iconSize} label="Clock In/Out" iconName="clockInOut" onClick={() => {}} />
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
                    <CardIcon iconSize={iconSize} label="Hosting" iconName="hosting" onClick={() => {}} />
                    <CardIcon iconSize={iconSize} label="Forms" iconName="forms" onClick={() => {}} /> */}
                </div>
            </div>
        
            <div className="px-4 text-md flex flex-col items-center bg-gray-50  border-t border-b">
                <Heading title="Tools and Utilities" size="text-lg text-gray-700 text-center font-semibold"/>
            </div>
            <div className="w-full flex flex-col items-start justify-center mx-auto mb-4 p-4">
            
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