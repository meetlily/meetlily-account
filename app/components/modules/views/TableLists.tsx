'use client';

import { Table } from 'flowbite-react';

import TableHead from './TableHead';
import TableRow from './TableRow';
interface LoaderProps {
	fields?: any;
	data?: any;
	header?: React.ReactNode;
	body?: React.ReactNode;
	moduleView: any;
	primaryAction: (item: any) => void;
	secondaryAction: (item: any) => void;
}
const TableLists: React.FC<LoaderProps> = ({
	fields,
	data,
	header,
	body,
	moduleView,
	primaryAction,
	secondaryAction
}) => {
	return (
		<>
			<Table>
				<TableHead moduleView={moduleView} />

				<Table.Body className="divide-y">
					{fields.map((item: any) => (
						<TableRow
							key={item.id}
							item={item}
							moduleView={moduleView}
							primaryAction={primaryAction}
							secondaryAction={secondaryAction}
						/>
					))}
				</Table.Body>
			</Table>
		</>
	);
};

export default TableLists;
