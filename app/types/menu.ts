interface Category {
	name: string;
	id: string;
}

interface ModuleItem {
	name: string;
	slug: string;
	short_description?: string;
	description?: string;
	category?: Category[];
	tags?: string[];
	icon_name: string;
	module: string;
	external?: string;
}

interface MenuItem {
	icon_name: string;
	name: string;
	collapse?: boolean;
	items?: ModuleItem[];
	link?: string;
	label?: string;
}

export type Menu = MenuItem[];
