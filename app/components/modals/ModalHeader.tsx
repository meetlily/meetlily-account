'use client';
import { Button } from 'flowbite-react';
import React, { useState } from 'react';
interface ModalHeaderProps {
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
  const ModalHeader: React.FC<ModalHeaderProps> = ({
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
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    if(!primaryActionColor){
        primaryActionColor = "dark";
    }
    if(!secondaryActionColor){
        secondaryActionColor = "gray";
    }
    if(!primaryActionLabel){
        primaryActionLabel = "Continue";
    }
    if(!secondaryActionLabel){
        secondaryActionLabel = "Cancel";
    }
    return (
        <>
        <Button color={primaryActionColor} onClick={primaryAction}>{primaryActionLabel}</Button>
        <Button color={secondaryActionColor} onClick={secondaryAction}>{secondaryActionLabel}</Button>
        </>
    )
};

export default ModalHeader;