'use client';

import ButtonIcon from '../ButtonIcon';
interface ModuleOptionsProps {
	label?: string;
	slug?: string;
	installed?: boolean;
}

const ModuleOptions: React.FC<ModuleOptionsProps> = ({ label, slug, installed }) => {
	return (
		<div className={`flex flex-col item-center justify-center rounded-none `} role="group">
			<ButtonIcon
				icon={`${installed ? 'uninstall' : 'install'}`}
				label={`${installed ? 'uninstall' : 'install'}`}
				showLabel
				inline
				outline
				rounded
				classNames="bg-gray-500 text-white space-x-2"
			/>
		</div>
	);
};

export default ModuleOptions;
