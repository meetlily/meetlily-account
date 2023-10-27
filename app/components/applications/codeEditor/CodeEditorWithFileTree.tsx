'use client';
import useModuleOptionDrawer from '@/app/hooks/useModuleOptionDrawer';
import programLang from '@/data/file-extension.json';
import axios from 'axios';
import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup';
import { useParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import ButtonIcon from '../../ButtonIcon';
import DrawerContent from '../../drawers/DrawerContent';
import FileDirectory from '../../files/FileDirectory';
import CodeEditor from './CodeEditor';
import CodeEditorSearch from './CodeEditorSearch';
import MarkdownPreviewer from './MarkdownPreviewer';
//const CodeEditor = dynamic(() => import(CodeEditor));
interface CodeEditorWithFileTreeProps {
	files?: any;
	refresh?: () => void;
	config?: any;
}
const CodeEditorWithFileTree: React.FC<CodeEditorWithFileTreeProps> = ({
	files,
	refresh,
	config
}) => {
	const [fileTree, setFileTree] = useState<any[]>(files);
	const [file, setFile] = useState<any>({});
	const [hasChange, setHasChange] = useState(false);
	const [fileContent, setFileContent] = useState<string>('');
	const [extension, setExtension] = useState<any>({});
	const [isMarkdown, setIsMarkdown] = useState<string>('');
	const [showPreview, setShowPreview] = useState(false);
	const [showMarkdownPreviewButton, setShowMarkdownPreviewButton] = useState(false);
	const [code, setCodeData] = useState<string>('');
	const [language, setLanguage] = useState('Typescript');
	const params = useParams();
	const moduleOptionDrawer = useModuleOptionDrawer();

	let exte: any = {};
	programLang.map((lang) => {
		const { language } = lang;
		lang.extensions.map((e) => {
			exte[e] = language;
		});
	});

	function getFileExtension(filename: string): string {
		const lastDotIndex = filename.lastIndexOf('.');
		if (lastDotIndex === -1) {
			return ''; // No file extension found
		}
		return filename.slice(lastDotIndex + 1);
	}

	const openPreview = () => {
		setShowPreview(true);
	};
	const handlePreviewClose = () => {
		setShowPreview(false);
	};
	const onRefresh = useCallback((f: any) => {}, []);
	const handleCodeChange = (newCode: string) => {
		setHasChange(true);
		setFileContent(newCode);
		if (file.type === 'Markdown') {
			setIsMarkdown(newCode);
		}
	};
	const saveFile = () => {
		const path = file.path;
		if (path && fileContent) {
			axios
				.post(`/api/files`, { path, fileContent })
				.then((response) => {
					console.log(response, 'response');
					if (response.data.message) {
						toast.success('File saved successfully');
					} else {
						toast.error('Failed to save the file');
					}
				})
				.catch((err) => {
					console.log(err);
					//toast.error(err);
				});
		}
	};
	const handleCodeMount = (editor: any, monaco: any) => {
		// editor.onMouseMove((e: any) => {
		// 	console.log(e);
		// });

		editor.onKeyDown((event: any) => {
			if ((event.ctrlKey && event.code === 'KeyS') || (event.metaKey && event.code === 'KeyS')) {
				// Ctrl + S is pressed, do something
				event.preventDefault(); // Prevent the browser's save dialog
				if (file.path && fileContent) {
					saveFile();
				}
			}
		});
		editor.onKeyUp((event: any) => {
			// console.log(event);
			// if (event.ctrlKey && event.key === 's') {
			// 	// Ctrl + S is pressed, do something
			// 	event.preventDefault(); // Prevent the browser's save dialog
			// 	console.log('Ctrl + S pressed');
			// }
		});
	};

	const handleFileChange = (e: any) => {
		const exts = getFileExtension(e.name);
		const extend = exte[exts];
		if (extend) {
			setLanguage(extend);
		} else {
			setLanguage('Text');
		}

		const filePath = e.path;
		axios
			.get(`/api/file?path=${filePath}`)
			.then((response) => {
				if (extend === 'Markdown') {
					setShowMarkdownPreviewButton(true);
					setIsMarkdown(response.data.content);
				}
				const fi = {
					...e,
					type: extend
				};
				console.log(fi, 'fi');
				setFile(fi);
				setFileContent(response.data.content);
			})
			.catch((error) => console.error('Error fetching file tree:', error));
		//setFileContent(newCode);
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
											icon={'code'}
											label={`${params?.slug || 'Coder'}`}
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

										<CodeEditorSearch />
									</ButtonGroup>
								</div>
								<div className="flex flex-col  w-full items-end">
									<ButtonGroup className="flex gap-2">
										<ButtonIcon
											icon={'save'}
											label="Save"
											inline
											disabled={!hasChange}
											onClick={saveFile}
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										<ButtonIcon
											icon={'preview'}
											label="Preview"
											inline
											disabled={!showMarkdownPreviewButton}
											onClick={openPreview}
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
											label="New File"
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
											onClick={() => onRefresh(refresh)}
											classNames="hover:bg-transparent hover:text-cyan-500"
										/>
										<div className="flex items-end justify-end">
											<CodeEditorSearch />
										</div>
									</ButtonGroup>
								</div>
								<div className="overflow-y-scroll w-full h-200 max-h-[850px] overflow-hidden p-2  text-white">
									<FileDirectory directory={fileTree} onChange={handleFileChange} />
								</div>
							</div>
						</div>
						<div className="flex h-screen max-h-[900px]  w-screen max-w-md xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl  xl:max-w-5xl 2xl:max-w-7xl">
							<div className="flex w-full h-full bg-black overflow-scroll p-1 border border-gray-700">
								<div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
									<CodeEditor
										options={config}
										className={`h-full w-full`}
										code={fileContent}
										language={language}
										onChange={handleCodeChange}
										onMount={handleCodeMount}
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
									<ButtonIcon
										icon={'VscJson'}
										label={`${language}`}
										inline
										showLabel
										classNames="hover:bg-transparent hover:text-cyan-500"
									/>
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

export default CodeEditorWithFileTree;
