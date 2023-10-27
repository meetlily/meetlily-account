'use client';

import ButtonIcon from '@/app/components/ButtonIcon';
import { Card } from 'flowbite-react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import 'nprogress/nprogress.css';
import { useState } from 'react';

interface AdultBoxProps {
	module?: object;
	item?: any;
	onClick: (item: any) => void;
}

const AdultBox: React.FC<AdultBoxProps> = ({ module, item, onClick }) => {
	const router = useRouter();
	const params = useParams();
	const paramQuery = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);

	const m: any = module;

	return (
		<>
			<Card
				className={`
                relative
                flex 
                flex-col
				items-center
                justify-center
                w-full
                py-0
                px-0
                text-center

                mt-2
                shadow
                transition
				
            `}
			>
				<ButtonIcon
					label={item.site.host}
					icon={'video'}
					size={'text-sm'}
					iconSize={46}
					showLabel={true}
					iconPosition="left"
					onClick={() => onClick(item)}
					description={m?.short_description}
				/>

				{/* <ModuleOptions installed={installed} /> */}
			</Card>
		</>
	);
};

export default AdultBox;
