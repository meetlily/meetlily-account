'use client';
import useModuleOptionDrawer from '@/app/hooks/useModuleOptionDrawer';
import programLang from '@/data/file-extension.json';
import axios from 'axios';
import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import ButtonIcon from '../../ButtonIcon';
import DrawerContent from '../../drawers/DrawerContent';
import FileDirectory from '../../files/FileDirectory';
import MarkdownPreviewer from '../codeEditor/MarkdownPreviewer';
import ModulesFlow from './ModulesFlow';

//const CodeEditor = dynamic(() => import(CodeEditor));

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
	const [hasChange, setHasChange] = useState(false);
	const [isMarkdown, setIsMarkdown] = useState<string>('');
	const [showPreview, setShowPreview] = useState(false);
	const [buttonSaveClicked, setButtonSaveClicked] = useState(false);
	const [showMarkdownPreviewButton, setShowMarkdownPreviewButton] = useState(false);
	const params = useParams();
	const moduleOptionDrawer = useModuleOptionDrawer();
	const [fileContent, setFileContent] = useState<any>(mainModules);
	let filesData = {};
	let fileKeys: any = {};
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
	let categoryModule: CategoryModule[] = [];
	let categories: any = {};
	const refactorModules = (array: ModuleItem[]) => {
		let i = 0;
		let k: any = {};
		array.map((a: ModuleItem, index: number) => {
			i++;
			if (a.category && a.category.length > 0) {
				let n = 0;
				k[a.name] = {
					id: `m-${i}`,
					name: a.name,
					icon_name: a.icon_name,
					description: a.description,
					slug: a.slug,
					tags: a.tags
				};

				a?.category?.map((b: any, index: number) => {
					n++;

					let id = `${i}-${n}`;

					if (!categories[b.name]) {
						categories[b.name] = { id: id, name: b.name };
						console.log(categories[b.name], 'categories[b.name]');
					}

					// const findCat = a.category.find((obj) => obj.name === b.name);
					// if (findCat) {
					// 	if (!categories[b.name].modules[a.name]) {
					// 		categories[b.name].modules[a.name] = {};
					// 	}
					// 	categories[findCat.name].modules[k[a.name]] = k;
					// }
				});
			}
		});
	};

	let exte: any = {};
	programLang.map((lang) => {
		const { language } = lang;
		lang.extensions.map((e) => {
			exte[e] = language;
		});
	});
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
		},
		{
			id: 'e4-5',
			source: '4',
			target: '5'
		},
		{
			id: 'e4-6',
			source: '4',
			target: '6'
		}
	];
	const handleFileChange = (e: any) => {
		const filePath = e.path;
		axios
			.get(`/api/file?path=${filePath}`)
			.then((response) => {
				//mainModules(JSON.parse(response.data.content));
				console.log(response.data.content);
				//setFile(e);
				setFileContent(response.data.content);
			})
			.catch((error) => console.error('Error fetching file tree:', error));
		//setFileContent(newCode);
	};

	const handleSave = () => {
		setButtonSaveClicked(true);

		setTimeout(() => {
			setButtonSaveClicked(false);
		}, 500);
	};
	return (
		<>
			<div className="flex flex-col pt-4">
				<div className="flex flex-col w-full h-full overflow-auto">
					<div className="flex flex-col w-full items-start bg-black rounded-t-md">
						<div className="w-full   text-white p-1  rounded-t-md border-t border-l border-r bg-gray-800 border-gray-700">
							<div className="flex flex-row w-full items-center">
								<div className="flex flex-col w-full items-start">
									<ButtonGroup className="flex gap-4">
										<ButtonIcon
											icon={'diagrams'}
											label={`${params?.slug || 'Flow'}`}
											inline
											iconSize={20}
											showLabel
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
								<div className="flex flex-col  w-full items-end">
									<ButtonGroup className="flex gap-2">
										<ButtonIcon
											icon={'save'}
											label="Save"
											inline
											onClick={handleSave}
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										<ButtonIcon
											icon={'preview'}
											label="Preview"
											inline
											disabled={!showMarkdownPreviewButton}
											onClick={() => {}}
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
						<div className="flex  w-full max-w-[280px] text-white border-l border-b border-t  bg-black border-gray-700">
							<div className="w-full  ">
								<div className="flex w-full  p-1 border-b border-gray-700 bg-gray-800 dark:bg-gray-800 ">
									<ButtonGroup className="flex w-full gap-2 items-end">
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
											onClick={() => {}}
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										{/* <div className="flex items-end justify-end">
											<CodeEditorSearch />
										</div> */}
									</ButtonGroup>
								</div>
								<div className="overflow-y-scroll w-full h-200 max-h-[800px] overflow-hidden p-2  text-white">
									<FileDirectory directory={fileTree} onChange={handleFileChange} />
								</div>
							</div>
						</div>
						<div className="flex h-screen max-h-[850px]  w-screen max-w-md xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl  xl:max-w-5xl 2xl:max-w-7xl">
							<div className="flex w-full h-full dot-bg overflow-scroll p-1 border border-gray-700">
								<div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
									<ModulesFlow
										initNodes={fileContent}
										initEdges={initEdges}
										onSave={buttonSaveClicked}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full bg-black rounded-b-md">
					<div className="w-full  bg-gray-800 text-white border-b border-r border-l border-gray-700 p-1 rounded-b-md">
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
				id={'markdown-drawer'}
				isOpen={showPreview}
				onClose={() => setShowPreview(false)}
				xPosition="right"
				yPosition="top"
				overlay
				width="w-1/2"
				body={<MarkdownPreviewer markdownData={isMarkdown} />}
			/>
		</>
	);
};

export default MeetlilyFlow;
