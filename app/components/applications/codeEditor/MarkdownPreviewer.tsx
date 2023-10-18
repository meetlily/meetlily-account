import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Heading from '../../Heading';
interface MarkdownPreviewerProps {
	markdownData: any;
}
const MarkdownPreviewer: React.FC<MarkdownPreviewerProps> = ({ markdownData }) => {
	const [markdown, setMarkdown] = useState<string>('');
	useEffect(() => {
		setMarkdown(markdownData);
	}, [markdownData]);
	return (
		<>
			<div className="bg-gray-100 px-4">
				<Heading title={'Markdown Previewer'} iconName="markdown" />
				<Card className="preview p-6 rounded-lg">
					<ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
				</Card>
			</div>
		</>
	);
};

export default MarkdownPreviewer;
