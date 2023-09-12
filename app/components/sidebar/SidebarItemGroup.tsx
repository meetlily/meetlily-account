'use client'

import { Badge, Sidebar } from "flowbite-react";
import AppIcons from "../icons/AppIcons";
import SidebarItem from "./SidebarItem";
import { useEffect } from "react";
import Link from "next/link";
import IconComponent from "../icons/IconComponent";
interface SidebarItemGroupProps {
    classNames?: string;
    divider?: boolean;
    children?: React.ReactNode | null;
    id?: string;
    sidebarGroupData?: string[] | null;
}
const SidebarItemGroup: React.FC<SidebarItemGroupProps> = ({
    classNames,
    divider,
    children,
    id,
    sidebarGroupData
}) => {
    console.log(sidebarGroupData)
    return (
        <>
        {children}
        
        {sidebarGroupData?.map((group: any)=>{
                
              <div>item</div>
            })}
                

            
        
        </>
    )
}

export default SidebarItemGroup;