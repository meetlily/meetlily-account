import { JSDOM } from 'jsdom';
import React from 'react';

interface HTMLToJSXConverterProps {
	html: string;
}

const HTMLToJSXConverter: React.FC<HTMLToJSXConverterProps> = ({ html }) => {
	// Parse the HTML string into a DOM structure using jsdom
	const dom = new JSDOM(html);
	const body = dom.window.document.body;

	// Convert the DOM structure to JSX
	const convertToJSX = (node: Element | ChildNode): React.ReactNode => {
		const jsxAttributes: { [key: string]: string } = {};
		if (node instanceof Element) {
			const attributes = node.attributes;
			for (let i = 0; i < attributes.length; i++) {
				const { name, value } = attributes[i];
				jsxAttributes[name] = value;
			}
		}

		const jsxChildren = Array.from(node.childNodes).map((child) => convertToJSX(child));

		return React.createElement(node.nodeName.toLowerCase(), jsxAttributes, ...jsxChildren);
	};

	return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HTMLToJSXConverter;
