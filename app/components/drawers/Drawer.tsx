'use client';


import { Button, Select } from 'flowbite-react';
import IconComponent from '../icons/IconComponent';


export default function Drawers() {

    return (
        <>
            <div id="drawer-create-product-default" className="fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" aria-labelledby="drawer-label" aria-hidden="true">
                <h5 id="drawer-label" className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">New Product</h5>
                <Button type="button" data-drawer-dismiss="drawer-create-product-default" aria-controls="drawer-create-product-default" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <IconComponent iconName="close" />
                    <span className="sr-only">Close menu</span>
                </Button>
          
                <form action="#">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="title" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" />
                        </div>
                        <div>
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                            <input type="text" name="title" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand"  />
                        </div> 
                        <div>
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            
                            <Select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected>Select category</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter event description here"></textarea>
                        </div>
                        <div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
                            <button type="submit" className="text-white w-full justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Add product
                            </button>
                            <button type="button" data-drawer-dismiss="drawer-create-product-default" aria-controls="drawer-create-product-default" className="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                <IconComponent iconName="close" />
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}