'use client';

import { Badge, Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser, HiShoppingBag } from "react-icons/hi2";
import AppIcons from "./icons/AppIcons";
import IconComponent from "./icons/IconComponent";
import Link from "next/link";
import { useCallback, useState } from "react";

interface SideBarLayoutProps {
    showSidebar: boolean;
    width?: string;
    classNames?: string;
    color?: string;
    id?: string;
    ariaLabel?: string;
}
const SideBarLayout: React.FC<SideBarLayoutProps> = ({
    showSidebar,
    width,
    classNames,
    color,
    id,
    ariaLabel
}) => {
    const [isCtaHidden, setCtaHidden] = useState(false);
    const toggleCta = useCallback(()=>{
        if(!isCtaHidden){
            setCtaHidden(true)
        } else {
            setCtaHidden(false)
        }
        
    }, [isCtaHidden])

    return (
        <>
        {showSidebar && (
            <>
            <Sidebar id={id} aria-label={ariaLabel} className={classNames} color={color}>
                <Sidebar.CTA color="failure" className={`${isCtaHidden?'hidden':'block'} border border-gray-200 mb-4 mt-2`}>
                    <div className="mb-3 flex items-center">
                    <Badge color="failure">
                        Under Development
                    </Badge>
                    <button
                        
                        onClick={()=>toggleCta()}
                        aria-label="Close"
                        className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg  p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                        type="button"
                    >
                        <IconComponent customIcon={AppIcons['close']} />
                    </button>
                    </div>
                    <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400 ">
                    <p>
                        Meetlily applications are currently under heavy development. This is a just preview of the new upcoming dashboard! 
                    </p>
                    </div>
                    <Link
                    className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
                    href="/"
                    >
                    <p>
                        Navigate to the homepage
                    </p>
                    </Link>
                </Sidebar.CTA>
                <Sidebar.Items>
                
                    <Sidebar.ItemGroup>
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['dashboard']}
                    >
                        <p>
                        Dashboard
                        </p>
                    </Sidebar.Item>
                    <hr />
                    
                    <Sidebar.Collapse
                        icon={AppIcons['apps']}
                        label="My Apps"
                    >
                        <Sidebar.Item 
                            href="#"
                            icon={AppIcons['products']}
                        >
                        Products
                        </Sidebar.Item>
                        <Sidebar.Item 
                            href="#"
                            icon={AppIcons['sales']}
                        >
                        Sales
                        </Sidebar.Item>
                        <Sidebar.Item 
                            href="#"
                            icon={AppIcons['refunds']}
                        >
                        Refunds
                        </Sidebar.Item>
                        <Sidebar.Item 
                            href="#"
                            icon={AppIcons['shipping']}
                        >
                        Shipping
                        </Sidebar.Item>
                    </Sidebar.Collapse>
                    
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['server']}
                        label="available"
                        labelColor="success"
                    >
                        <p>
                        Servers
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['database']}
                    >
                        <p>
                        Databases
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={AppIcons['develop']}
                        label="new"
                        labelColor="info"
                    >
                        <p>
                        Develop
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
                    
                    
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['website']}
                        >
                            <p>
                            Website
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['project']}
                            label="2"
                            labelColor="warning"
                        >
                            <p>
                            Projects
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['shop']}
                        >
                            <p>
                            e-Commerce
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['pos']}
                        >
                            <p>
                            Point of Sale
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['sales']}
                            label="5"
                            labelColor="gray"
                        >
                            <p>
                            Sales
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['blogs']}
                        >
                            <p>
                            Blogs
                            </p>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['email']}
                            label="233"
                            labelColor="success"
                        >
                            <p>
                            Inbox
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['connect']}
                            label="Pro"
                            labelColor="failure"
                        >
                            <p>
                            Connect
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['robot']}
                        >
                            <p>
                            AI Assistant
                            </p>
                        </Sidebar.Item>
                        
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={AppIcons['premium']}
                            label="on sale"
                            labelColor="warning"
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
                            icon={AppIcons['support']}
                        >
                            <p>
                            Support
                            </p>
                        </Sidebar.Item>
                        </Sidebar.ItemGroup>
                </Sidebar.Items>
                
            </Sidebar>
                
            </>
        )}
            
        </>
    )
}

export default SideBarLayout;
    