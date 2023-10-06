'use client';

import Editor from '@monaco-editor/react';
import { Card } from 'flowbite-react';
import React, { useRef } from 'react';

interface CodeEditorProps {
	code: string;
	language: string;
	onChange: (newValue: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, language, onChange }) => {
	const editorRef = useRef(null);
	const handleEditorChange = (newValue: any) => {
		onChange(newValue);
	};

	return (
		<div className="relative flex flex-row w-full items-center justify-center h-full">
			<Card className="relative flex flex-col min-h-[420px] w-full">
				<div className="absolute h-full left-0 top-0 w-full">
					<Editor
						language={language}
						theme="vs-dark"
						defaultValue="// type your code"
						value={code}
						options={{ selectOnLineNumbers: true }}
						onChange={handleEditorChange}
						className=" h-full w-full"
					/>
				</div>
			</Card>
			<div className="flex flex-col h-[300px] top-0  min-h-[300px] w-full  py-4"></div>
		</div>
	);
};

export default CodeEditor;
