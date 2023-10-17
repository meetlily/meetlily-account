'use client';

import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup';
import { useCallback, useEffect, useState } from 'react';
import useModuleOptionDrawer from '../hooks/useModuleOptionDrawer';
import ButtonIcon from './ButtonIcon';
import IconComponent from './icons/IconComponent';
import Search from './navbar/Search';

interface HeadingProps {
	title: any;
	headerTitle?: string;
	subtitle?: string;
	center?: boolean;
	fontColor?: string;
	bold?: boolean;
	size?: string;
	iconName?: string;
	iconSize?: number;
	options?: React.ReactElement;
	showAsCard?: boolean;
	showOptionButton?: boolean;
	showAddButton?: boolean;
	enableSearch?: boolean;
}
const Heading: React.FC<HeadingProps> = ({
	title,
	headerTitle,
	subtitle,
	center,
	fontColor,
	bold,
	size,
	iconName,
	iconSize,
	options,
	showAsCard,
	showOptionButton,
	enableSearch,
	showAddButton
}) => {
	if (!iconName) {
		iconName = 'module';
	}
	if (!iconSize) {
		iconSize = 26;
	}
	const moduleOptionDrawer = useModuleOptionDrawer();
	const [showModuleDrawer, setShowModuleDrawer] = useState(false);

	useEffect(() => {
		//setShowModuleDrawer(moduleOptionDrawer.isOpen);
	}, [moduleOptionDrawer, setShowModuleDrawer]);
	const handleConfigClick = useCallback(
		(title: string) => {
			console.log(moduleOptionDrawer);
			moduleOptionDrawer.onOpen();
			//setShowModuleDrawer()
		},
		[moduleOptionDrawer]
	);
	return (
		<>
			<div
				className={`
			flex
			flex-col
			w-full
              font-bold
              mt-2
              text-gray-700
			  dark:text-gray-100
              ${size ? size : 'text-2xl'}
              ${bold ? `font-bold` : `font-light`}
        `}
			>
				<div
					className={`${
						showAsCard
							? ' bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
							: ''
					} p-2 mb-[2px] items-start flex flex-col w-full`}
				>
					<div className="flex flex-row w-full items-center">
						<div className="flex flex-col w-full items-start">
							<ButtonGroup className="flex gap-4">
								{title && (
									<>
										<div className="flex">
											<>
												<IconComponent iconName={iconName} size={iconSize} />
											</>
										</div>
										<div className="flex capitalize">{title}</div>
									</>
								)}
							</ButtonGroup>
						</div>

						<div className="flex flex-col  w-full items-end"></div>
						<div className="flex flex-col  w-full items-end">
							<div className="flex flex-row gap-4">
								{enableSearch && <Search />}
								<>
									{options ? (
										{ options }
									) : (
										<>
											{showAddButton && (
												<ButtonGroup className="flex gap-4">
													<ButtonIcon
														icon={'add'}
														iconSize={26}
														label={`Add ${title}`}
														inline
														shadow
														showLabel
														onClick={() => handleConfigClick(title)}
													/>
												</ButtonGroup>
											)}
											{showOptionButton && (
												<ButtonGroup className="flex gap-4">
													<ButtonIcon
														icon={'moduleOptions'}
														iconSize={26}
														label="Settings"
														inline
														shadow
														onClick={() => handleConfigClick(title)}
													/>
												</ButtonGroup>
											)}
										</>
									)}
								</>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Heading;
