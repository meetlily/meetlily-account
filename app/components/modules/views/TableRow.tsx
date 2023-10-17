'use client';

import { Button, Checkbox, Table } from 'flowbite-react';
import ButtonIcon from '../../ButtonIcon';
interface TableRowProps {
	item: any;
	moduleView?: any;
	primaryAction: (item: any) => void;
	secondaryAction: (item: any) => void;
}
const TableRow: React.FC<TableRowProps> = ({
	item,
	moduleView,
	primaryAction,
	secondaryAction
}) => {
	return (
		<>
			<Table.Row key={item.slug} className="bg-white dark:border-gray-700 dark:bg-gray-800">
				<>
					<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
						{/* <IconComponent iconName={item.icon_name} size={22} color="gray" /> */}

						<Checkbox id={`${item.id}-moduleInstalled`} name={`${item.name}-moduleInstalled`} />
					</Table.Cell>
					{moduleView &&
						Object.keys(moduleView).map((list) => (
							<Table.Cell key={list}>{item[`${list}`]}</Table.Cell>
						))}

					<Table.Cell>
						<Button.Group
							color="dark"
							className="hover:bg-transparent gap-2 items-end justify-end w-full"
						>
							<ButtonIcon
								icon={'edit'}
								label="Edit"
								shadow
								outline
								iconSize={22}
								onClick={() => primaryAction(item)}
							/>
							<ButtonIcon
								icon={'close'}
								label="Delete"
								shadow
								outline
								iconSize={22}
								classNames="text-red-500"
								onClick={() => secondaryAction(item)}
							/>
						</Button.Group>
					</Table.Cell>
				</>
			</Table.Row>
		</>
	);
};

export default TableRow;
