interface ModuleConfig {
	module: string;
	description: string;
	settings: {
		allowCreateUser: boolean;
		allowEditUser: boolean;
		allowDeleteUser: boolean;
		maxUsersPerRole: number;
	};
	permissions: {
		view: string[];
		edit: string[];
		delete: string[];
	};
	dataSources: {
		users: string;
		roles: string;
		permissions: string;
	};
	metadata: {
		author: string;
		version: string;
		createdAt: string;
	};
	features: {
		analytics: boolean;
		notifications: boolean;
		search: boolean;
	};
	customization: {
		logoUrl: string;
		themeColor: string;
		customFields: {
			label: string;
			type: string;
		}[];
		alerts: {
			type: string;
			message: string;
		}[];
		userRoles: {
			name: string;
			permissions: string[];
		}[];
		modules: {
			name: string;
			enabled: boolean;
			permissions: {
				view: string[];
				edit: string[];
			};
		}[];
		integrations: {
			name: string;
			enabled: boolean;
			apiKey: string;
		}[];
	};
}
const mConfig: ModuleConfig = {
	module: 'User Management',
	description: 'Manage and administer user accounts',
	settings: {
		allowCreateUser: true,
		allowEditUser: true,
		allowDeleteUser: true,
		maxUsersPerRole: 100
	},
	permissions: {
		view: ['admin', 'manager', 'employee'],
		edit: ['admin', 'manager'],
		delete: ['admin']
	},
	dataSources: {
		users: 'https://api.example.com/users',
		roles: 'https://api.example.com/roles',
		permissions: 'https://api.example.com/permissions'
	},
	metadata: {
		author: 'Your Name',
		version: '1.0',
		createdAt: '2023-01-15'
	},
	features: {
		analytics: true,
		notifications: true,
		search: true
	},
	customization: {
		logoUrl: 'https://example.com/user-management-logo.png',
		themeColor: '#FF5733',
		customFields: [
			{
				label: 'Employee ID',
				type: 'text'
			},
			{
				label: 'Department',
				type: 'text'
			}
		],
		alerts: [
			{
				type: 'info',
				message: 'Welcome to the User Management module!'
			},
			{
				type: 'warning',
				message: 'Please complete your user profile.'
			}
		],
		userRoles: [
			{
				name: 'Admin',
				permissions: ['view', 'edit', 'delete']
			},
			{
				name: 'Manager',
				permissions: ['view', 'edit']
			},
			{
				name: 'Employee',
				permissions: ['view']
			}
		],
		modules: [
			{
				name: 'Reports',
				enabled: true,
				permissions: {
					view: ['admin', 'manager'],
					edit: ['admin']
				}
			},
			{
				name: 'Activity Log',
				enabled: true,
				permissions: {
					view: ['admin', 'manager'],
					edit: ['admin']
				}
			}
		],
		integrations: [
			{
				name: 'Slack',
				enabled: true,
				apiKey: 'your-slack-api-key'
			},
			{
				name: 'Google Workspace',
				enabled: true,
				apiKey: 'your-google-api-key'
			}
		]
	}
};
interface FormField {
	label: string;
	name: string;
	type: string;
	fields?: any;
	value?: any;
	checked?: boolean;
	option?: string[];
	// Add more properties based on your needs
}
const generateFormFields = (mConfig: ModuleConfig): FormField[] => {
	const fields: FormField[] = [];

	// Module name and description
	fields.push({ label: 'Module', name: 'module', type: 'text' });
	fields.push({ label: 'Description', name: 'description', type: 'text' });

	// Settings
	fields.push({ label: 'Allow Create User', name: 'allowCreateUser', type: 'toggle' });
	fields.push({ label: 'Allow Edit User', name: 'allowEditUser', type: 'toggle' });
	fields.push({ label: 'Allow Delete User', name: 'allowDeleteUser', type: 'toggle' });

	// Permissions
	fields.push({ label: 'View Permissions', name: 'viewPermissions', type: 'multiselect' });
	fields.push({ label: 'Edit Permissions', name: 'editPermissions', type: 'multiselect' });
	fields.push({ label: 'Delete Permissions', name: 'deletePermissions', type: 'multiselect' });

	// Data Sources
	fields.push({ label: 'Users API', name: 'dataSources.users', type: 'text' });
	fields.push({ label: 'Roles API', name: 'dataSources.roles', type: 'text' });
	fields.push({ label: 'Permissions API', name: 'dataSources.permissions', type: 'text' });

	return fields;
};
