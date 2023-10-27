import IconComponent from '@/app/components/icons/IconComponent';
import useNodeEditorModal from '@/app/hooks/useNodeEditorModal';
import { memo, useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

interface ModulesDataProps {
	name: string;
	icon_name: string;
	slug: string;
	description: string;
	selected?: boolean;
	onClick: () => void;
}

interface NodeData {
	id: string;
	type: string;
	data: ModulesDataProps;
	position: { x: number; y: number };
}

function ModulesNode({ data }: { data: ModulesDataProps }) {
	const nodeEditorModal = useNodeEditorModal();
	const [editMode, setEditMode] = useState(false);

	const handleClick = useCallback(
		(e: any) => {
			console.log(e);

			nodeEditorModal.onOpen();
		},
		[nodeEditorModal]
	);

	const onHover = useCallback((e: any) => {
		//console.log(e, 'e onHover');
	}, []);
	return (
		<>
			<div
				onMouseEnter={onHover}
				onDoubleClick={handleClick}
				className={`
			
			px-4 py-2 shadow-md rounded-xl bg-gray-100 min-w-[220px] max-w-[300px] overflow-hidden transition  hover:border-cyan-500 hover:text-cyan-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100
			${editMode ? 'border-4 border-cyan-500 ' : 'border-2 border-gray-300'}
			`}
			>
				<div className="flex">
					<div className="rounded-full w-14  flex justify-center items-center">
						<IconComponent iconName={data.icon_name} size={36} />
					</div>
					<div className="ml-2">
						<div className="text-sm font-bold">{data.name}</div>
						<div className=" dark:text-gray-300 text-xs">{data.description}</div>
					</div>
				</div>

				<Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
				<Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
			</div>
		</>
	);
}

export default memo(ModulesNode);
