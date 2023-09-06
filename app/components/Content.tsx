'use client';

import { SafeUser } from "@/app/types";
import Container from "./Container";
import Heading from "./Heading";
import ClientOnly from "./ClientOnly";
import Footer from "./footer/Footer";

interface ContentProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
    currentUser?: SafeUser | null
}
const Content: React.FC<ContentProps> = ({
    title,
    subtitle,
    children,
    currentUser
}) => {
    console.log(currentUser, `Content for ${title}`)
    if(currentUser){
        console.log(title)
    }
    return (
        <ClientOnly>
            <div
            className='
                flex
                flex-row
                mx-auto
                relative
                mb-6
            '
            >
                <div className='
                    
                    container
                    mx-auto
                    my-auto
                    w-full
                    h-full
                    mt-1
                    absolute
                    bottom-2
                    right-0
                    left-0
                '>
                    <div className="
                                overflow-hidden
                                flex 
                                flex-col 
                                items-left
                                justify-center
                                gap-3
                                md:gap-0
                                px-3
                                ">
                      
                            <div className="
                                
                                ">
                                    <Heading bold title={title} subtitle={subtitle}/>  
                            </div>
                           
                            <div
                                className="
                                    flex 
                                    flex-col 
                                    items-left
                                    justify-start
                                    gap-3
                                    md:gap-0
                                    mt-3
                                    w-full
                                    rounded-md
                                    mb-2
                                "
                            >
                                
                                {children}
                            </div>
                       
                    </div>
                </div>
        </div>
        
      </ClientOnly>
    )
}

export default Content;