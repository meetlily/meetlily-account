'use  client';
import React, { useEffect, useState } from 'react';
import IconComponent from './icons/IconComponent';

const FileTree: React.FC = () => {
	const [fileTree, setFileTree] = useState<any[]>([]);

	useEffect(() => {
		// Fetch the file tree from the API route
		fetch('/api/file')
			.then((response) => response.json())
			.then((data) => setFileTree(data))
			.catch((error) => console.error('Error fetching file tree:', error));
	}, [setFileTree]);

	const renderFileTree = (tree: any[]) => {
		return (
			<ul>
				{tree.map((item) => (
					<li key={item.path}>
						{item.isDirectory ? (
							<span>
								<IconComponent iconName="folderOpen" /> {item.name}
							</span>
						) : (
							<span>
								<IconComponent iconName="fileIcon" /> {item.name}
							</span>
						)}
						{item.children.length > 0 && renderFileTree(item.children)}
					</li>
				))}
			</ul>
		);
	};

	return (
		<div>
			<h1>File Tree</h1>
			{renderFileTree(fileTree)}
		</div>
	);
};

export default FileTree;
