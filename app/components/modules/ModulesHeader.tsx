'use client'

import { ChangeEvent, useState } from "react"
import IconComponent from "../icons/IconComponent"
import FlowInput from "../inputs/FlowInput"
import AppIcons from "../icons/AppIcons"
import FlowModal from "../modals/FlowModal"
import TermsAndConditions from "../TermsAndConditions"

const ModulesHeader = () => {
    const [openModal, setOpenModal] = useState<string | undefined>('default');
    const [modalPlacement, setModalPlacement] = useState<string>('center');
    const [modalSize, setModalSize] = useState<string>('md');
    const props = { modalPlacement, openModal, setModalPlacement, setOpenModal, modalSize, setModalSize };
    return (
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
                <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <IconComponent iconName={'search'} />
                        </div>
                        <FlowInput classNames="pl-10 outline-1 outline-gray-50 rounded-md max-w-md w-full" type="text" id="simple-search"
                                placeholder="Search" required name={""} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                                    throw new Error("Function not implemented.")
                                } } />
                    </div>
                </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <FlowModal 
                    modalBody={<TermsAndConditions />}
                    modalId="productModal"
                    size={"3xl"}
                    modalHeaderTitle="Add Product"
                    modalHeaderIcon={<IconComponent
                        size={24}
                        iconName="shop" />}
                    label="Add Product"
                    modalFooter={true}
                    modalFooterPrimaryAction={() => props.setOpenModal("productModal")} modalFooterSecondaryAction={function (): void {
                        throw new Error("Function not implemented.")
                    } }                />
                <div className="flex items-center space-x-3 w-full md:w-auto">
                    <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown"
                        className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        type="button">
                        <IconComponent iconName="arrowDown" />
                        Actions
                    </button>
                    <div id="actionsDropdown"
                        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                            <li>
                                <a href="#"
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass
                                    Edit</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="#"
                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
                                all</a>
                        </div>
                    </div>
                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown"
                        className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        type="button">
                        <IconComponent iconName="arrowDown" />
                        Filter
                        <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </button>
                    <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                        <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                            <li className="flex items-center">
                                <FlowInput type={""} name={""} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                                            throw new Error("Function not implemented.")
                                        } } />
                                <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple
                                    (56)</label>
                            </li>
                            <li className="flex items-center">
                                <FlowInput type={""} name={""} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                                            throw new Error("Function not implemented.")
                                        } } />
                                <label htmlFor="fitbit"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft
                                    (16)</label>
                            </li>
                            <li className="flex items-center">
                                <FlowInput type={""} name={""} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                                            throw new Error("Function not implemented.")
                                        } } />
                                <label htmlFor="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor
                                    (49)</label>
                            </li>
                            <li className="flex items-center">
                                <FlowInput type={""} name={""} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                                            throw new Error("Function not implemented.")
                                        } } />
                                <label htmlFor="nikon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon
                                    (12)</label>
                            </li>
                            <li className="flex items-center">
                                <FlowInput type={""} name={""} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                                            throw new Error("Function not implemented.")
                                        } }  />
                                <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ
                                    (74)</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModulesHeader;