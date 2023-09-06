'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="
            max-w-[2520px] 
            mx-auto 
            xl:px-100
            md:px-5
            sm:px-2
            px-4
            bg-white
            ">
            {children}
        </div>
    )
}

export default Container;