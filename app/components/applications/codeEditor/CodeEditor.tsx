'use client';

import Editor, { loader } from '@monaco-editor/react';
import React, { useRef } from 'react';

interface CodeEditorProps {
	code: string;
	language: string;
	onChange: (newValue: string) => void;
	className?: string;
	onMount: (newValue: string, monaco: any) => void;
	theme?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
	code,
	language,
	onChange,
	className,
	onMount,
	theme
}) => {
	const editorRef = useRef(null);
	const handleEditorChange = (newValue: any) => {
		onChange(newValue);
	};

	const handleEditorMount = (editor: any, monaco: any) => {
		editorRef.current = editor;
		if (editorRef && editorRef?.current) {
		}

		onMount(editor, monaco);
	};
	loader.init().then((monaco) => {
		const properties = {
			value: 'function hello() {\n\talert("Hello world!");\n}',
			language: 'javascript'
		};
	});
	const options: any = {
		formatOnPaste: true,
		formatOnType: true,
		minimap: {
			enabled: false
		},
		acceptSuggestionOnCommitCharacter: true,
		acceptSuggestionOnEnter: 'on',
		accessibilitySupport: 'auto',
		autoIndent: false,
		automaticLayout: true,
		codeLens: true,
		colorDecorators: true,
		contextmenu: true,
		cursorBlinking: 'blink',
		cursorSmoothCaretAnimation: false,
		cursorStyle: 'line',
		disableLayerHinting: false,
		disableMonospaceOptimizations: false,
		dragAndDrop: false,
		fixedOverflowWidgets: false,
		folding: true,
		foldingStrategy: 'auto',
		fontLigatures: false,
		hideCursorInOverviewRuler: false,
		highlightActiveIndentGuide: true,
		links: true,
		mouseWheelZoom: false,
		multiCursorMergeOverlapping: true,
		multiCursorModifier: 'alt',
		overviewRulerBorder: true,
		overviewRulerLanes: 2,
		quickSuggestions: true,
		quickSuggestionsDelay: 100,
		readOnly: false,
		renderControlCharacters: false,
		renderFinalNewline: true,
		renderIndentGuides: true,
		renderLineHighlight: 'all',
		renderWhitespace: 'none',
		revealHorizontalRightPadding: 30,
		roundedSelection: true,
		rulers: [],
		scrollBeyondLastColumn: 5,
		scrollBeyondLastLine: true,
		selectOnLineNumbers: true,
		selectionClipboard: true,
		selectionHighlight: true,
		showFoldingControls: 'mouseover',
		smoothScrolling: false,
		suggestOnTriggerCharacters: true,
		wordBasedSuggestions: true,
		wordSeparators: '~!@#$%^&*()-=+[{]}|;:\'",.<>/?',
		wordWrap: 'off',
		wordWrapBreakAfterCharacters: '\t})]?|&,;',
		wordWrapBreakBeforeCharacters: '{([+',
		wordWrapBreakObtrusiveCharacters: '.',
		wordWrapColumn: 80,
		wordWrapMinified: true,
		wrappingIndent: 'none'
	};
	return (
		<div className={`${className}`}>
			<Editor
				language={language}
				theme={theme || 'vsc-dark'}
				defaultValue="//Type your code here"
				value={code}
				options={options}
				onChange={handleEditorChange}
				className="dark:bg-gray-900 w-full h-full"
				onMount={handleEditorMount}
			/>
		</div>
	);
};

export default CodeEditor;
