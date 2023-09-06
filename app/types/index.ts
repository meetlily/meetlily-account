import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified" | "image"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
    image: string | null;
}