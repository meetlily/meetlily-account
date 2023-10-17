'use client';

import { Table } from 'flowbite-react';
interface TableCellProps {
	cell: any;
}
const TableCell: React.FC<TableCellProps> = ({ cell }) => {
	return (
		<>
			<Table.Cell>{cell.name}</Table.Cell>
			<Table.Cell>{cell.email}</Table.Cell>
			<Table.Cell>{cell.createdAt}</Table.Cell>
		</>
	);
};

export default TableCell;
