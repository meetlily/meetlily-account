'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
interface LogoProps {
  onClick: () => void;
  height: number;
  width: number;
}
const Logo: React.FC<LogoProps> = ({
  onClick,
  height,
  width,
}) => {
    const router = useRouter();
    return (
      <div className="max-w-7xl bg-none">
        <div className="flex flex-wrap justify-between lg:-ml-2">
            <Image
                className=""
                src="https://www.meetlily.net/logo/white-full.svg"
                alt="Meetlily Dashboard"
                width={width}
                height={height}
            />
        </div>
      </div>
    )
}

export default Logo;