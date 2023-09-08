import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

const APP_SECRET = '7dd96374d815fab83de4a89b6c37f7c2';
const VERIFY_TOKEN = process.env.NEXTAUTH_SECRET;

// Facebook POST Webhook
export async function POST(
    req: any,
    res: any
  ) {
    try {

        const body = await req.json();
        // const url = "https://apps.meetlily.net/api/webhook?hub.challenge=1750001406&hub.verify_token=d6a2c9e61c5458dc07beccb05ed38898c226829a&hub.mode=subscribe"
        const url = new URL(req.url);
        // const searchParams = url.searchParams;
        // const token = searchParams.get('hub.verify_token');
        // const challenge = searchParams.get('hub.challenge');
        // const mode = searchParams.get('hub.mode');
        const data = {
          body: body,
          app: 'facebook',
          url: url
        }
        await prisma.logs.create({
          data: {
              json: data,
              log: JSON.stringify(body),
              type: 'webhook_post'
          }
        });
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        const errorMessage = "An error occurred while fetching Logs";
        return new NextResponse(errorMessage, { status: 500 });
    }
  }

// Facebook GET Webhook
export async function GET(
  req: any,
  res: any
) {
  try {
      // const url = "https://apps.meetlily.net/api/webhook/facebook?hub.challenge=1750001406&hub.verify_token=d6a2c9e61c5458dc07beccb05ed38898c226829a&hub.mode=subscribe"
      const url = new URL(req.url);
      const searchParams = url.searchParams;
      const token = searchParams.get('hub.verify_token');
      const challenge = searchParams.get('hub.challenge');
      const mode = searchParams.get('hub.mode');
      const data = {
        mode: mode,
        token: token,
        challenge: challenge,
        app: 'facebook',
        url: url
      }
      await prisma.logs.create({
        data: {
            json: data,
            log: JSON.stringify(data),
            type: 'webhook_get'
        }
      });
      if(mode === 'subscribe'){
        if(token === VERIFY_TOKEN){
            return new NextResponse(challenge, { status: 200 });
        } else {
            return new NextResponse("Unable to verify the token", { status: 403 });
        }
      } 
      return NextResponse.json(data, { status: 200 });
  } catch (error) {
      const errorMessage = "An error occurred while fetching Logs";
      return new NextResponse(errorMessage, { status: 500 });
  }
}