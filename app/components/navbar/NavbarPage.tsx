'use client';

import { Button, Navbar } from 'flowbite-react';
import Logo from './Logo';
import { useRouter } from 'next/navigation';
import { SafeUser } from '@/app/types';
import Search from './Search';
interface NavbarPageProps {
    currentUser?: SafeUser | null
    hideNavbar?: boolean;
    navColor?: string;
    classes?: string;
    cta?: React.ReactElement;
    ctaOrder?: number | 3;
    items?: React.ReactElement;
    itemsOrder?: number | 2;
    showLogo?: boolean;
    logoLink?: string;
    logoColor?: string;
    logoOrder?: number | 0;
    showSearch?: boolean;
    searchOrder?: number | 1;
    
}
const NavbarPage: React.FC<NavbarPageProps> = ({
    currentUser,
    hideNavbar,
    classes,
    cta,
    ctaOrder,
    items,
    itemsOrder,
    showLogo,
    logoLink,
    logoColor,
    logoOrder,
    navColor,
    showSearch,
    searchOrder,
}) => {
    const router = useRouter();
    if(!logoLink){
      logoLink = '/';
    }
    if(navColor === 'dark'){
      navColor = 'bg-gray-800';
    }
    if(!logoColor){
      logoColor = 'black';
    }
    if(!logoOrder){
      logoOrder = 0;
    }
  return (
    <Navbar
      border={true}
      hidden={hideNavbar}
      className={classes}
      color={navColor}
      
    >
      <div className={`flex md:order-${logoOrder}`}>
      {showLogo && (
        <>
          <Navbar.Brand href={logoLink}>
            <Logo width={120} height={120} color={logoColor} onClick={() => router.push('/')}/>
          </Navbar.Brand>
        </>
      )}
      </div>
      <div className={`flex md:order-${searchOrder}`}>
      {showSearch && (
          <Search />
      )}
      </div>
      <div className={`flex md:order-${ctaOrder}`}>
        {cta}
        <Navbar.Toggle />
      </div>
      <div className={`flex md:order-${itemsOrder}`}>
        <Navbar.Collapse>
          {items}
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavbarPage;


