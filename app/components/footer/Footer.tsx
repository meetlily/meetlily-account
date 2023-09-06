'use client';

import Container from "../Container";

interface FooterProps {
    children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({
    children
}) => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm bottom-0">
            <div className="py-1 border-b-[1px]">
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    )
}

export default Footer;