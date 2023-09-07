'use client'

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
    currentUser?: SafeUser | null
    showNavbar: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
    currentUser,
    showNavbar
}) => {
    return (
        <>
        {showNavbar && (
            <>
            <div className="fixed w-full bg-white z-10 shadow-sm">
                <div className="py-1 border-b-[1px]">
                    <Container>
                        <div className="
                        flex 
                        flex-row 
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                        ">
                            <Logo color={"black"} width={120} height={120} onClick={() => {}}/>
                            {/*<Search />*/}
                        </div>
                    </Container>
                </div>
            </div>
            </>
        )}
        </>
    )
}

export default Navbar;