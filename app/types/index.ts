import { Organization, User, Variable } from '@prisma/client';
import { type Message } from 'ai';

export interface Chat extends Record<string, any> {
	id: string;
	title: string;
	createdAt: Date;
	userId: string;
	path: string;
	messages: Message[];
	sharePath?: string;
}
export type Role = { id: string; name: string; description: string | null };
export type SafeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified' | 'image'> & {
	name: string | null;
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
	image: string | null;
	Role: Role[];
};
export type OrganizationType = Omit<Organization, 'createdAt' | 'updatedAt'> & {
	createdAt: string;
	updatedAt: string;
};

export type ModuleType = {
	name: string;
	slug: string;
	short_description: string;
	description: string;
	category: { name: string; id: string }[];
	tags: string[];
	icon_name: string;
	module: string;
};
export type VariableType = Omit<Variable, 'createdAt'> & {
	id: string;
	createdAt: string;
	title: string;
	code: number;
	type: string;
	slug: string;
};
export type ServerActionResult<Result> = Promise<
	| Result
	| {
			error: string;
	  }
>;
export type AccountType = {
	userId: string;
	type: string | 'credentials';
	provider: string;
	providerAccountId: string;
};
export type FormField = {
	name: string;
	label: string;
	type: string;
	value?: string | number;
	placeholder?: string;
	required?: boolean;
	displayCondition?: string;
	options?: string[];
};

export type FormFieldGroup = {
	label: string;
	group: string;
	fields: FormField[];
};

export type OrganizationFormProps = {
	formFields: FormFieldGroup[];
	group: string;
};
export type FormProps = {
	formFields: FormFieldGroup[];
	group: string;
};

/** Vercel Authentication token metadata. */
export type VercelAuthToken = {
	/** The unique identifier of the token. */
	id: string;
	/** The human-readable name of the token. */
	name: string;
	/** The type of the token. */
	type: string;
	/** The origin of how the token was created. */
	origin?: string;
	/** The access scopes granted to the token. */
	scopes?: (
		| {
				type: 'user';
				origin: 'saml' | 'github' | 'gitlab' | 'bitbucket' | 'email' | 'manual';
				createdAt: number;
				expiresAt?: number;
		  }
		| {
				type: 'team';
				teamId: string;
				origin: 'saml' | 'github' | 'gitlab' | 'bitbucket' | 'email' | 'manual';
				createdAt: number;
				expiresAt?: number;
		  }
	)[];
	/** Timestamp (in milliseconds) of when the token expires. */
	expiresAt?: number;
	/** Timestamp (in milliseconds) of when the token was most recently used. */
	activeAt: number;
	/** Timestamp (in milliseconds) of when the token was created. */
	createdAt: number;
};
/** A limited form of data for the currently authenticated User, due to the authentication token missing privileges to read the full User data. */
export type VercelAuthUserLimited = {
	/** Property indicating that this User data contains only limited information, due to the authentication token missing privileges to read the full User data. Re-login with email, GitHub, GitLab or Bitbucket in order to upgrade the authentication token with the necessary privileges. */
	limited: boolean;
	/** The User's unique identifier. */
	id: string;
	/** Email address associated with the User account. */
	email: string;
	/** Name associated with the User account, or `null` if none has been provided. */
	name: string | null;
	/** Unique username associated with the User account. */
	username: string;
	/** SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image. */
	avatar: string | null;
	/** The user's version. Will either be unset or `northstar`. */
	version: 'northstar' | null;
};
/** Data for the currently authenticated User. */
export type VercelAuthUser = {
	/** UNIX timestamp (in milliseconds) when the User account was created. */
	createdAt: number;
	/** When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why. */
	softBlock: {
		blockedAt: number;
		reason:
			| 'SUBSCRIPTION_CANCELED'
			| 'SUBSCRIPTION_EXPIRED'
			| 'UNPAID_INVOICE'
			| 'ENTERPRISE_TRIAL_ENDED'
			| 'FAIR_USE_LIMITS_EXCEEDED'
			| 'BLOCKED_FOR_PLATFORM_ABUSE';
		blockedDueToOverageType?:
			| 'analyticsUsage'
			| 'artifacts'
			| 'bandwidth'
			| 'cronJobInvocation'
			| 'dataCacheRead'
			| 'dataCacheRevalidation'
			| 'dataCacheWrite'
			| 'edgeConfigRead'
			| 'edgeConfigWrite'
			| 'edgeFunctionExecutionUnits'
			| 'edgeMiddlewareInvocations'
			| 'monitoringMetric'
			| 'postgresComputeTime'
			| 'postgresDatabase'
			| 'postgresDataStorage'
			| 'postgresDataTransfer'
			| 'postgresWrittenData'
			| 'serverlessFunctionExecution'
			| 'sourceImages'
			| 'storageRedisTotalBandwidthInBytes'
			| 'storageRedisTotalCommands'
			| 'storageRedisTotalDailyAvgStorageInBytes'
			| 'storageRedisTotalDatabases'
			| 'webAnalyticsEvent';
	} | null;
	/** An object containing billing infomation associated with the User account. */
	billing: {
		currency?: 'usd' | 'eur';
		cancelation?: number | null;
		period: {
			start: number;
			end: number;
		} | null;
		contract?: {
			start: number;
			end: number;
		} | null;
		plan: 'pro' | 'enterprise' | 'hobby';
		platform?: 'stripe' | 'stripeTestMode';
		orbCustomerId?: string;
		syncedAt?: number;
		programType?: 'startup' | 'agency';
		trial?: {
			start: number;
			end: number;
		} | null;
		email?: string | null;
		tax?: {
			type: string;
			id: string;
		} | null;
		language?: string | null;
		address?: {
			line1: string;
			line2?: string;
			postalCode?: string;
			city?: string;
			country?: string;
			state?: string;
		} | null;
		name?: string | null;
		invoiceItems?: {
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			concurrentBuilds?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			webAnalytics?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			pro?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			enterprise?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			analytics?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			monitoring?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			passwordProtection?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			previewDeploymentSuffix?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			saml?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			/** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
			teamSeats?: {
				tier?: number;
				price: number;
				quantity: number;
				name?: string;
				hidden: boolean;
				createdAt?: number;
				disabledAt?: number | null;
				frequency?: {
					interval: 'month';
					intervalCount: 1 | 2 | 3 | 6 | 12;
				};
				maxQuantity?: number;
			};
			analyticsUsage?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			artifacts?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			bandwidth?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			cronJobInvocation?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			dataCacheRead?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			dataCacheRevalidation?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			dataCacheWrite?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			edgeConfigRead?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			edgeConfigWrite?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			edgeFunctionExecutionUnits?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			edgeMiddlewareInvocations?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			monitoringMetric?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			postgresComputeTime?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			postgresDatabase?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			postgresDataStorage?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			postgresDataTransfer?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			postgresWrittenData?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			serverlessFunctionExecution?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			sourceImages?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			storageRedisTotalBandwidthInBytes?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			storageRedisTotalCommands?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			storageRedisTotalDailyAvgStorageInBytes?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			storageRedisTotalDatabases?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
			webAnalyticsEvent?: {
				tier?: number;
				price: number;
				batch: number;
				threshold: number;
				name?: string;
				hidden: boolean;
				disabledAt?: number | null;
				enabledAt?: number | null;
			};
		} | null;
		invoiceSettings?: {
			footer?: string;
		};
		subscriptions?:
			| {
					id: string;
					trial: {
						start: number;
						end: number;
					} | null;
					period: {
						start: number;
						end: number;
					};
					frequency: {
						interval: 'month' | 'day' | 'week' | 'year';
						intervalCount: number;
					};
					discount: {
						id: string;
						coupon: {
							id: string;
							name: string | null;
							amountOff: number | null;
							percentageOff: number | null;
							durationInMonths: number | null;
							duration: 'forever' | 'repeating' | 'once';
						};
					} | null;
					items: {
						id: string;
						priceId: string;
						productId: string;
						amount: number;
						quantity: number;
					}[];
			  }[]
			| null;
		controls?: {
			analyticsSampleRateInPercent?: number | null;
			analyticsSpendLimitInDollars?: number | null;
		} | null;
		purchaseOrder?: string | null;
		status?: 'active' | 'trialing' | 'overdue' | 'expired' | 'canceled';
		pricingExperiment?: 'august-2022';
		orbMigrationScheduledAt?: number | null;
	} | null;
	/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
	resourceConfig: {
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		nodeType?: string;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		concurrentBuilds?: number;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		awsAccountType?: string;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		awsAccountIds?: string[];
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		cfZoneName?: string;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		edgeConfigs?: number;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		edgeConfigSize?: number;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		edgeFunctionMaxSizeBytes?: number;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		edgeFunctionExecutionTimeoutMs?: number;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		serverlessFunctionDefaultMaxExecutionTime?: number;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		kvDatabases?: number;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		postgresDatabases?: number;
		/** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
		blobStores?: number;
	};
	/** Prefix that will be used in the URL of "Preview" deployments created by the User account. */
	stagingPrefix: string;
	/** set of dashboard view preferences (cards or list) per scopeId */
	activeDashboardViews?: {
		scopeId: string;
		viewPreference: 'cards' | 'list';
	}[];
	importFlowGitNamespace?: (string | number) | null;
	importFlowGitNamespaceId?: (string | number) | null;
	importFlowGitProvider?: 'github' | 'gitlab' | 'bitbucket';
	preferredScopesAndGitNamespaces?: {
		scopeId: string;
		gitNamespaceId: (string | number) | null;
	}[];
	/** A record of when, under a certain scopeId, a toast was dismissed */
	dismissedToasts?: {
		name: string;
		dismissals: {
			scopeId: string;
			createdAt: number;
		}[];
	}[];
	/** A list of projects and spaces across teams that a user has marked as a favorite. */
	favoriteProjectsAndSpaces?: (
		| {
				projectId: string;
				scopeSlug: string;
				scopeId: string;
		  }
		| {
				spaceId: string;
				scopeSlug: string;
				scopeId: string;
		  }
	)[];
	/** Whether the user has a trial available for a paid plan subscription. */
	hasTrialAvailable: boolean;
	/** remote caching settings */
	remoteCaching?: {
		enabled?: boolean;
	};
	/** data cache settings */
	dataCache?: {
		excessBillingEnabled?: boolean;
	};
	/** Feature blocks for the user */
	featureBlocks?: {
		webAnalytics?: {
			blockedFrom?: number;
			blockedUntil?: number;
			isCurrentlyBlocked: boolean;
		};
	};
	/** The user's default team. Only applies if the user's `version` is `'northstar'`. */
	defaultTeamId: string | null;
	/** The User's unique identifier. */
	id: string;
	/** Email address associated with the User account. */
	email: string;
	/** Name associated with the User account, or `null` if none has been provided. */
	name: string | null;
	/** Unique username associated with the User account. */
	username: string;
	/** SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image. */
	avatar: string | null;
	/** The user's version. Will either be unset or `northstar`. */
	version: 'northstar' | null;
};

/*** type interface for creating documentations ***/

export type Instruction = {
	description?: string;
	code?: string;
};

export type Step = {
	title: string;
	instructions: Instruction[];
};

export type Guide = {
	title: string;
	description: string;
	steps: Step[];
	categories: string[]; // This is the new field
};
export type Guides = {
	guides: Guide[];
};
/*** Now, these interfaces are exported and can be imported in other TypeScript files in your project. For example:
 * import { Guide, Step, Instruction } from './path-to-your-file';
 *
 * ***/

interface Field {
	label: string;
	name: string;
	type: string;
	placeholder: string;
}

interface Group {
	label: string;
	group: string;
	fields: Field[];
}

export type FormData = Group[];
