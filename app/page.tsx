import Image from 'next/image'
import styles from './page.module.css'
import Content from '@/app/components/Content'
import Dashboard from '@/app/components/Dashboard'
import getCurrentUser from './actions/getCurrentUser'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meetlily Page',
  description: 'Simplify Data Management',
}

export default async function Home() {
  const currentUser = await getCurrentUser();
  let metaData = {
    title: 'Dashboard',
    subtitle: 'Welcome, Guest!'
  }
  if(currentUser){
    metaData.subtitle = `Welcome back, ${currentUser.name}!`;
  }
  return (
    <div>
      <Content currentUser={currentUser} title={metaData.title} subtitle={metaData.subtitle}>
        <Dashboard currentUser={currentUser}/>
      </Content>
    </div>
  )
}
