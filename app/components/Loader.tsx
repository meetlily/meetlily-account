'use client';
interface LoaderProps {
	isLoading?: boolean;
	align?: string | 'center';
	size?: string | 'md';
	color?: string | 'dark';
	title?: string | 'Loading...';
	ariaLabel?: string;
}
import { Spinner } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useLoader from '../hooks/useLoader';

const Loader: React.FC<LoaderProps> = ({ isLoading, align, size, color, title, ariaLabel }) => {
	const loader = useLoader();
	const router = useRouter();
	const [showLoader, setShowLoader] = useState(false);
	// useEffect(() => {
	// 	setShowLoader(loader.isLoading);
	// }, [loader, setShowLoader]);

	//const loader = useLoader();
	return (
		<>
			{showLoader && (
				<div className="fixed z-20 top-1/2 left-1/2 flex flex-col items-center justify-center bg-transparent">
					<Spinner color={color} size={'lg'} title={title} aria-label={ariaLabel} />
				</div>
			)}
		</>
	);
};

export default Loader;
