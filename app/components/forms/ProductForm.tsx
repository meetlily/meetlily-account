'use client';
import { ChangeEvent } from 'react';
import IconComponent from '../icons/IconComponent';
import FlowInput from '../inputs/FlowInput';

const ProductForm = () => {
	return (
		<>
			<form action="#">
				<div className="space-y-4">
					<div>
						<FlowInput
							type={'text'}
							name={'productName'}
							showLabel={true}
							label={'Product Name'}
							id="product-name"
							placeholder="Type product name"
							onChange={function (e: ChangeEvent<HTMLInputElement>): void {
								throw new Error('Function not implemented.');
							}}
						/>
					</div>
					<div>
						<label
							htmlFor="brand"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Brand
						</label>
						<input
							type="text"
							name="title"
							id="brand"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Product brand"
						/>
					</div>
					<div>
						<label
							htmlFor="price"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Price
						</label>
						<input
							type="number"
							name="price"
							id="price"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="$2999"
						/>
					</div>
					<div>
						<label
							htmlFor="category"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Category
						</label>
					</div>
					<div>
						<label
							htmlFor="description"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Description
						</label>
						<textarea
							id="description"
							rows={4}
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Enter event description here"
						></textarea>
					</div>
					<div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
						<button
							type="submit"
							className="text-white w-full justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							Add product
						</button>
						<button
							type="button"
							data-drawer-dismiss="drawer-create-product-default"
							aria-controls="drawer-create-product-default"
							className="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
						>
							<IconComponent iconName="close" />
							Cancel
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ProductForm;
