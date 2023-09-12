import PageLayout from '@/app/layouts/page';
import Dashboard from '@/app/components/Dashboard';
import getCurrentUser from './actions/getCurrentUser';
import HomeLandingPage from './components/landingpages/HomeLandingPage';
import PageNavbar from './components/navbar/PageNavbar';


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
    <>
      <PageNavbar currentUser={currentUser} />
      <div className="fluid flex flex-col items-center mx-auto justify-center bg-gray-50 h-full">
        <PageLayout metadata={metaData} showSidebar={false} hideNavbar={true}>
          <div className="flex flex-col w-full h-ful">
              <HomeLandingPage currentUser={currentUser}/>
              {/* <Dashboard currentUser={currentUser}/> */}
          </div>
        </PageLayout>
      </div>
    </>
  )
}

