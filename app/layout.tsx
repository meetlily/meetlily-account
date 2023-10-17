import ClientOnly from '@/app/components/ClientOnly';
import ToasterProvider from '@/app/components/providers/ToasterProvider';
import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
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
				<div className="fixed z-50 top-1/2 left-1/2">
					{/* <NextTopLoader
						color="#2299DD"
						initialPosition={0.08}
						crawlSpeed={200}
						height={3}
						crawl={true}
						showSpinner={true}
						easing="ease"
						speed={200}
						shadow="0 0 10px #2299DD,0 0 5px #2299DD"
					/> */}
				</div>
				<ClientOnly>
					<ToasterProvider />

					{children}
				</ClientOnly>
			</body>
		</html>
	);
}
