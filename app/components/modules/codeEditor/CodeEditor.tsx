'use client';

import Editor from '@monaco-editor/react';
import React, { useRef } from 'react';

interface CodeEditorProps {
	code: string;
	language: string;
	onChange: (newValue: string) => void;
	className?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, language, onChange, className }) => {
	const editorRef = useRef(null);
	const handleEditorChange = (newValue: any) => {
		onChange(newValue);
	};

	return (
		<div className={`${className}`}>
			<Editor
				language={language}
				theme="hc-black"
				defaultValue="Type your code here"
				value={code}
				options={{ selectOnLineNumbers: true }}
				onChange={handleEditorChange}
				className="dark:bg-gray-900 w-full h-full"
			/>
		</div>
	);
};

export default CodeEditor;
