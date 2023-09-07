'user client'
import { Navbar } from "flowbite-react"

const NavbarItems = () => {
    return (
        <>
            <Navbar.Link active href="#">
                <p>
                    Home
                </p>
            </Navbar.Link>
            <Navbar.Link href="#">
            About
            </Navbar.Link>
            <Navbar.Link href="#">
            Services
            </Navbar.Link>
            <Navbar.Link href="#">
            Pricing
            </Navbar.Link>
            <Navbar.Link href="#">
            Contact
            </Navbar.Link>
        </>
    )
}

export default NavbarItems;