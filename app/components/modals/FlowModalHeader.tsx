'use client';

import { Modal } from 'flowbite-react';
interface FlowModalHeaderProps {
  header?: React.ReactElement;
  show?: boolean;
}
const FlowModalHeader: React.FC<FlowModalHeaderProps> = ({header, show }) => {
  return (
    <>
        {show && (
            <Modal.Header>
                {header}
            </Modal.Header>
        )}
    </>
  )
}

export default FlowModalHeader;