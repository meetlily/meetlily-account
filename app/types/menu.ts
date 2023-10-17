interface Category {
	name: string;
	id: string;
}

interface ModuleItem {
	name: string;
	slug?: string;
	short_description?: string;
	description?: string;
	category?: Category[];
	tags?: string[];
	icon_name: string;
	module?: string;
	external?: string;
}

interface MenuItem {
	icon_name: string;
	name: string;
	slug?: string;
	collapse?: boolean;
	items?: ModuleItem[];
	link?: string;
	label?: string;
	module?: string;
}

export type Menu = MenuItem[];
