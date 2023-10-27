'use client';

import useInstallModuleModal from '@/app/hooks/useInstallModuleModal';

import { useMemo, useState } from 'react';

import { Badge, Modal } from 'flowbite-react';
import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup';
import ButtonIcon from '../ButtonIcon';

enum STEPS {
	INFO = 0,
	CONFIGURATION = 1,
	CUSTOM_FIELDS = 2,
	CUSTOMIZATION = 3,
	INSTALL = 4
}
interface InstallModuleModalProps {
	module?: any;
}
const InstallModuleModal: React.FC<InstallModuleModalProps> = ({ module }) => {
	const installModuleModal = useInstallModuleModal();
	const [step, setStep] = useState(STEPS.INFO);

	const onBack = () => {
		setStep((value) => value - 1);
	};
	const onNext = () => {
		setStep((value) => value + 1);
	};

	const actionLabel = useMemo(() => {
		if (step === STEPS.INSTALL) {
			return 'Install';
		}
		return 'Next';
	}, [step]);

	const secondaryActionLabel = useMemo(() => {
		if (step === STEPS.INFO) {
			return undefined;
		}
		return 'Back';
	}, [step]);
	let bodyContent = (
		<div
			className="
                flex
                flex-col
                gap-4
				p-4
            "
		>
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<div className="max-w-screen-md">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						{module?.name}
					</h2>
					<p className=" font-light text-gray-500 sm:text-xl dark:text-gray-400">
						{module?.description}
					</p>

					<Badge>
						<p>label</p>
					</Badge>
				</div>
			</div>
		</div>
	);
	if (step === STEPS.CONFIGURATION) {
		bodyContent = (
			<div
				className="
					flex
					flex-col
					gap-4
					p-4
				"
			>
				Configuration
			</div>
		);
	} else if (step === STEPS.CUSTOM_FIELDS) {
		bodyContent = (
			<div
				className="
					flex
					flex-col
					gap-4
					p-4
				"
			>
				Custom Fields
			</div>
		);
	} else if (step === STEPS.CUSTOMIZATION) {
		bodyContent = (
			<div
				className="
					flex
					flex-col
					gap-4
					p-4
				"
			>
				CUSTOMIZATION
			</div>
		);
	} else if (step === STEPS.INSTALL) {
		bodyContent = (
			<div
				className="
					flex
					flex-col
					gap-4
					p-4
				"
			>
				INSTALL
			</div>
		);
	}
	return (
		<Modal
			dismissible={false}
			id={'install-module-modal'}
			size={'5xl'}
			show={installModuleModal.isOpen}
			onClose={installModuleModal.onClose}
			position={'top-center'}
		>
			<Modal.Header>Install {module?.name} Module</Modal.Header>
			<Modal.Body>{bodyContent}</Modal.Body>
			<Modal.Footer>
				<ButtonGroup className="gap-6">
					<ButtonIcon
						icon={'arrowRight'}
						showLabel
						label={actionLabel}
						inline
						shadow
						outline
						size="text-md"
						iconSize={20}
						classNames="px-4 py-2 text-white bg-red-500 hover:bg-red-600"
						onClick={step === STEPS.INSTALL ? undefined : onNext}
					/>
					<div className={`${secondaryActionLabel ? '' : 'hidden'}`}>
						<ButtonIcon
							icon={'arrowLeft'}
							showLabel
							label={secondaryActionLabel}
							inline
							shadow
							outline
							size="text-md"
							iconSize={20}
							classNames="px-4 py-2"
							onClick={step === STEPS.INFO ? undefined : onBack}
						/>
					</div>
				</ButtonGroup>
			</Modal.Footer>
		</Modal>
	);
};

export default InstallModuleModal;
