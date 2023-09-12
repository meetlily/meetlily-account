'use client';


import { Button, Modal, Card, Avatar, Dropdown, Breadcrumb } from "flowbite-react";
import { useState } from "react";
interface ModulePreviewProps {
    scope?: Record<string, any>;
}
const ModulePreview: React.FC<ModulePreviewProps> = ({scope}) => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    return (
        <>
        <div className="flex flex-wrap gap-2">
        <Dropdown
        inline
        label={<Avatar alt="User settings"rounded/>}
        >
        <Dropdown.Header>
            <span className="block text-sm">
            Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
            name@flowbite.com
            </span>
        </Dropdown.Header>
        <Dropdown.Item>
            Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
            Settings
        </Dropdown.Item>
        <Dropdown.Item>
            Earnings
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
            Sign out
        </Dropdown.Item>
        </Dropdown>
        </div>
        <Button onClick={() => props.setOpenModal('default')}>Toggle modal</Button>
        <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                    companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
                    ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
                    possible of high-risk data breaches that could personally affect them.
                </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
                <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                Decline
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModulePreview;