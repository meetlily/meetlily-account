'use client';
import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import CodeEditorWithFileTree from './CodeEditorWithFileTree';
interface CodeEditorPageProps {
	code: string;
	language: string;
	onChange: (newValue: string) => void;
}
const CodeEditorPage: React.FC<CodeEditorPageProps> = ({ code, language, onChange }) => {
	const [codeData, setCodeData] = useState('const hello = "world";');
	const handleCodeChange = (newCode: string) => {
		setCodeData(newCode);
		onChange(newCode);
	};
	const handleCodeMount = (newCode: string) => {};
	return (
		<div className="flex flex-row">
			<CodeEditorWithFileTree />
			<CodeEditor
				code={code}
				language={language}
				onChange={handleCodeChange}
				onMount={handleCodeMount}
			/>
		</div>
	);
};

export default CodeEditorPage;
