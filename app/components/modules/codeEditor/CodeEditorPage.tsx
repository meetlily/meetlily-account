'use client';
import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

const CodeEditorPage: React.FC = () => {
	const [code, setCode] = useState('const hello = "world";');
	console.log(code);
	const handleCodeChange = (newCode: string) => {
		setCode(newCode);
	};

	return <CodeEditor code={code} language="typescript" onChange={handleCodeChange} />;
};

export default CodeEditorPage;
