'use client';

import { Modal } from 'flowbite-react';
interface FlowModalBodyProps {
  body?: React.ReactElement;
  show?: boolean;
}
const FlowModalBody: React.FC<FlowModalBodyProps> = ({body, show }) => {
  return (
    <>
        {show && (
            <Modal.Body>{body}</Modal.Body>
        )}
    </>
  )
}

export default FlowModalBody;