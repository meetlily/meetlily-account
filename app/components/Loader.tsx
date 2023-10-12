'use client';
interface LoaderProps {
	align?: string | 'center';
	size?: string | 'md';
	color?: string | 'dark';
	title?: string | 'Loading...';
	ariaLabel?: string;
}
import { Spinner } from 'flowbite-react';

const Loader: React.FC<LoaderProps> = ({ align, size, color, title, ariaLabel }) => {
	return (
		<>
			<div className="fixed z-40 flex flex-col items-center justify-center mx-auto h-full w-full bg-transparent">
				<Spinner color={color} size={'lg'} title={title} aria-label={ariaLabel} />
			</div>
		</>
	);
};

export default Loader;
