import { Module, Organization, User, Variable } from "@prisma/client";
import { type Message } from 'ai'
import { ProviderType } from "next-auth/providers/index";

export interface Chat extends Record<string, any> {
    id: string
    title: string
    createdAt: Date
    userId: string
    path: string
    messages: Message[]
    sharePath?: string
}
export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified" | "image"
> & {
    name: string | null;
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
    image: string | null;
}
export type OrganizationType = Omit<
    Organization,
    "createdAt" | "updatedAt"
> & {
    createdAt: string;
    updatedAt: string;
}

export type ModuleType = {
    name: string;
    slug: string;
    short_description: string;
    description: string;
    category: { name: string; id: string; }[];
    tags: string[];
    icon_name: string;
    module: string;
  }
export type VariableType = Omit<
    Variable,
    "createdAt"
> & {
    id: string;
    createdAt: string;
    title: string;
    code: number;
    type: string;
    slug: string;
}
export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string
    }
>
export type AccountType = {
	userId: string;
	type: string | 'credentials';
	provider: string;
    providerAccountId: string;
};
export type FormField = {
	label: string;
	name: string;
	type: string;
	placeholder: string;
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