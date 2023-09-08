import { User } from "@prisma/client";
import { type Message } from 'ai'

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
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
    image: string | null;
}
export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string
    }
>