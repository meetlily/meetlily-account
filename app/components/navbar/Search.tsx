'use client';
import { useParams } from 'next/navigation';
import IconComponent from '../icons/IconComponent';
const Search = () => {
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
                        font-semibold
                        px-6
                    "
				>
					Anywhere
				</div>
				<div
					className="
                        hidden
                        sm:block
                        text-sm
                        font-semibold
                        px-6
                        border-x-[1px]
                        flex-1
                        text-center
                    "
				>
					Any Week
				</div>
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
						<IconComponent iconName="search" class_name="text-white" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
