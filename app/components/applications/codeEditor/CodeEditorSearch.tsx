'use client';
import IconComponent from '@/app/components/icons/IconComponent';
import { useParams } from 'next/navigation';
const CodeEditorSearch = () => {
	const params = useParams();
	return (
		<div
			className="
        border-[1px]
        border-gray-700
        w-full
        md:w-auto
        py-0
        px-2
        rounded-full
        shadow-sm
        hover:shadow-md
        hover:bg-gray-900
        transition
        cursor-pointer
        bg-black
      "
		>
			<div
				className="
                flex
                flex-row
                items-center
                justify-between
            "
			>
				<div
					className="
                        text-sm
                        pl-6
                        pr-2
                        text-gray-50
                        flex
                        flex-row
                        items-center
                        gap-3
                    "
				>
					<div className="hidden sm:block">Search {params?.slug || ''}</div>
					<div className="p-1 rounded-full text-white">
						<IconComponent iconName="search" class_name="text-white" size={20} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodeEditorSearch;
