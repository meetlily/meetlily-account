'use client';
import EditorConfig from '@/app/applications/coding/config';
import useCodeEditor from '@/app/hooks/useCodeEditor';
import useFlowNodeConfig from '@/app/hooks/useFlowNodeConfig';
import useNodeEditorModal from '@/app/hooks/useNodeEditorModal';
import { FormData, ItemData } from '@/app/types/form';

import programLang from '@/data/file-extension.json';
import nodeEdges from '@/flow/nodes-edges.json';
import '@/tailwind.config';
import axios from 'axios';
import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup';
import { useParams, useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import ReactFlow, { Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/base.css';
import ButtonIcon from '../../ButtonIcon';
import DrawerContent from '../../drawers/DrawerContent';
import FileDirectory from '../../files/FileDirectory';
import { refactorDataToFields } from '../../inputs/InputComponent';
import NodeEditorModal from '../../modals/NodeEditorModal';
import CustomFields from '../../modules/formFields/CustomFields';
import CodeEditor from '../codeEditor/CodeEditor';
import FlowNodeConfig from './FlowNodeConfig';
import ModulesNode from './ModulesNode';

const nodeTypes = {
	Modules: ModulesNode
};

interface ModuleItemTag {
	id: string;
	name: string;
}
interface CategoryModule {
	id: string;
	name: string;
}
interface ModuleItem {
	id: string;
	slug?: string;
	name: string;
	description: string;
	icon_name: string;
	tags: ModuleItemTag[];
	category: CategoryModule[];
}
interface MeetlilyFlowProps {
	files?: any;
	modules?: any;
	mainModules?: any;
}

const MeetlilyFlow: React.FC<MeetlilyFlowProps> = ({ files, modules, mainModules }) => {
	const [fileTree, setFileTree] = useState<any[]>(files);
	const [file, setFile] = useState<any>({});
	const [isEditing, setIsEditing] = useState(false);
	const [showEditor, setShowEditor] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);
	const [fileEditorContent, setFileEditorContent] = useState<string>('');
	const params = useParams();
	const moduleOptionDrawer = useCodeEditor();
	const nodeEditorModal = useNodeEditorModal();
	const flowNodeConfig = useFlowNodeConfig();
	const [fileContent, setFileContent] = useState<any>(nodeEdges);
	const [selectedNode, setSelectedNode] = useState<any>({});
	const [fields, setFields] = useState<ItemData[]>();
	const router = useRouter();
	const refactorObjects = (array: any[]) => {
		let keys: any = {};
		array.map((folder: any) => {
			if (folder.isDirectory) {
				Object.keys(folder).map((k) => {
					keys[folder.name] = folder[k];
				});
				keys[folder.name] = refactorObjects(folder.children);
			}
		});
		return keys;
	};
	let categories: any = {};
	const refactorModules = (array: ModuleItem[]) => {
		let exte: any = {};
		programLang.map((lang) => {
			const { language } = lang;
			lang.extensions.map((e) => {
				exte[e] = language;
			});
		});
	};

	const handleFileChange = (e: any) => {
		const filePath = e.path;
		NProgress.start();
		axios
			.get(`/api/file?path=${filePath}`)
			.then((response) => {
				setFileContent(response.data.content);
				setNodes(fileContent.nodes);
				toast.success(`${e.name} loaded.`);
				router.refresh();
				NProgress.done();
			})
			.catch(() => {
				toast.error('Failed to load the data');
				NProgress.done();
			});
	};
	const handleSave = () => {
		let path = `./flow/nodes-edges.json`;
		const mergeEdgesNodes = {
			nodes: nodes,
			edges: edges
		};
		NProgress.start();
		axios
			.post(`/api/files`, { path: path, fileContent: JSON.stringify(mergeEdgesNodes) })
			.then((response) => {
				NProgress.done();
				if (response.data.message) {
					toast.success('Saved');
					router.refresh();
					setFileContent(mergeEdgesNodes);
					if (nodeEditorModal.isOpen) {
						nodeEditorModal.onClose();
					}
				} else {
					toast.error('Nodes Failed to save the file');
				}
			})
			.catch(() => {
				toast.error('Nodes Failed to save the file');
				NProgress.done();
			});
	};
	const handleCreate = (e: any) => {
		let path = `./flow/nodes-edges.json`;
		setShowEditor(true);
	};
	const handleSubmit = (e: any) => {
		nodes.find((obj, i) => {
			if (obj.id === e.id) {
				let nv: FormData = {};

				Object.keys(e).map((n) => {
					nv[n] = e[n];
				});
				const object = {
					...obj,
					data: nv
				};
				nodes[i] = object;
			}
		});

		return handleSave();
	};
	const nodeEditorContent = (
		<div
			className={`
			flex flex-col w-full
			`}
		>
			<CustomFields
				fields={fields}
				values={selectedNode}
				showActionButton
				onSubmitData={handleSubmit}
				onClose={nodeEditorModal.onClose}
			/>
		</div>
	);
	const handleEditCode = (e: any) => {
		let path = `./flow/nodes-edges.json`;

		NProgress.start();
		axios
			.get(`/api/file?path=${path}`)
			.then((response) => {
				setFileEditorContent(response.data.content);
				router.refresh();
				NProgress.done();
				moduleOptionDrawer.onOpen();
				setShowEditor(true);
			})
			.catch(() => {
				toast.error('Failed to load the data');
				NProgress.done();
			});
	};

	const handleCloseDrawer = () => {
		moduleOptionDrawer.isOpen = false;
		setShowEditor(moduleOptionDrawer.isOpen);
		moduleOptionDrawer.onClose();
	};
	const [nodes, setNodes, onNodesChange] = useNodesState(fileContent.nodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(fileContent.edges);
	const handleNodesChange = useCallback(
		(e: any) => {
			const foundNode = nodes.find((obj) => obj.id === e[0].id);

			if (foundNode) {
				if (!foundNode.dragging) {
					setSelectedNode(foundNode.data);
					setFields(refactorDataToFields(foundNode.data));
				}
			}
			setIsEditing(true);
			onNodesChange(e);
		},
		[onNodesChange, nodes]
	);

	const handleEdgesChange = useCallback(
		(e: any) => {
			onEdgesChange(e);
		},
		[onEdgesChange]
	);

	const onConnect = useCallback(
		(params: any) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);
	const nodeEditorHandleSubmit = useCallback((e: any) => {}, []);
	const toggleSidebar = () => {
		if (showSidebar) {
			setShowSidebar(false);
			return;
		}
		setShowSidebar(true);
	};

	return (
		<>
			<div className="flex flex-col pt-4">
				<div className="flex flex-col w-full h-full overflow-auto">
					<div className="flex flex-col w-full items-start rounded-t-md">
						<div className="w-full   p-1  rounded-t-md border-t border-l border-r bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
							<div className="flex flex-row w-full items-center">
								<div className="flex flex-col w-full items-start">
									<ButtonGroup className="flex gap-4">
										<ButtonIcon
											icon={'diagrams'}
											label={`${params?.slug || 'Flow'}`}
											inline
											iconSize={20}
											showLabel
											onClick={toggleSidebar}
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
									</ButtonGroup>
								</div>
								<div className="flex flex-col items-center w-full">
									<ButtonGroup className="flex gap-1">
										<ButtonIcon
											icon={'VscArrowLeft'}
											inline
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										<ButtonIcon
											icon={'VscArrowRight'}
											inline
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
									</ButtonGroup>
								</div>
								<div className="flex flex-col  w-full items-end justify-center">
									<ButtonGroup className="flex gap-2">
										<ButtonIcon
											icon={'diagrams'}
											label="Create"
											disabled={!isEditing}
											inline
											showLabel
											onClick={handleCreate}
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										<ButtonIcon
											icon={'code'}
											label="Edit"
											inline
											outline
											shadow
											showLabel
											onClick={handleEditCode}
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>

										<ButtonIcon
											icon={'save'}
											label="Save"
											disabled={!isEditing}
											inline
											onClick={handleSave}
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										<ButtonIcon
											icon={'h3Dots'}
											label="Settings"
											inline
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
									</ButtonGroup>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row gap-0 item-start justify-start">
						<div
							className={`${
								showSidebar ? 'flex ' : 'hidden'
							}  w-full max-w-[280px] border-l border-b border-t  dot-bg border-gray-300 dark:border-gray-700`}
						>
							<div className="w-full">
								<div className="flex w-full  p-1 border-b border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
									<ButtonGroup className="flex w-full gap-2 items-end dark:text-gray-100">
										<div className="flex ml-1">Explorer</div>
										<ButtonIcon
											icon={'newFile'}
											label="New"
											inline
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										<ButtonIcon
											icon={'newFolder'}
											label="New Folder"
											inline
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										<ButtonIcon
											icon={'collapseAll'}
											label="Collapse All"
											inline
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										<ButtonIcon
											icon={'VscRefresh'}
											label="Refresh"
											inline
											onClick={() => router.refresh()}
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										{/* <div className="flex items-end justify-end">
											<CodeEditorSearch />
										</div> */}
									</ButtonGroup>
								</div>
								<div className="overflow-y-scroll w-full h-200 max-h-[800px] overflow-hidden p-2">
									<FileDirectory directory={fileTree} onChange={handleFileChange} />
								</div>
							</div>
						</div>
						<div className="flex h-[850px] max-h-[850px]  w-full ">
							<div className="flex w-full h-full border border-gray-300 dark:border-gray-700">
								<div className="flex w-full h-full">
									<ReactFlow
										nodes={nodes}
										edges={edges}
										onNodesChange={handleNodesChange}
										onEdgesChange={handleEdgesChange}
										onConnect={onConnect}
										nodeTypes={nodeTypes}
										minZoom={0.1}
										fitView
										className="dot-bg"
									>
										<MiniMap className="dot-bg rounded-md" />

										<Controls />
									</ReactFlow>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full rounded-b-md">
					<div className="w-full  bg-gray-100 border-b border-r border-l border-gray-300 p-1 rounded-b-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
						<div className="flex flex-row">
							<div className="flex flex-col  w-full items-start justify-center">
								<ButtonGroup className="flex gap-2">
									<ButtonIcon
										icon={'VscSettings'}
										label="Settings"
										inline
										classNames="hover:bg-transparent hover:text-cyan-500"
									/>
									<ButtonIcon
										icon={'VscGithub'}
										label="Github"
										inline
										classNames="hover:bg-transparent hover:text-cyan-500"
									/>
								</ButtonGroup>
							</div>
							<div className="flex flex-col  w-full items-end justify-center">
								<ButtonGroup className="flex gap-2">
									{/* <ButtonIcon
										icon={'VscJson'}
										label={`${language}`}
										inline
										showLabel
										classNames="hover:bg-transparent hover:text-cyan-500"
									/> */}
									<ButtonIcon
										icon={'v3Dots'}
										label={'Menu'}
										inline
										classNames="hover:bg-transparent hover:text-cyan-500"
									/>
								</ButtonGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
			<DrawerContent
				dismissable={true}
				id={'preview-drawer'}
				isOpen={moduleOptionDrawer.isOpen}
				onClose={moduleOptionDrawer.onClose}
				xPosition="right"
				yPosition="top"
				overlay
				width="w-1/2"
				body={
					<CodeEditor
						options={EditorConfig}
						className={`h-full w-full`}
						code={fileEditorContent}
						language={'Json'}
						onChange={() => {}}
						onMount={() => {}}
					/>
				}
			/>
			<DrawerContent
				dismissable={false}
				id={'flow-node-config-drawer'}
				isOpen={flowNodeConfig.isOpen}
				onClose={flowNodeConfig.onClose}
				xPosition="right"
				yPosition="top"
				overlay
				width="w-[500px]"
				body={<FlowNodeConfig data={selectedNode} fields={fields} />}
			/>
			<NodeEditorModal isOpen={nodeEditorModal.isOpen} submitAction={handleSubmit}>
				{nodeEditorContent}
			</NodeEditorModal>
		</>
	);
};

export default MeetlilyFlow;
