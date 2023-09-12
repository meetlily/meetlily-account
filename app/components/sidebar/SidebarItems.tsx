'use client'

import { Sidebar } from "flowbite-react"
import AppIcons from "../icons/AppIcons"
import SidebarItemGroup from "./SidebarItemGroup"
import SidebarItem from "./SidebarItem"
import { useEffect, useState } from "react"
interface SidebarItemsProps {
    classNames?: string;
    divider?: boolean;
    sidebarData: string[];
}
const SidebarItems: React.FC<SidebarItemsProps> = ({
    classNames,
    divider,
    sidebarData
}) => {
    
    return (
        <Sidebar.Items>
            <>
    
            {sidebarData.map((group: any | null)=>{
                
                <Sidebar.ItemGroup key={group?.group}/>

          
              })}
            
            </>

        {/* <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={AppIcons['dashboard']}>
                <p>Dashboard</p>
            </Sidebar.Item>
            <hr />
            <Sidebar.Collapse icon={AppIcons['apps']} label="My Apps">
                <Sidebar.Item href="https://flow.meetlily.net" icon={AppIcons['flow']}>
                    Flow
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AppIcons['connect']}>
                    Connect
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AppIcons['blocks']}>
                    Blocks
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AppIcons['markedit']}>
                    <p>MarkEdit</p>
                </Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Item
                href="#"
                icon={AppIcons['server']}
                label="available"
                labelColor="success"
            >
                <p>Servers</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['database']}>
                <p>Databases</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['develop']} label="new" labelColor="info">
                <p>Develop</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['users']}>
                <p>Users</p>
            </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={AppIcons['website']}>
                <p>Website</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['project']} label="2" labelColor="warning">
                <p>Projects</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['shop']}>
                <p>e-Commerce</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['pos']}>
                <p>Point of Sale</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['sales']} label="5" labelColor="gray">
                <p>Sales</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['blogs']}>
                <p>Blogs</p>
            </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={AppIcons['email']} label="233" labelColor="success">
                <p>Inbox</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['connect']} label="Pro" labelColor="failure">
                <p>Connect</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['robot']}>
                <p>AI Assistant</p>
            </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
            <Sidebar.Item
                href="#"
                icon={AppIcons['premium']}
                label="on sale"
                labelColor="warning"
            >
                <p>Upgrade to Pro</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['documentation']}>
                <p>Documentation</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AppIcons['support']}>
                <p>Support</p>
            </Sidebar.Item>
        </Sidebar.ItemGroup> */}
    </Sidebar.Items>
    )
}

export default SidebarItems;