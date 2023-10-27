'use client';

import { Button, Table } from 'flowbite-react';
import ButtonIcon from '../../ButtonIcon';

interface TableRowProps {
	item: any;
	moduleView: any;
	primaryAction: (item: any) => void;
	secondaryAction: (item: any) => void;
	field?: any;
}
const TableRow: React.FC<TableRowProps> = ({
	item,
	moduleView,
	primaryAction,
	secondaryAction,
	field
}) => {
	const it = item;
	//const it = refactorFieldsKeys(item);

	return (
		<>
			<Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
				<>
					<Table.Cell>
						<Button.Group
							color="dark"
							className="hover:bg-transparent gap-2 items-end justify-end w-full"
						>
							<ButtonIcon
								icon={'trash'}
								label="Delete"
								shadow
								outline
								iconSize={22}
								classNames="text-red-500"
								onClick={() => secondaryAction(item)}
							/>
							<ButtonIcon
								icon={'edit'}
								label="Update"
								shadow
								outline
								iconSize={22}
								onClick={() => primaryAction(item)}
							/>
						</Button.Group>
					</Table.Cell>
					{moduleView &&
						moduleView.map((list: any) => (
							<Table.Cell key={list}>
								{item[list] && (
									<div>
										{typeof item[list] === 'object' ? (
											<div className="flex flex-row items-center justify-start gap-2">
												{Array.isArray(item[list])
													? item[list].map((l: any) => <div key={l}>{JSON.stringify(l)}</div>)
													: Object.keys(item[list]).map((h, i) => (
															<div
																key={h}
																className={`${
																	h === 'label' || h === 'flag' ? 'flex w-full' : 'hidden'
																}`}
															>{`${item[list][h]}`}</div>
													  ))}
											</div>
										) : (
											<div>{item[list]}</div>
										)}
									</div>
								)}
							</Table.Cell>
						))}

					<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
				</>
			</Table.Row>
		</>
	);
};

export default TableRow;
