'use client';

const EmptyPage = () => {
	return (
		<>
			<div className="p-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
					<div className="border-2 p-8 shadow border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-full md:h-70">
						
						<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
						<div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						<div className="flex items-baseline mt-4 space-x-4">
							<div className="w-full bg-gray-200 rounded-t-lg h-32 dark:bg-gray-700"></div>
							<div className="w-full h-20 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
							<div className="w-full bg-gray-200 rounded-t-lg h-32 dark:bg-gray-700"></div>
							<div className="w-full h-28 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
							<div className="w-full bg-gray-200 rounded-t-lg h-40 dark:bg-gray-700"></div>
							<div className="w-full bg-gray-200 rounded-t-lg h-32 dark:bg-gray-700"></div>
							<div className="w-full bg-gray-200 rounded-t-lg h-40 dark:bg-gray-700"></div>
						</div>
						<span className="sr-only">Loading...</span>
						
					</div>
					<div className="border-2 p-8 shadow border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-full md:h-70"></div>
					<div className="border-2 p-8 shadow border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-full md:h-70"></div>
					<div className="border-2 p-8 shadow border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-full md:h-70"></div>
				</div>
				<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
				<div className="grid grid-cols-2 gap-4 mb-4">
					<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
					<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
					<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
					<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
				</div>
				<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
				<div className="grid grid-cols-2 gap-4">
					<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
					<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
					<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
					<div className="border-2 shadow border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
				</div>
			</div>
		</>
	);
};

export default EmptyPage;
