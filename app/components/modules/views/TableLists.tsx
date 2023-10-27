'use client';

import { Table } from 'flowbite-react';

import { getFieldsKeys } from '../../inputs/InputComponent';
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
	const md = getFieldsKeys(fields);

	return (
		<>
			<Table>
				<TableHead moduleView={md} />

				<Table.Body className="divide-y">
					{fields.map((item: any) => (
						<TableRow
							key={item.id}
							item={item}
							moduleView={md}
							primaryAction={primaryAction}
							secondaryAction={secondaryAction}
						/>
					))}
				</Table.Body>
				<TableHead moduleView={md} />
			</Table>
		</>
	);
};

export default TableLists;
