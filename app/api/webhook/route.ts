import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { NextApiResponse, NextApiRequest } from 'next';

const APP_SECRET = '7dd96374d815fab83de4a89b6c37f7c2';
const VERIFY_TOKEN = process.env.NEXTAUTH_SECRET;
function convertParamsToObject(queryString: string): Record<string, string> {
  const params = new URLSearchParams(queryString);
  const paramsObject: Record<string, string> = {};

  for (const [key, value] of params) {
    paramsObject[key] = value;
  }

  return paramsObject;
}
export async function POST(
    request: Request
) {
    const body = await request.json();
    await prisma.logs.create({
      data: {
          log: JSON.stringify(body),
          type: 'webhook_post'
      }
   });
    const {
        mode,
        token,
        challenge
    } = body.hub;
    if (mode && token) {
        if (token === VERIFY_TOKEN) {
          console.log('Webhook verified');
          return NextResponse.json(challenge)
        } else {
          return new NextResponse("Unable to verify webhook challenge", { status: 403 });
        }
      } else {
        return new NextResponse("Unable to verify token", { status: 400 });
      } 
}

export async function GET(
  req: any,
  res: any
) {
  try {
      const session = await getSession(); 
      // const url = "https://apps.meetlily.net/api/webhook?hub.challenge=1750001406&hub.verify_token=d6a2c9e61c5458dc07beccb05ed38898c226829a&hub.mode=subscribe"
      const url = new URL(req.url);

      const searchParams = url.searchParams;
      const token = searchParams.get('hub.verify_token');
      const challenge = searchParams.get('hub.challenge');
      const mode = searchParams.get('hub.mode');
      const data = {
        mode: mode,
        token: token,
        challenge: challenge
      }
      console.log(data);
      await prisma.logs.create({
        data: {
            log: JSON.stringify(data),
            type: 'webhook_get'
        }
      });

      // Check if the user is authenticated
      // if (!session) {
      //     // User is not authenticated, return an unauthorized response
      //     return new NextResponse("Unauthorized", { status: 401 });
      // }
      return new NextResponse(challenge, { status: 200 });
  } catch (error) {
      const errorMessage = "An error occurred while fetching Logs";
      return new NextResponse(errorMessage, { status: 500 });
  }
}