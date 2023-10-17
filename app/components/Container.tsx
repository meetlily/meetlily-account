'use client';

interface ContainerProps {
	children: React.ReactNode;
	fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, fluid }) => {
	console.log(fluid, 'Container');
	return (
		<div
			className={`${fluid ? 'fluid' : 'container'} mx-auto 
			flex
			flex-col
			w-full
            xl:px-100
            md:px-5
            sm:px-2
            px-2`}
		>
			{children}
		</div>
	);
};

export default Container;
