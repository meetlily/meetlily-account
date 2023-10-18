import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import IconComponent from '../../icons/IconComponent';

interface ModulesDataProps {
	name: string;
	icon_name: string;
	slug: string;
	description: string;
}

interface NodeData {
	id: string;
	type: string;
	data: ModulesDataProps;
	position: { x: number; y: number };
}
function ModulesNode({ data }: { data: ModulesDataProps }) {
	return (
		<div className="px-2 py-2 shadow-md rounded-md bg-white border-2 border-stone-400 w-[220px] overflow-hidden">
			<div className="flex">
				<div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
					<IconComponent iconName={data.icon_name} size={30} />
				</div>
				<div className="ml-2">
					<div className="text-sm font-bold">{data.name}</div>
					<div className="text-gray-500 text-xs">{data.description}</div>
				</div>
			</div>

			<Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
			<Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
		</div>
	);
}

export default memo(ModulesNode);
