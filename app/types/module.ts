import { JsonValue } from '@prisma/client/runtime/library';
export type AccountModule = {
	id: string;
	userId: string;
	type: string;
	provider: string;
	providerAccountId: string;
	refresh_token: string | null;
	access_token: string | null;
	expires_at: number | null;
	token_type: string | null;
	scope: string | null;
	id_token: string | null;
	session_state: string | null;
};
export type InstalledModule = {
	id: string;
	name: string;
	slug: string;
	createdAt: Date;
	enabled: boolean | null;
	installed: boolean | null;
	global: boolean | null;
	private: boolean | null;
	icon_name: string | null;
	externalLink: string | null;
};
export type LocalModule = {
	name: string;
	slug: string;
	short_description?: string;
	description?: string;
	category?: { name: string; id: string }[];
	tags?: string[];
	icon_name?: string;
	module?: string;
	installed?: boolean;
};
export type Formdata = {
	id: string;
	name: string;
	data: JsonValue;
};
export type Formfield = {
	displayCondition: string;
	label: string;
	type: string;
	options: any;
	required: boolean | undefined;
	placeholder: string | undefined;
	id: string;
	name: string;
	data: JsonValue;
	value?: any;
	fields?: string[];
};
