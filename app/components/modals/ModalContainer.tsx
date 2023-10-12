'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import Heading from '../Heading';
import IconComponent from '../icons/IconComponent';
import Logo from '../navbar/Logo';
interface ModalContainerProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	headerTitle?: string;
	subtitle?: string;
	body?: React.ReactElement;
	rightContent?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
	backgroundImage?: string;
	overlay?: boolean;
	showLogo?: boolean;
	hideClose?: boolean;
}
const ModalContainer: React.FC<ModalContainerProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	headerTitle,
	subtitle,
	body,
	rightContent,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryActionLabel,
	backgroundImage,
	overlay,
	showLogo,
	hideClose
}) => {
	const [showModal, setShowModal] = useState(isOpen);
	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);
	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [disabled, onClose]);
	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}
		onSubmit();
	}, [disabled, onSubmit]);
	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}
		secondaryAction();
	}, [disabled, secondaryAction]);
	if (!isOpen) {
		return null;
	}
	let bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading title="Which of these best describe your place?" subtitle="Pick a category" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh]  "></div>
		</div>
	);
	return (
		<>
			<div
				className={`
                    justify-center
                    items-center
                    flex
                    overflow-x-hidden
                    overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    outline-none
                    focus:outline-none
                    ${overlay ? 'bg-neutral-800/70' : 'bg-gray-50'}
                `}
			>
				<div
					className={`
                        relative 
                        flex 
                        flex-col 
                        m-2 
                        space-y-10 
                        bg-white
                        shadow-2xl 
                        rounded-2xl 
                        md:flex-row 
                        md:space-y-0 
                        md:m-0
                        translate
                        duration-300
                        ${showModal ? 'translate-y-0' : 'translate-y-full'}
                        ${showModal ? 'opacity-100' : 'opacity-0'}
                    `}
				>
					{/* Left Side */}
					<div className="py-10 px-6 md:py-16 xl:p-20">
						{/* CONTENT */}

						<div
							className="
                                    translate
                                    h-full
                                    flex
                                    flex-col
                                    w-full
                                "
						>
							<h2
								className={`
                                    mb-2
                                    text-xl
                                    sm:text-2xl
                                    md:text-3xl
                                    xl:text-4xl
                                    font-light
                                    md:font-semibold
                                `}
							>
								{headerTitle}
							</h2>
							<p
								className={`
                                    max-w-sm 
                                    mb-8
                                    font-sans 
                                    font-light 
                                    text-gray-600
                                `}
							>
								{subtitle}
							</p>
							{/* Body */}
							<div
								className="
                                        relative
                                        flex-auto
                                    "
							>
								{body}
							</div>
							{/* Footer */}
							<div className="flex flex-col gap-2">
								<div
									className="
                                            flex
                                            flex-row
                                            items-center
                                            gap-4
                                            w-full
                                            mt-5
                                        "
								>
									{secondaryAction && secondaryActionLabel && (
										<Button
											outline
											disabled={disabled}
											label={secondaryActionLabel}
											onClick={handleSecondaryAction}
										/>
									)}

									<Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
								</div>
								{footer}
							</div>
						</div>
					</div>
					{/* Right Side */}

					{backgroundImage && (
						<>
							<Image
								className="w-[430px] hidden md:block"
								src={backgroundImage}
								alt="Meetlily Dashboard"
								width={430}
								height={100}
							/>
						</>
					)}

					{showLogo && (
						<>
							<div className="w-[120px] mx-auto mb-4 absolute -top-10 left-4 sm:w-[140px] sm:left-28 md:top-2 md:left-30 xl:left-40 md:w-[160px] xl:w-[200px]">
								<Logo width={200} height={100} onClick={() => {}} />
							</div>
						</>
					)}
					{!hideClose && (
						<>
							<div
								onClick={handleClose}
								className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150"
							>
								<IconComponent iconName="close" size={36} />
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default ModalContainer;
