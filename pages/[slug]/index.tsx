import PageLayout from "@/layouts/Pages";
const Pages = () => {
    const meta = {
      title: 'Dashboard',
      description: 'Welcome, Guest!'
    }

    return (
        <>
            <PageLayout showSidebar={false} metadata={meta} hideNavbar={false}>
                
            </PageLayout>
        </>
    )
}

export default Pages;

