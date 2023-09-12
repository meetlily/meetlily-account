'use client'
import { Dropdown, Navbar, Tabs } from "flowbite-react";
import AvatarNav from "@/app/components/AvatarNav";
import Logo from "@/app/components/navbar/Logo";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Notification from './notification/Notification';
import AppIcons from "../icons/AppIcons";
import { useRouter } from "next/navigation";
import IconComponent from "../icons/IconComponent";
import AddItem from "./apps/AddItem";
import LoginButton from "../LoginButton";
import { Session } from "next-auth";

interface ContentData {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    active: boolean;
}
interface PageNavbarProps {
    currentUser?: any,
    session?: Session
}
const PageNavbar: React.FC<PageNavbarProps> = ({
    currentUser,
    session
}) => {
    const router = useRouter()
    const [tabContent, setTabContent] = useState<ContentData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const tabData: ContentData[] = tabContent;
    useEffect(() => {
        setIsLoading(true)
        // Fetch the data from the API
        fetch('/api/category')
        .then((response) => response.json())
        .then((data) => setTabContent(data))
        .catch((error) => console.error('Error fetching sections:', error))
        .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
        <div className="bg-gray-800 flex flex-col items-center">
            <Navbar fluid className="max-w-[2500px] w-full bg-gray-800">
                    <div className="flex md:order-0 gap-1 md:gap-4 pr-2 md:pr-4">
                        <Navbar.Brand href="/" className="gap-2 sm:gap-1 pl-2 w-[120px] md:w-[280px]">
                            <Logo color={"white"} onClick={() => {}} height={200} width={200} />
                        </Navbar.Brand>
                    </div>
                    
                    <div className="flex md:order-2 gap-4 pr-2">
                    
                    {tabData && currentUser && (
                            <>
                        <Notification currentUser={currentUser}/>
                        
                                <Dropdown
                                    className="overflow-hidden w-[320px] py-0 rounded-xl justify-start z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-700 dark:bg-gray-800"
                                    placement="bottom"
                                    inline
                                    label={
                                        <IconComponent size={26} iconName={"apps"} color={"white"}/>
                                    }
                                    arrowIcon={false}
                                >
                                    <Tabs.Group
                                    aria-label="Default tabs"
                                    style="underline"
                                    >

                                    {tabData.map((tab) => {
                                        tab.active = false;
                                        if(tab.slug === 'administration'){
                                            tab.active = true;
                                            tab.name = 'Admin';
                                        }
                                        return (
                                            
                                                <Tabs.Item
                                                    key={tab.id}
                                                    active={tab.active}
                                                    icon={AppIcons[tab.icon]}
                                                    title={tab.name}
                                                    className='rounded-0'
                                                >
                                                    
                                                    {tab.name === 'Admin' && (
                                                        <>
                                                        <div className="grid grid-cols-3 py-1 px-2 text-center bg-white w-[320px]">
                                                            <AddItem title="Servers" iconName="server" iconSize={24} fontSize={18} inline={false}/>
                                                            <AddItem title="Databases" iconName="database" iconSize={24} fontSize={18} inline={false}/>
                                                            <AddItem title="Integrations" iconName="integration" iconSize={24} fontSize={18} inline={false}/>
                                                            <AddItem title="Users" iconName="users" iconSize={24} fontSize={18} inline={false}/>
                                                            <AddItem title="Settings" iconName="gears" iconSize={24} fontSize={18} inline={false}/>
                                                        </div>
                                                        </>
                                                    )}
                                                    {tab.name === 'Applications' && (
                                                        <>
                                                        <div className="grid grid-cols-3 py-1 px-2 text-center bg-white w-[320px]">
                                                            <AddItem title="Accounting" iconName="accounting" iconSize={24} fontSize={18} inline={false}/>
                                                            <AddItem title="PoS" iconName="pos" iconSize={24} fontSize={18} inline={false}/>
                                                            <AddItem title="Sales" iconName="sales" iconSize={24} fontSize={18} inline={false}/>
                                                        </div>
                                                    
                                                        </>
                                                    )}
                                                    {tab.name === 'Tools' && (
                                                        <>
                                                            <div className="grid grid-cols-3 py-1 px-2 text-center max-w-[600px] md:max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1920px] bg-white w-[320px] ">
                                                                <AddItem title="Add Icon" iconName="icons" iconSize={24} fontSize={18} inline={false}/>
                                                                <AddItem title="Add Block" iconName="addBlock" iconSize={24} fontSize={18} inline={false}/>
                                                            </div>
                                                            
                                                        </>
                                                    )}
                                                </Tabs.Item>
                                        )
                                    })}
                                    </Tabs.Group>
                                    
                                </Dropdown>
                            </>
                        )}
                        {currentUser && (
                        <>
                        <Dropdown
                            placement="bottom"
                            inline
                            arrowIcon={false}
                            className=" w-[280px] mt-4 navProfileDropdown rounded-b-md"
                            label={
                                <AvatarNav currentUser={currentUser} width={30} height={30} image={currentUser?.image ? currentUser?.image : '/images/placeholder.jpg'}/>
                            }
                        >
                        <Dropdown.Header className="bg-gray-800 py-4 px-10 -mt-1 text-center rounded-t-md  border-t border-gray-400 text-white">
                                <AvatarNav currentUser={currentUser} width={30} height={30} image={currentUser?.image ? currentUser?.image : '/images/placeholder.jpg'}/>
                            <span className="block text-sm mt-2">{currentUser?.name}</span>
                            <span className="block truncate text-sm font-medium">
                            {currentUser?.email}
                            </span>
                        </Dropdown.Header>
                            <div className="bg-white rounded-b-md">
                                <Dropdown.Item onClick={ () => router.push('/dashboard') } icon={AppIcons['dashboard']} className="py-3">Dashboard</Dropdown.Item> 
                                <Dropdown.Item icon={AppIcons['cog']} onClick={ () => router.push('/account') } className="py-3">Account</Dropdown.Item>
                                <Dropdown.Item icon={AppIcons['support']} onClick={ () => router.push('/support') } className="py-3">Support</Dropdown.Item>
                                <Dropdown.Item  icon={AppIcons['info']} onClick={ () => router.push('/about') }className="py-3">About Meetlily</Dropdown.Item>
                                <Dropdown.Item onClick={ signOut } icon={AppIcons['signOut']} className="py-3 font-semibold border-t transition rounded-b-md">Sign out</Dropdown.Item>
                            </div>
                        </Dropdown>
                        </>
                    )}
                    {!currentUser && (
                        <>
                        <LoginButton />
                        </>
                    )}
                    </div>
             
                </Navbar>
            </div>
            </>
    )
}

export default PageNavbar;
