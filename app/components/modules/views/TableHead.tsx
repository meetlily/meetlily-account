'use client';

import { Table } from 'flowbite-react';
interface TableHeadProps {
	moduleView: any;
	idWidth?: string;
}
const TableHead: React.FC<TableHeadProps> = ({ moduleView, idWidth }) => {
	return (
		<>
			<Table.Head>
				<Table.HeadCell className={idWidth}></Table.HeadCell>
				{moduleView &&
					moduleView.map((list: any) => <Table.HeadCell key={list}>{list}</Table.HeadCell>)}
				<Table.HeadCell></Table.HeadCell>
			</Table.Head>
		</>
	);
};

export default TableHead;
