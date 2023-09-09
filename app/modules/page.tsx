import getCurrentUser from "../actions/getCurrentUser";
import Modules from "../components/modules/Modules";

export default async function ModulesPage() {
    const currentUser = await getCurrentUser();
    return (
        <Modules  />
    )
}