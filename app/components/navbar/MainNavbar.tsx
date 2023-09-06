'use client'
import { Dropdown, Navbar } from "flowbite-react";
import Avatar from "../Avatar";
import Logo from "./Logo";
import Container from "../Container";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import useAccountModal from "@/app/hooks/useAccountModal";
import { useCallback, useState } from "react";
import NavSearch from "./NavSearch";
import Notification from './notification/Notification';
import { BsDash } from "react-icons/bs";
import { FaArrowRightFromBracket, FaUser, FaDesktop, FaGear, FaBook, FaInfo, FaHeadset } from "react-icons/fa6";
import AppsNavbar from "./apps/AppsNavbar";
interface MainNavbarProps {
    currentUser?: SafeUser | null
}
const MainNavbar: React.FC<MainNavbarProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    const accountModal = useAccountModal();
    const [ isOpen, setIsOpen ] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])
    const onRent = useCallback(() =>{
        if (!currentUser) {
            return loginModal.onOpen();
        }
        rentModal.onOpen();
    }, [currentUser, loginModal, rentModal])
    const image = currentUser?.image || '/images/placeholder.jpg';
    const userName = currentUser?.name || '';
    return (
        <>
        
            <Navbar  className="mx-auto bg-gray-800 border-b">

                <Navbar.Brand href="/" className="gap-4 pl-2">
                    <Logo onClick={() => {}} height={120} width={120} />
                    <NavSearch />
                </Navbar.Brand>

                <div className="flex md:order-2 gap-4 pr-2">
                    <Notification currentUser={currentUser}/>
                    <AppsNavbar currentUser={currentUser}/>
                    <Dropdown
                        placement="bottom"
                        inline
                        arrowIcon={false}
                        className=" border-gray-400 w-[280px] mt-4 navProfileDropdown"
                        label={
                            <Avatar currentUser={currentUser} width={30} height={30} image={currentUser?.image ? currentUser?.image : '/images/placeholder.jpg'}/>
                        }
                    >
                    
                    <Dropdown.Header className="bg-gray-800 py-4 px-10 -mt-1 text-center rounded-t-md border-t border-gray-600 text-white">
                            <Avatar currentUser={currentUser} width={30} height={30} image={currentUser?.image ? currentUser?.image : '/images/placeholder.jpg'}/>
                        <span className="block text-sm mt-2">{currentUser?.name}</span>
                        <span className="block truncate text-sm font-medium">
                        {currentUser?.email}
                        </span>
                    </Dropdown.Header>
                    {currentUser ? (
                        <>
                        <div className="bg-white">
                            <Dropdown.Item onClick={ accountModal.onOpen } icon={FaUser} className="py-3">Account</Dropdown.Item>
                            <Dropdown.Item icon={FaBook} className="py-3">Documentation</Dropdown.Item>
                            <Dropdown.Item icon={FaHeadset} className="py-3">Support</Dropdown.Item>
                            <Dropdown.Item  icon={FaInfo} className="py-3">About Meetlily</Dropdown.Item>
                            
                            
                            <Dropdown.Item onClick={ signOut } icon={FaArrowRightFromBracket} className="bg-gray-800 border-t text-white py-3 hover:text-gray-700 hover:bg-transparent transition rounded-b-md">Sign out</Dropdown.Item>
                        </div>
                        </>
                    ) : (
                        <>
                            <Dropdown.Item>Sign In</Dropdown.Item>
                            <Dropdown.Item>Sign Up</Dropdown.Item>
                        </>
                    )}
                    </Dropdown>
                   
                </div>
          
                </Navbar>
            
            </>
    )
}

export default MainNavbar;
