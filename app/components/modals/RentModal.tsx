'use client'

import useRentModal from "@/app/hooks/useRentModal";


import { useMemo, useState } from "react";
import ModalContainer from "./ModalContainer";

enum STEPS {
    CATEGORY = 0,
    LOCATION =1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = () => {
    const rentModal = useRentModal();
    const [step, setStep] = useState(STEPS.CATEGORY);

    const onBack = () => {
        setStep((value) => value - 1);
    }
    const onNext = () => {
        setStep((value) => value + 1);
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Create';
        }
        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }
        return 'Back';
    }, [step])

    return (
        <ModalContainer
            disabled={false}
            isOpen={rentModal.isOpen}
            title='Property Listing'
            headerTitle='Property Listing'
            subtitle='To create a rental property listing, please fill the form below.'
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            onClose={rentModal.onClose}
            backgroundImage='/images/image.jpg'
            onSubmit={rentModal.onClose}
            overlay
        />
    )
}

export default RentModal;