import React from 'react';

interface DynamicIframeProps {
	src: string;
	width: string;
	height: string;
	title?: string;
}

const DynamicIframe: React.FC<DynamicIframeProps> = ({ src, width, height, title = '' }) => {
	return (
		<iframe
			src={src}
			width={width}
			height={height}
			title={title}
			allowFullScreen
			frameBorder="0"
		></iframe>
	);
};

export default DynamicIframe;
