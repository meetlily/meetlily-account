import nodemailer from 'nodemailer';

import eTemplate from '@/data/emailTemplate.json';

export function creteEmailTemplate(username: any, function_type: any) {
	let emailTemplate;

	if (function_type === 'newsletter') {
		emailTemplate = eTemplate.newsletter.body;
	} else if (function_type === 'signUp') {
		emailTemplate = eTemplate.signUp.body;
	} else {
		emailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>${eTemplate.newsletter.subject}!</title>
      </head>
      <body>
          <p>Dear ${username},</p>

          <p>Thank you for your message! We are thrilled to have you as a new member of our community.</p>

          <p>At Meetlily Advertising, our mission is to help businesses accelerate their growth through effective and innovative advertising strategies. Whether you are a small startup or an established brand, we have the expertise and resources to assist you in reaching your advertising goals.</p>

          <p>As a registered member, you now have access to a wide range of features and benefits:</p>

          <ol>
              <li>Advertising Dashboard: Get a comprehensive overview of your advertising campaigns, monitor their performance, and track your return on investment.</li>
              <li>Targeted Audience: Leverage our extensive database to target your ads specifically to your desired audience, ensuring maximum impact and engagement.</li>
              <li>Expert Guidance: Our team of experienced advertising professionals is available to provide personalized guidance and assist you with any challenges you may encounter along the way.</li>
              <li>Educational Resources: Access our library of articles, tutorials, and webinars to stay up-to-date with the latest trends and strategies in the advertising industry.</li>
              <li>Networking Opportunities: Connect and collaborate with other members of our community, sharing insights and best practices to enhance your advertising efforts.</li>
          </ol>

          <p>To make the most of your membership, we recommend you:</p>

          <ol>
              <li>Complete your profile to showcase your business and maximize engagement opportunities.</li>
              <li>Explore our resources and take advantage of our educational materials to improve your advertising knowledge.</li>
              <li>Engage with other members through our forums and discussions to build connections within the advertising industry.</li>
          </ol>

          <p>We are committed to providing a seamless and rewarding experience for all our members, and your feedback is invaluable to us. If you have any questions, suggestions, or concerns, please do not hesitate to reach out to our support team at <a href="mailto:meetlily.advertising@gmail.com">meetlily.advertising@gmail.com</a> or by using the contact form on our website.</p>

          <p>Once again, welcome to Meetlily Advertising! We look forward to supporting you on your advertising journey and witnessing your business thrive.</p>

          <p>Best regards,</p>

          <p>Eddie Villanueva<br>Meetlily Advertising Team</p>

          <br><br><br>
          Generated on ${new Date()}
      </body>
      </html>
      `;
	}

	return emailTemplate;
}

export async function sendEmail(to: any, subject: any, html: any) {
	try {
		const transporter = nodemailer.createTransport({
			service: process.env.MAIL_PROVIDER,
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PASSWORD
			}
		});

		const mailOptions = {
			from: 'Meetlily Advertising <meetlily.advertising@gmail.com>',
			to,
			subject,
			html,
			bcc: process.env.EMAIL
		};

		// Send the email
		const info = await transporter.sendMail(mailOptions);
		console.log(info);
		return info;
	} catch (error) {
		console.error('Error sending email: ', error);
	}
}
