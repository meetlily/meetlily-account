'use client';

import { ModuleType, SafeUser } from "@/app/types";
import CardIcon from "./CardIcon";
import { Key, useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import Loader from "./Loader";
import administrationData from "@/data/administration.json" 
import { useRouter } from 'next/navigation';

import ModuleLists from "./modules/ModuleLists";
interface DashboardProps {
    currentUser?: SafeUser | null
}

const Dashboard: React.FC<DashboardProps> = ({
    currentUser
}) => {
    const router = useRouter();
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
            {isLoading && (
				<Loader />
			)}
            {currentUser && (

                <div className="flex flex-col">
                    <div className="px-4 text-md flex flex-col items-center">
                        <Heading title="Administration" size="text-lg text-gray-700 text-center font-semibold"/>
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
                            {administrationData.administration.map((admin, i) => (

                                <CardIcon 
                                    key={admin.slug} 
                                    iconSize={iconSize} 
                                    label={admin.name} 
                                    iconName={admin.icon_name} 
                                    buttonId={`${admin.slug}-button`} 
                                    contentId={`${admin.slug}-content`} 
                                    description={admin.description} 
                                    onClick={() => router.push(`/admin/${admin.slug}`)} 
                                />
                            ))}
                        </div>
                    </div>
            
                    <div className="px-4 text-md flex flex-col items-center bg-gray-50  border-t border-b">
                        <Heading title="Modules" size="text-lg text-gray-700 text-center font-semibold "/>
                    </div>
                    <ModuleLists />
                
                    {/* <div className="px-4 text-md flex flex-col items-center bg-gray-50  border-t border-b">
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
                            {administrationData.tools.map((item) => (
                                <CardIcon onClick={() => router.push(`/admin/${item.slug}`)} key={item.slug} iconSize={iconSize} label={item.name} iconName={item.icon_name} buttonId={`${item.slug}-button`} contentId={`${item.slug}-content`}  description={item.description} />
                            ))}
                        </div>
                    </div> */}
                </div>
            )}
            
        </>
           
    )}

export default Dashboard;

