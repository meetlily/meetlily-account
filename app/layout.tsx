import './globals.css'
import { Metadata } from 'next'
import { Inter, Nunito, Open_Sans } from 'next/font/google'
import ClientOnly from '@/app/components/ClientOnly'
import getCurrentUser from './actions/getCurrentUser'
import MainNavbar from './components/navbar/MainNavbar'
import  Footer  from '@/app/components/footer/Footer'


export const metadata: Metadata = {
  title: 'Meetlily Dashboard',
  description: 'Simplify Data Management',
}

const font = Open_Sans({
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
          <MainNavbar currentUser={currentUser}/>
          {children}
        </ClientOnly>
      </body> 
    </html>
  )
}
