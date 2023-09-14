'use client';
import { BiSearch } from "react-icons/bi";
import IconComponent from "../icons/IconComponent";
const NavSearch = () => {

    return (
        <form action="#" method="GET" className="hidden md:block md:pl-2">
            <label htmlFor="topbar-search" className="sr-only">Search</label>
            <div className="relative md:w-64 lg:w-96">
            <div
                className="flex absolute inset-y-0 left-0 items-center pl-0 pointer-events-none"
            >
                <IconComponent iconName="search" color="gray"/>
            </div>
            <input
                type="text"
                name="email"
                id="topbar-search"
                className="bg-transparent w-full p-.5 pl-8 border-0 placeholder-gray-400 
                    text-white text-sm border-b border-gray-800 focus:border-b focus:ring-gray-800 focus:placeholder-gray-500  focus:border-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
            />
            </div>
        </form>
    )
}

export default NavSearch;