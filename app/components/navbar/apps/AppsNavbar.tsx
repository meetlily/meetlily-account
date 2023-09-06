'use client'
import { SafeUser } from "@/app/types"
import { Dropdown } from "flowbite-react"
import IconComponent from "../../icons/IconComponent"
import TabNav from "./TabNav"

interface AppsNavbarProps {
    currentUser?: SafeUser | null
}
const AppsNavbar: React.FC<AppsNavbarProps> = ({
    currentUser
}) => {
    return (
        <>
        <Dropdown
            id="appsnavbar-dropdown"
            className="overflow-hidden py-0 rounded-xl justify-start z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700"
            placement="bottom"
            inline
            label={
                <IconComponent size={26} iconName={"apps"} class_name="text-white"/>
            }
            arrowIcon={false}
        >
            <TabNav  />
        </Dropdown>
        </>
    )
}

export default AppsNavbar;