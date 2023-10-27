'use client';

import { AccountModule } from '@/app/types/module';
import Select from 'react-select';

interface AccountSelectProps {
	value: AccountModule;
	onChange: (value: AccountModule) => void;
}

const AccountSelect: React.FC<AccountSelectProps> = ({ value, onChange }) => {
	//const { getAll } = useAccounts();

	return (
		<div>
			<Select
				placeholder="Anywhere"
				isClearable
				//options={getAll()}
				value={value}
				onChange={(value) => onChange(value as AccountModule)}
				formatOptionLabel={(option: any) => (
					<div className="flex flex-row items-center gap-3">
						<div>{option.id}</div>
						<div>
							{option.token_type},<span className="text-neutral-500 ml-1">{option.userId}</span>
						</div>
					</div>
				)}
				classNames={{
					control: () => 'p-1 border-2',
					input: () => 'text-lg',
					option: () => 'text-lg'
				}}
				theme={(theme) => ({
					...theme,
					borderRadius: 6,
					colors: {
						...theme.colors,
						primary: 'black',
						primary25: '#ffe4e6'
					}
				})}
			/>
		</div>
	);
};

export default AccountSelect;
