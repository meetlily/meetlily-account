import nodemailer from 'nodemailer';
import prisma from "@/app/libs/prismadb"
import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from '@/app/actions/getCurrentUser';
import { creteEmailTemplate } from '@/app/libs/mailer';

export async function POST(request: Request) {
    try {
      const requestData = await request.json();
      let { to, subject, text } = requestData;
  
      if (!to) {
        return new NextResponse("Missing an email", { status: 500 });
      }
      let html = creteEmailTemplate(to, 'signUp');
      
      
  
      const transporter = nodemailer.createTransport({
        service: process.env.MAIL_PROVIDER,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      if (subject === 'newsletter') {
        subject = "Meetlily Newsletter";
        html = creteEmailTemplate(to, 'newsletter');
        await prisma.newsletter.create({
            data: {
                email: to
            }
        });
      } else if(subject === 'contactUs') {
        await prisma.contact.create({
            data: {
                email: to,
                subject: subject,
                message: text
            }
        });
      } 
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