'use client';

import { Button, Modal, Select } from 'flowbite-react';
import { useState } from 'react';
import FlowModalHeader from './FlowModalHeader';
import FlowModalBody from './FlowModalBody';
import FlowModalFooter from './FlowModalFooter';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import Heading from '../Heading';
interface FlowModalProps {
  label?: string;
  buttonIcon?: React.ReactElement;
  buttonColor?: string;
  modalBody?: React.ReactElement;
  modalHeader?: React.ReactElement;
  modalHeaderTitle?: string;
  modalHeaderIcon?: React.ReactElement;
  modalFooter?: boolean;
  modalFooterPrimaryAction: () => void;
  modalFooterPrimaryLabel?: string;
  modalFooterSecondaryAction: () => void;
  modalFooterSecondaryLabel?: string;
  isOpen?: string | undefined;
  modalId?: string | undefined;
  modalStyle?: string;
  size?: string;
  placement?: string;
}
const FlowModal: React.FC<FlowModalProps> = ({
    label, 
    buttonIcon, 
    buttonColor,
    modalBody: Body, 
    modalHeader: Header, 
    modalHeaderTitle,
    modalHeaderIcon,
    modalFooter, 
    modalFooterPrimaryAction,
    modalFooterPrimaryLabel,
    modalFooterSecondaryAction,
    modalFooterSecondaryLabel,
    modalId, 
    isOpen, 
    size, 
    placement 
  }) => {
  const [openModal, setOpenModal] = useState<string | undefined>('default');
  const [modalPlacement, setModalPlacement] = useState<string>('center');
  const [modalSize, setModalSize] = useState<string>('md');
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal, modalSize, setModalSize };
    if(!modalHeaderTitle){
      modalHeaderTitle = "Sample Header Title"
    }
  return (
    <>
        <Button color={buttonColor} onClick={() => props.setOpenModal(modalId)}>
          {buttonIcon && (
            {buttonIcon}
          )}
          {label}
        </Button>
        <Modal size={size} show={props.openModal === modalId} onClose={() => props.setOpenModal(undefined)}>
            <FlowModalHeader 
              show={true} 
              header={
                <Heading 
                  title={modalHeaderTitle}
                  icon={modalHeaderIcon}
                />}
            />
            <FlowModalBody show={true} body={Body}/>
            {modalFooter && (
              <>
              <Modal.Footer>
              <Button color="dark" onClick={modalFooterPrimaryAction}>{modalFooterPrimaryLabel}</Button>
              {modalFooterSecondaryAction && (
                  <Button color="gray" onClick={modalFooterSecondaryAction}>{modalFooterSecondaryLabel}</Button>
              )}
              </Modal.Footer>
              </>
            )}
            
        </Modal>
    </>
  )
}

export default FlowModal;


