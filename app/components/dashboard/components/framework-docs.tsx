'use client';

//import { allDocs } from 'contentlayer/generated';
import * as React from 'react';

interface FrameworkDocsProps extends React.HTMLAttributes<HTMLDivElement> {
	data: string;
}

export function FrameworkDocs({ ...props }: FrameworkDocsProps) {
	//const frameworkDoc = allDocs.find(
	//(doc: { slug: string }) => doc.slug === `/docs/installation/${props.data}`
	//);
	//if (!frameworkDoc) {
	//return null;
	//}
	//return <Mdx code={frameworkDoc.body.code} />;
}
