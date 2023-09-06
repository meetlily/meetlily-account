import './globals.css'
import { Metadata } from 'next'

import { Inter, Nunito, Open_Sans } from 'next/font/google'
import Navbar from '@/app/components/navbar/Navbar'
import ClientOnly from '@/app/components/ClientOnly'
import RegisterModal from '@/app/components/modals/RegisterModal'
import ToasterProvider from '@/app/components/providers/ToasterProvider'
import LoginModal from '@/app/components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from '@/app/components/modals/RentModal'
import AccountModal from './components/modals/AccountModal'
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
          <ToasterProvider />
          <MainNavbar currentUser={currentUser}/>
          <AccountModal currentUser={currentUser}/>
          <LoginModal currentUser={currentUser}/>
          <RegisterModal currentUser={currentUser}/>
          {/*<ToasterProvider />
          <RentModal />
          <AccountModal currentUser={currentUser}/>
          <LoginModal currentUser={currentUser}/>
          <RegisterModal currentUser={currentUser}/>
          <Navbar currentUser={currentUser}/>
  <SecondaryNav />*/}
        </ClientOnly>
        <div
          className='

          '
        >
          {children}
        </div>
        <Footer>
            <div className='text-[10px] text-center font-light border-t p-2 '>Powered by Meetlily</div>
        </Footer>
      </body> 
    </html>
  )
}
