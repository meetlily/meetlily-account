import { serialize, parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'
import fs from 'fs';


interface CookieOptions {
  maxAge?: number;
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

export function setCookie(res: NextApiResponse, name: string, value: string | object, options: CookieOptions = {}) {
    const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);
  
    if (options.maxAge !== undefined) {
      options.expires = new Date(Date.now() + options.maxAge);
      options.maxAge /= 1000;
    }
  
    res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));
  }
  
  export function parseCookies(req: NextApiRequest) {
    if (!req.headers.cookie) {
      return {};
    }
  
    return parse(req.headers.cookie);
  }
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }
  
  export const nanoid = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    7
  ) // 7-character random string
  
  export async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<JSON> {
    const res = await fetch(input, init)
  
    if (!res.ok) {
      const json = await res.json()
      if (json.error) {
        const error = new Error(json.error) as Error & {
          status: number
        }
        error.status = res.status
        throw error
      } else {
        throw new Error('An unexpected error occurred')
      }
    }
  
    return res.json()
  }
  
export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function writeJsonToFile(jsonData: any, path: string): string {
  fs.writeFileSync(path, JSON.stringify(jsonData, null, 2));
  return jsonData;
}
export function readJsonFile(path: fs.PathOrFileDescriptor | undefined){
  let jsonData;
  if(path){
    jsonData = JSON.parse(fs.readFileSync(path, 'utf-8'));
  }
  return jsonData;
}
interface SidebarItem {
  name: string;
  group: string;
}

export function sidebarAddItems (sidebarData: any, administrationData: any) {
  const sidebar: SidebarItem[] = sidebarData;


  sidebarData.map((g: any) => {
    const items = administrationData[g.group];
 
    if (items) {
      let newItems: any[] = [];
      g.items.map((item: string) => {
        if(item){
          const newItem = items.find((i: { name: string; }) => i.name === item);
          if(newItem){
            newItems.push(newItem)
            return newItem;
          }
        }
      })
      g.items = newItems;
      return g.items;
    }
    //return g;
  });
  console.log(sidebarData)
  return sidebarData;
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


  


