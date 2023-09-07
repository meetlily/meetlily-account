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
    return (
    
            <Container>
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
                    mx-auto
                    my-auto
                    w-full
                    h-full
                    mt-1
                '>
                    <div className="
                                flex 
                                flex-col 
                                items-left
                                justify-center
                                gap-3
                                md:gap-0
                    
                                ">
                      
                            <div className="
                                
                                ">
                                    <Heading bold title={title} subtitle={subtitle}/>  
                            </div>
                           
                            <div
                                className="
                                    flex 
                                    flex-col 
                                    items-center
                                    justify-between
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
        </Container>

    )
}

export default Content;