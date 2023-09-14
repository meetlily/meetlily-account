'use client';

const EmptyText = () => {
	return (
		<>
			<div className="flex flex-row items-start justify-center w-full p-8 gap-8 gap-y-0">
				<div
					role="status"
					className="w-full max-w-lg p-5 border-2 border-dashed rounded shadow animate-pulse md:p-7 dark:border-gray-700"
				>
					<div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
						<svg
							className="w-10 h-10 text-gray-200 dark:text-gray-600"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 20"
						>
							<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
							<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
						</svg>
					</div>
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
					<div className="flex items-center mt-6 space-x-3">
						<svg
							className="w-10 h-10 text-gray-200 dark:text-gray-700"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
						</svg>
						<div>
							<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
							<div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
					</div>
					<span className="sr-only">Loading...</span>
				</div>
				<div className="flex flex-row w-full">
					<div className="flex flex-col w-full">
						<div
							role="status"
							className="space-y-2.5 w-full grid p-8 shadow animate-pulse border-2 border-dashed rounded"
						>
							<div className="flex items-center w-full space-x-2">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[480px]">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[400px]">
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[480px]">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[440px]">
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[360px]">
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
							<span className="sr-only">Loading...</span>
						</div>
						<div
							role="status"
							className="mt-8 space-y-2.5 w-full min-w-lg max-w-lg grid shadow p-8 animate-pulse border-2 border-dashed rounded"
						>
							<div className="flex items-center w-full space-x-2">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[480px]">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[400px]">
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[480px]">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[440px]">
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
							</div>
							<div className="flex items-center w-full space-x-2 max-w-[360px]">
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
							<span className="sr-only">Loading...</span>
						</div>
						<div className="flex flex-wrap items-start justify-start w-full">
							<div
								role="status"
								className="w-full max-w-lg p-8 space-y-4 space-x-2 border-2 border-dashed divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
							>
								<div role="status" className="animate-pulse">
									<div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700"></div>
									<div className="flex items-start justify-center mt-4">
										<svg
											className="w-8 h-8 text-gray-200 dark:text-gray-700 mr-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
										</svg>
										<div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
										<div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
									</div>
									<span className="sr-only">Loading...</span>
								</div>
								<div className="flex items-center justify-start pt-5">
									<div>
										<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
										<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
									</div>
									<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
								</div>
								<div className="flex items-center justify-between pt-4">
									<div>
										<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
										<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
									</div>
									<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
								</div>
								<div className="flex items-center justify-between pt-4">
									<div>
										<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
										<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
									</div>
									<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
								</div>
								<div className="flex items-center justify-between pt-5">
									<div>
										<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
										<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
									</div>
									<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
								</div>
								<div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>

								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row items-start justify-center w-full p-8 gap-8 gap-y-0">
				<div
					role="status"
					className="w-full max-w-lg p-4 border-2 border-dashed rounded shadow animate-pulse md:p-6 dark:border-gray-700"
				>
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
					<div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
					<div className="flex items-baseline mt-4 space-x-6">
						<div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
						<div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
						<div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
						<div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
						<div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
						<div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
						<div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
					</div>
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</>
	);
};

export default EmptyText;
