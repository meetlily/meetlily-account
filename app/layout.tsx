import './globals.css'
import { Metadata } from 'next'
import { Inter, Nunito, Open_Sans } from 'next/font/google'
import ClientOnly from '@/app/components/ClientOnly'
import getCurrentUser from './actions/getCurrentUser'
import ToasterProvider from './components/providers/ToasterProvider'

export const metadata: Metadata = {
  title: 'Meetlily Dashboard',
  description: 'Simplify Data Management',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">

      <body 
        className={`
          ${font.className}
          bg-gray-50
        `}
      >
        <ClientOnly>
        <ToasterProvider />
          {children}
        </ClientOnly>
      </body> 
    </html>
  )
}
