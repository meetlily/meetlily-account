import nodemailer from 'nodemailer';
import prisma from "@/app/libs/prismadb"
import { NextRequest, NextResponse } from "next/server";
import { creteEmailTemplate } from '@/app/libs/mailer';

export async function POST(request: Request) {
    try {
        const requestData = await request.json();
        let subject = "Meetlily Notification";
        let html= '';
        
        if (!requestData) {
            return new NextResponse("Missing user data", { status: 500 });
        }
        if(requestData.subject){
            subject = requestData.subject;
        }
        if(!requestData.email){
            return new NextResponse("Missing user email", { status: 500 });
        }
        let to = requestData.email;
        if(requestData.email){
            if(requestData.name){
                html = creteEmailTemplate(requestData.name, 'signUp');
            } else {
                html = creteEmailTemplate(requestData.email, 'signUp');
            }
        }
        const transporter = nodemailer.createTransport({
            service: process.env.MAIL_PROVIDER,
            auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
            },
        });
        
        const mailOptions = {
            from: 'Meetlily Advertising <meetlily.advertising@gmail.com>',
            to,
            subject,
            html: html.toString(),
            bcc: process.env.EMAIL,
        };
        
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json(info);
    } catch (error) {
      const errorMessage = "An error occurred while fetching applications";
      return new NextResponse(errorMessage, { status: 500 });
    }
  }