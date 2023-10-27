'use client';
import useFlowNodeConfig from '@/app/hooks/useFlowNodeConfig';
import { useCallback, useState } from 'react';
import IconComponent from '../../icons/IconComponent';
import FormRenderFields from '../../modules/form/FormRenderFields';
interface ItemData {
	id: string;
	name: string;
	value: string | number | boolean | undefined | any;
	type: string;
}
interface FlowNodeConfigProps {
	data?: any;
	fields?: ItemData[];
}

const FlowNodeConfig: React.FC<FlowNodeConfigProps> = ({ data, fields }) => {
	const nodeConfig = useFlowNodeConfig();
	const [hasData, setHasData] = useState<any>({});

	const handleClick = useCallback(
		(e: any) => {
			nodeConfig.onClose();
		},
		[nodeConfig]
	);

	return (
		<div
			className={`
			flex flex-col w-full
			`}
		>
			<div
				className={`
			flex flex-col w-full
			`}
			>
				<div className="flex flex-row gap-4 items-center ml-4 mt-4">
					<div className="flex border border-gray-200 px-2 py-1 rounded-lg">
						<IconComponent iconName={`${data.icon_name}`} size={36} />
					</div>
					<div className="flex flex-col text-lg ">
						<h3>{data.name}</h3>
						<p className="text-xs">{data.description}</p>
					</div>
				</div>
			</div>
			<FormRenderFields fields={fields} values={data} />
		</div>
	);
};

export default FlowNodeConfig;
