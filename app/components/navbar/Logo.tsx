'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
interface LogoProps {
  color?: string;
  onClick: () => void;
  height: number;
  width: number;
}
const Logo: React.FC<LogoProps> = ({
  color,
  onClick,
  height,
  width,
}) => {
    const router = useRouter();
    return (
   
        <div className="flex flex-wrap justify-between lg:-ml-2 cursor-pointer"
          onClick={() => router.push('/')}
        >
            <Image
                className=""
                src={`https://www.meetlily.net/logo/${color}.svg`}
                alt="Meetlily Dashboard"
                width={width}
                height={height}
            />
        </div>
    )
}

export default Logo;