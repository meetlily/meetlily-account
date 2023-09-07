import PageLayout from '@/layouts/Pages';
import Dashboard from './components/Dashboard';
import getCurrentUser from './actions/getCurrentUser';


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
    <div className="fluid max-w-[2500px] flex flex-col items-center mx-auto justify-center border bg-gray-50 h-full">
      <PageLayout metadata={metaData} showSidebar={true} hideNavbar={true}>
        <div className="flex flex-col w-full border-l h-full bg-white">
            <Dashboard currentUser={currentUser}/>
        </div>
      </PageLayout>
    </div>
  )
}

