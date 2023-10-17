'use client';

import React, { useEffect, useState } from 'react';
import IconComponent from '../icons/IconComponent';
import FileDirectory from './FileDirectory';

interface FileSubDirectoryProps {
	items?: any;
	onChange: (newValue: string) => void;
}

const FileSubDirectory: React.FC<FileSubDirectoryProps> = ({ items, onChange }) => {
	const [directoryFiles, setDirectoryFiles] = useState<any[]>([]);
	const [clickedElements, setClickedElements] = useState(new Set());

	useEffect(() => {
		setDirectoryFiles(items);
	}, [setDirectoryFiles, items]);
	function getFileExtension(filename: string): string {
		const lastDotIndex = filename.lastIndexOf('.');
		if (lastDotIndex === -1) {
			return ''; // No file extension found
		}
		return filename.slice(lastDotIndex + 1);
	}
	const handleFileChange = (e: any) => {
		onChange(e);
	};
	const handleFolderClick = (element: any) => {
		if (clickedElements.has(element)) {
			// If it's clicked, remove it from the set to toggle it off
			setClickedElements((prevClickedElements) => {
				const newSet = new Set(prevClickedElements);
				newSet.delete(element);
				return newSet;
			});
		} else {
			// If it's not clicked, add it to the set to toggle it on
			setClickedElements((prevClickedElements) => {
				const newSet = new Set(prevClickedElements);
				newSet.add(element);
				return newSet;
			});
		}
	};
	const renderFileTree = (tree: any[]) => {
		return (
			<ul>
				{tree.map((item) => (
					<li key={item.path}>
						{item.isDirectory ? (
							<div
								className={`flex flex-row items-center justify-start cursor-pointer  transition text-gray-700 dark:text-gray-50 hover:text-cyan-500 dark:hover:text-cyan-400 ${
									clickedElements.has(item.name) ? 'expanded' : ''
								}`}
								onClick={() => handleFolderClick(item.name)}
							>
								<div className="flex mr-1">
									<IconComponent
										iconName={`${
											clickedElements.has(item.name) ? 'fileDownArrow' : 'fileRightArrow'
										}`}
									/>
								</div>
								<div className="flex mr-2">
									<IconComponent
										iconName={`${clickedElements.has(item.name) ? 'folderOpen' : 'folderClose'}`}
									/>
								</div>
								<div className="flex">{item.name}</div>
							</div>
						) : (
							<div
								className="flex flex-row items-center justify-start ml-5 cursor-pointer  transition text-gray-700 dark:text-gray-50 hover:text-cyan-500 dark:hover:text-cyan-400"
								onClick={() => onChange(item)}
							>
								<div className="flex mr-2 ">
									<IconComponent iconName={`${getFileExtension(item.name)}`} />
								</div>
								<div className="flex">{item.name}</div>
							</div>
						)}

						<div className="ml-4">
							{item.children.length > 0 && clickedElements.has(item.name) && (
								<FileDirectory directory={item.children} onChange={handleFileChange} />
							)}
						</div>
					</li>
				))}
			</ul>
		);
	};
	return <div className="ml-1">{renderFileTree(directoryFiles)}</div>;
};

export default FileSubDirectory;
