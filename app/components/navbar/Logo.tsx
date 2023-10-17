'use client';

import logo from '@/public/logo/orange-full.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface LogoProps {
	color?: string;
	onClick: () => void;
	height: number;
	width: number;
}
const Logo: React.FC<LogoProps> = ({ color, onClick, height, width }) => {
	const router = useRouter();
	return (
		<div className="flex flex-wrap justify-between lg:-ml-2 cursor-pointer">
			<Image
				className=""
				src={logo}
				alt="Meetlily Dashboard"
				width={width}
				height={height}
				onClick={onClick}
			/>
		</div>
	);
};

export default Logo;
