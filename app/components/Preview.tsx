'use client';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import { LivePreview, LiveProvider } from 'react-live';

type PreviewProps = {
	code: string;
	noInline: boolean;
	scope: Record<string, any>;
	showEditor?: boolean;
	disabled?: boolean;
	language?: string;
};

const Preview: React.FC<PreviewProps> = ({
	code,
	noInline,
	scope,
	showEditor,
	disabled,
	language
}) => {
	if (!language) {
		language = 'tsx';
	}

	const [codeData, setCodeData] = useState(code);
	const handleEditorChange = (newCode: any) => {
		console.log(newCode);
		setCodeData(newCode);
	};

	return (
		<>
			<LiveProvider
				language="tsx"
				code={codeData}
				scope={scope}
				noInline={noInline}
				disabled={disabled}
			>
				<div className="relative flex flex-row  item-start w-full h-full">
					<div
						className={`
        w-full
        h-full 
        flex 
        flex-col
      `}
					>
						<LivePreview contentEditable={false} draggable={false} />
					</div>
				</div>
				{showEditor && (
					<div className={`w-full max-w-xl flex flex-co`}>
						<div className="fixed max-w-xl h-full right-0 top-10 w-full bg-gray-100 z-100">
							<Editor
								language={language}
								theme="vs-dark"
								defaultValue="// type your code"
								value={codeData}
								options={{ selectOnLineNumbers: true }}
								onChange={handleEditorChange}
								className=" h-full w-full"
							/>
						</div>
					</div>
				)}
			</LiveProvider>
		</>
	);
};

export default Preview;
