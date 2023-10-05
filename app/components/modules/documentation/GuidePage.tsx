import { Guide } from '@/app/types';
import { Badge } from 'flowbite-react';
import { FC, useState } from 'react';
import IconComponent from '../../icons/IconComponent';

const GuidePage: FC<{ guide: Guide }> = ({ guide }) => {
	const [data, setData] = useState<Guide>(guide);
	return (
		<>
			<div className="p-2">
				<h1 className="text-gray-700 text-2xl font-bold leading-1">
					<span>{data.title}</span>
				</h1>
				<p className="block">
					<span className="text-gray-700">{data.description}</span>
				</p>
				<div className="flex flex-row gap-4 my-2">
					{guide.categories.map((cat, i) => (
						<Badge key={i} color={'info'}>
							<p className="px-2 font-semibold cursor-pointer">{cat}</p>
						</Badge>
					))}
				</div>
			</div>
			{data.steps.map((step, index) => (
				<div key={index} className="space-y-4">
					<h2 key={index} className="px-4  text-gray-700  text-xl font-bold leading-3 my-6">
						Step {index + 1}: {step.title}
					</h2>
					<h3 className="pl-10  text-gray-700  text-1xl font-bold leading-3">Instructions</h3>
					{step.instructions.map((instruction, i) => (
						<div key={i} className="flex flex-col  px-10">
							<div className="flex flex-row w-full items-center justify-center">
								<IconComponent iconName="dot" class_name="flex flex-col w-6 text-gray-700" />
								<div className="w-full">
									<>
										{instruction.description}
										{instruction.description &&
											instruction.description.split(/'([^']*)'/g).map((part, index) => {
												<Badge key={index}>
													<p className="px-2 font-semibold cursor-pointer">{part}</p>
												</Badge>;
											})}
									</>
								</div>
							</div>
							{instruction.code && (
								<pre className="bg-gray-700 text-gray-200 p-6 text-sm rounded-md">
									{instruction.code}
								</pre>
							)}
						</div>
					))}
				</div>
			))}
			<hr className="mt-10 pt-5" />
		</>
	);
};

export default GuidePage;
