'use client';

import { Badge, Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser, HiShoppingBag } from "react-icons/hi2";
import AppIcons from "./icons/AppIcons";

interface SideBarLayoutProps {
    showSidebar: boolean;
    width?: string;
}
const SideBarLayout: React.FC<SideBarLayoutProps> = ({
    showSidebar,
    width
}) => {
    return (
        <>
        {showSidebar && (
            <>
            <Sidebar aria-label="Sidebar with call to action button" className="h-full bg-gray-50 hidden md:block md:min-w-[240px] lg:min-w-[300px]" color="gray">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                    <Sidebar.Item
                        href="#"
                        icon={HiChartPie}
                    >
                        <p>
                        Dashboard
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['analytics']}
                        label="Pro"
                        labelColor="dark"
                    >
                        <p>
                        Kanban
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['email']}
                        label="3"
                    >
                        <p>
                        Inbox
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['users']}
                    >
                        <p>
                        Users
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['shop']}
                    >
                        <p>
                        Products
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['signIn']}
                    >
                        <p>
                        Sign In
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['signUp']}
                    >
                        <p>
                        Sign Up
                        </p>
                    </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['chartPie']}
                        >
                            <p>
                            Upgrade to Pro
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['documentation']}
                        >
                            <p>
                            Documentation
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['help']}
                        >
                            <p>
                            Help
                            </p>
                        </Sidebar.Item>
                        </Sidebar.ItemGroup>
                </Sidebar.Items>
                <Sidebar.CTA>
                    <div className="mb-3 flex items-center">
                    <Badge color="warning">
                        Beta
                    </Badge>
                    <button
                        aria-label="Close"
                        className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                        type="button"
                    >
                        
                    </button>
                    </div>
                    <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
                    <p>
                        Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your
                        profile.
                    </p>
                    </div>
                    <a
                    className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
                    href="#"
                    >
                    <p>
                        Turn new navigation off
                    </p>
                    </a>
                </Sidebar.CTA>
            </Sidebar>
                
            </>
        )}
            
        </>
    )
}

export default SideBarLayout;
    