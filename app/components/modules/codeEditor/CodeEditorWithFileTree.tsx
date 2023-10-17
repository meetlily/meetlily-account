'use client';
import axios from 'axios';
import { Card } from 'flowbite-react';
import React, { useState } from 'react';

import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup';
import { useParams } from 'next/navigation';
import ButtonIcon from '../../ButtonIcon';
import FileDirectory from '../../files/FileDirectory';
import CodeEditor from './CodeEditor';
//const CodeEditor = dynamic(() => import(CodeEditor));
interface CodeEditorWithFileTreeProps {
	files?: any;
}
const CodeEditorWithFileTree: React.FC<CodeEditorWithFileTreeProps> = ({ files }) => {
	const [fileTree, setFileTree] = useState<any[]>(files);
	const [fileContent, setFileContent] = useState<any>('');
	const [codeData, setCodeData] = useState('const hello = "world";');
	const [language, setLanguage] = useState('javascript');
	const params = useParams();
	function getFileExtension(filename: string): string {
		const lastDotIndex = filename.lastIndexOf('.');
		if (lastDotIndex === -1) {
			return ''; // No file extension found
		}
		return filename.slice(lastDotIndex + 1);
	}
	const hasTsFileExtension = (fileName: string) => {
		if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
			return;
		}
		return fileName.endsWith('.ts') || fileName.endsWith('.tsx');
	};
	const handleCodeChange = (newCode: string) => {
		setFileContent(newCode);
	};
	const handleFileChange = (e: any) => {
		const ext = getFileExtension(e.name);

		if (hasTsFileExtension(e.name)) {
			setLanguage('typescript');
		} else {
			setLanguage('markdown');
		}
		const filePath = e.path;
		axios
			.get(`/api/file?path=${filePath}`)
			.then((response) => {
				setFileContent(response.data.content);
			})
			.catch((error) => console.error('Error fetching file tree:', error));
		//setFileContent(newCode);
	};

	// const saveFile = async () => {
	// 	try {
	// 		const response = await axios.post('/api/saveFile', { content: codeData });
	// 		if (response.data.success) {
	// 			console.log('File saved successfully');
	// 		} else {
	// 			console.error('Failed to save the file');
	// 		}
	// 	} catch (error) {
	// 		console.error('Error saving file:', error);
	// 	}
	// };

	return (
		<>
			<div className="flex flex-col pt-4">
				<div className="flex flex-col w-full h-full overflow-auto">
					{/* <div className="mt-4 mb-4">
						<Heading title={'Editor'} iconName={'code'} iconSize={36} />
					</div> */}
					<div className="flex flex-col w-full items-start mb-[2px]">
						<Card className="w-full  bg-gray-50">
							<div className="flex flex-row w-full items-center">
								<div className="flex flex-col w-full items-start">
									<ButtonGroup className="flex gap-4">
										<ButtonIcon
											icon={'bar'}
											label={`${params?.slug}`}
											inline
											classNames="capitalize"
										/>
									</ButtonGroup>
								</div>
								<div className="flex flex-col items-center w-full">
									<ButtonGroup className="flex gap-4">
										<ButtonIcon
											icon={'code'}
											label={`${params?.slug}`}
											inline
											showLabel
											classNames="capitalize"
										/>
									</ButtonGroup>
								</div>
								<div className="flex flex-col  w-full items-end">
									<ButtonGroup className="flex gap-4">
										<ButtonIcon icon={'cog'} label="Settings" inline />
									</ButtonGroup>
								</div>
							</div>
						</Card>
					</div>
					<div className="flex flex-row gap-0 item-start justify-start">
						<div className="flex  w-full max-w-[280px] ">
							<Card className="w-full">
								<div className="overflow-y-scroll w-full h-200 max-h-[880px] overflow-hidden">
									<FileDirectory directory={fileTree} onChange={handleFileChange} />
								</div>
							</Card>
						</div>
						<div className="flex h-screen max-h-[900px]  w-screen max-w-md xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl  xl:max-w-5xl 2xl:max-w-7xl">
							<Card className="flex w-full h-full overflow-scroll">
								<div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
									<CodeEditor
										className={`h-full w-full`}
										code={fileContent}
										language={language}
										onChange={handleCodeChange}
									/>
								</div>
							</Card>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full mt-[2px] ">
					<Card className="w-full h-[30px]"></Card>
				</div>
			</div>
		</>
	);
};

export default CodeEditorWithFileTree;
