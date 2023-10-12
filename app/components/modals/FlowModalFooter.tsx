'use client';

import { Button, Modal } from 'flowbite-react';
interface FlowModalFooterProps {
	primaryAction?: () => void;
	secondaryAction?: () => void;
	primaryActionLabel?: string;
	primaryActionColor?: string;
	primaryActionClassNames?: string;
	secondaryActionLabel?: string;
	secondaryActionColor?: string;
	secondaryActionClassNames?: string;
	footer?: React.ReactElement;
	show?: boolean;
}

const FlowModalFooter: React.FC<FlowModalFooterProps> = ({
	primaryAction,
	primaryActionColor,
	secondaryActionColor,
	primaryActionClassNames,
	secondaryActionClassNames,
	secondaryAction,
	primaryActionLabel,
	secondaryActionLabel,
	footer,
	show
}) => {
	return (
		<>
			{show && (
				<Modal.Footer>
					{footer ? (
						<>{footer}</>
					) : (
						<>
							<Button
								className={primaryActionClassNames}
								color={primaryActionColor}
								onClick={primaryAction}
							>
								{primaryActionLabel}
							</Button>
							<Button
								className={secondaryActionClassNames}
								color={secondaryActionColor}
								onClick={secondaryAction}
							>
								{secondaryActionLabel}
							</Button>
						</>
					)}
				</Modal.Footer>
			)}
		</>
	);
};

export default FlowModalFooter;
