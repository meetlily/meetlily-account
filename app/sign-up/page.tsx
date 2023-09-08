import getCurrentUser from "../actions/getCurrentUser";
import RegisterForm from "../components/forms/RegisterForm";

export default async function RegisterPage() {
    const currentUser = await getCurrentUser();
    return (
        <RegisterForm currentUser={currentUser} />
    )
}