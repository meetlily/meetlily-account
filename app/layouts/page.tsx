'use client'
import { Metadata } from 'next'
import ClientOnly from "@/app/components/ClientOnly";
import ToasterProvider from "@/app/components/providers/ToasterProvider";
import { Open_Sans } from 'next/font/google';
import SideBarLayout from '@/app/components/SideBarLayout';
import NavbarPage from '@/app/components/navbar/NavbarPage';
import NavbarItems from '@/app/components/navbar/NavbarItems';


interface metaData {
    title: string;
    description: string;
}
const font = Open_Sans({
    subsets: ["latin"]
})
interface PageLayoutProps {
    metadata?: Metadata;
    children: React.ReactNode;
    showSidebar: boolean;
    hideNavbar: boolean;
}
const PageLayout: React.FC<PageLayoutProps> = ({
    metadata,
    children,
    showSidebar,
    hideNavbar
}) => {
    const metaData: Metadata = {
      title: metadata?.title,
      description: metadata?.description
    }

    return (
        <>

        <div className="bg-white w-full fluid h-full">
        <ClientOnly>
            <ToasterProvider />
            
            <NavbarPage navColor={"success"} classes="border-b" items={<NavbarItems />} hideNavbar={hideNavbar} showLogo={true}/>
                
                <div className='flex flex-row items-start justify-center fluid'>
                    <SideBarLayout showSidebar={showSidebar} />
                    {children}
                </div>
        </ClientOnly>
        </div>

        </>
    )
}

export default PageLayout;

