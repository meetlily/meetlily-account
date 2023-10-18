'use client';

import { useCallback, useEffect, useState } from 'react';
import ReactFlow, { Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow';

import '@/tailwind.config';
import axios from 'axios';
import toast from 'react-hot-toast';
import 'reactflow/dist/base.css';
import ModulesNode from './ModulesNode';

const nodeTypes = {
	Modules: ModulesNode
};

interface ModulesFlowProps {
	initNodes?: any;
	initEdges?: any;
	onSave: boolean;
}
const ModulesFlow: React.FC<ModulesFlowProps> = ({ initNodes, initEdges, onSave }) => {
	const [isSaving, setIsSaving] = useState(onSave);
	console.log(isSaving, 'isSaving');
	let n: any = [];
	let nx = 0;
	let ny = 0;
	// Object.keys(initNodes).map((node: any) => {
	// 	ny = 0;
	// 	nx = nx + 200;
	// 	let d = {
	// 		id: initNodes[node].id,
	// 		type: 'Modules',
	// 		data: initNodes[node],
	// 		position: { x: nx, y: ny }
	// 	};
	// 	n.push(d);
	// });
	let numSave = 0;
	const saveNodeFile = (save: boolean) => {
		let path = `/Volumes/Extended/development-projects/meetlily-account/data/modules/main.json`;
		console.log(save, 'saveNodeFile');
		if (save) {
			numSave++;
			if (numSave > 3) {
				onSave = false;
				setIsSaving(onSave);
				numSave = 0;
				return null;
			}
			axios
				.post(`/api/files`, { path: path, fileContent: JSON.stringify(nodes) })
				.then((response) => {
					onSave = false;
					setIsSaving(onSave);
					console.log(response, 'response');
					if (response.data.message) {
						toast.success('Nodes saved successfully');
					} else {
						toast.error('Nodes Failed to save the file');
					}
				})
				.catch((err) => {
					console.log(err);
					toast.error('Nodes Failed to save the file');
				});
		} else {
			setIsSaving(false);
		}
	};
	useEffect(() => {
		console.log(onSave, 'useEfect onsave');
		if (onSave) {
			setIsSaving(onSave);
			saveNodeFile(onSave);
		} else {
			setIsSaving(false);
		}
	}, [isSaving, saveNodeFile, setIsSaving]);

	// initNodes.map((node: any) => {
	// 	ny = 0;
	// 	nx = nx + 240;
	// 	const stringId: string = node.id.toString();
	// 	let d = {
	// 		id: stringId,
	// 		type: 'Modules',
	// 		data: {
	// 			id: stringId,
	// 			name: node.module,
	// 			description: node.description,
	// 			icon_name: node.icon_name
	// 		},
	// 		position: { x: nx, y: ny }
	// 	};
	// 	n.push(d);
	// });

	const onNodeChangeHandle = useCallback((e: any) => {
		//saveNodeFile(nodes);
		onNodesChange(e);
	}, []);
	const onEdgesChangeHandle = useCallback((e: any) => {
		//console.log(e, 'onEdgesChangeHandle');
		onEdgesChange(e);
	}, []);
	const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

	const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

	return (
		<ReactFlow
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			onConnect={onConnect}
			nodeTypes={nodeTypes}
			minZoom={0.1}
			fitView
			className="dot-bg"
		>
			<MiniMap />
			<Controls />
		</ReactFlow>
	);
};

export default ModulesFlow;
