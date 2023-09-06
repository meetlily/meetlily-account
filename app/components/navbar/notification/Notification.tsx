import { SafeUser } from "@/app/types"
import { Dropdown } from "flowbite-react"
import IconComponent from "../../icons/IconComponent"
import { signOut } from "next-auth/react"
import NotifyItem from "./NotifyItem"
interface NotificationProps {
    currentUser?: SafeUser | null
}
const Notification: React.FC<NotificationProps> = ({
    currentUser
}) => {
    return (
        <>
        <Dropdown
            id="notification-dropdown"
            className="overflow-hidden py-0 rounded-xl justify-start z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700"
            placement="bottom"
            inline
            label={
                <IconComponent size={26} iconName={"notification"} class_name="text-white"/>
            }
            arrowIcon={false}
        >

        <Dropdown.Header className="block py-2 px-4 text-base font-medium text-center  text-white bg-gray-800 dark:bg-gray-600 dark:text-gray-300">
              Notifications
        </Dropdown.Header>
        <div>
            <Dropdown.Item className="flex justify-start py-3 px-4 border-b text-left bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:border-gray-600">
                <NotifyItem />
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="flex justify-start py-3 px-4 border-b text-left bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:border-gray-600">
                <NotifyItem />
            </Dropdown.Item>
            
        </div>
        </Dropdown>
        </>
    )
}

export default Notification;