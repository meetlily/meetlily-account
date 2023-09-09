import getCurrentUser from "@/app/actions/getCurrentUser";
import ModuleComponent from "@/app/components/modules/Module";


export default async function ModulePage() {
    const currentUser = await getCurrentUser();
    return (
        <ModuleComponent />
    )
}