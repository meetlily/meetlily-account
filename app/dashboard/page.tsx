import getCurrentUser from "../actions/getCurrentUser";
import Dashboard from "../components/Dashboard";
import SideBarLayout from "../components/SideBarLayout";
import MainNavbar from "../components/navbar/MainNavbar";
import PageLayout from "../layouts/page";


export default async function DashboardPage() {
    const currentUser = await getCurrentUser();
    return (
        <>
        <header className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
          <MainNavbar currentUser={currentUser} />
        </header>
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-gray-100 border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
          <SideBarLayout showSidebar={true} />
        </aside>

        <main className="relative md:ml-64 h-auto mt-[58px] z-40 bg-white border-l border-r overflow-hidden">
          <Dashboard currentUser={currentUser}/>
        </main>
      </>
    )
}