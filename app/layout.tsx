import ClientOnly from '@/app/components/ClientOnly';
import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import ToasterProvider from './components/providers/ToasterProvider';
import './globals.css';

export const metadata: Metadata = {
	title: 'Meetlily Dashboard',
	description: 'Simplify Data Management'
};

const font = Nunito({
	subsets: ['latin']
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`
                ${font.className}
              bg-gray-100 dark:bg-gray-900
            `}
			>
				<ClientOnly>
					<ToasterProvider />
					{children}
				</ClientOnly>
			</body>
		</html>
	);
}
