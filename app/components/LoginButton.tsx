'use client'
import Link from "next/link"
import IconComponent from "./icons/IconComponent"

const LoginButton = () => {
    return (
        <>
        <Link
            href="/sign-in"
            className="inline-flex items-center text-white bg-teal-500 md:bg-gray-900 rounded-full mr-1 md:mr-3  p-1 md:pl-0 md:p-1 sm:text-base lg:text-sm xl:text-base hover:text-cyan-300 shadow-sm shadow-gray-700 hover:shadow-sm hover:shadow-black hover:bg-gray-900 transition h-8"
        >
            <span className="px-2 py-1 ml-0.8 md:py-2 text-white text-xs md:text-sm font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-800 to-cyan-900 bg-transparent hover:from-teal-400 hover:to-cyan-500 rounded-full  border-1 border-gray-200 transition">
            <IconComponent class_name="p-1 " aria-hidden="true" iconName={"signIn"} />
            </span>
            <span className="ml-2 mr-1 text-xs md:text-sm font-semibold">Login</span>
            <IconComponent class_name="h-6  w-4 py-1" aria-hidden="true" iconName={"chevNext"} />
        </Link>
        <Link
            href="/sign-up"
            className="inline-flex items-center text-white bg-teal-900 md:bg-black rounded-full p-1 md:pl-0 md:p-1  pr-2 sm:text-base lg:text-sm xl:text-base hover:text-cyan-300 shadow-sm shadow-gray-700 hover:shadow-sm hover:shadow-black hover:bg-gray-900 transition h-8"
        >
            <span className=" px-2 py-1 ml-0.8 md:py-2 text-white text-xs md:text-sm font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-gray-700 to-gray-800  hover:from-gray-900 hover:to-black rounded-full  border-1 border-gray-200 transition">
            <IconComponent class_name="p-1 " aria-hidden="true" iconName={"signUp"} />
            </span>
            <span className="ml-2 mr-1 text-xs md:text-sm font-semibold">Register</span>
            <IconComponent class_name="h-6 w-4 md:w-5 py-1" aria-hidden="true" iconName={"chevNext"} />
        </Link>
        </>
    )
}

export default LoginButton