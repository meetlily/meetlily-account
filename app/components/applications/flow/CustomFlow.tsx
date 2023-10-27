'use client';

import { useCallback } from 'react';
import ReactFlow, { Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow';

import '@/tailwind.config';
import 'reactflow/dist/base.css';
import CustomNode from './CustomNode';

const nodeTypes = {
	custom: CustomNode
};

const initNodes = [
	{
		id: '1',
		type: 'custom',
		data: { name: 'Eddie Villanueva', job: 'CEO', emoji: '😎' },
		position: { x: 0, y: 50 }
	},
	{
		id: '2',
		type: 'custom',
		data: { name: 'Marionette Evangelista', job: 'Finance', emoji: '🤓' },

		position: { x: -200, y: 200 }
	},
	{
		id: '3',
		type: 'custom',
		data: { name: 'Wendell Ramos', job: 'COO', emoji: '🤩' },
		position: { x: 200, y: 200 }
	}
];

const initEdges = [
	{
		id: 'e1-2',
		source: '1',
		target: '2'
	},
	{
		id: 'e1-3',
		source: '1',
		target: '3'
	}
];

const CustomFlow = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

	const onConnect = useCallback(
		(params: any) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	return (
		<ReactFlow
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			onConnect={onConnect}
			nodeTypes={nodeTypes}
			fitView
			className="bg-black"
		>
			<MiniMap />
			<Controls />
		</ReactFlow>
	);
};

export default CustomFlow;
