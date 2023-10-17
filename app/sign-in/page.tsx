import { redirect } from 'next/navigation';
import getCurrentUser from '../actions/getCurrentUser';
import LoginForm from '../components/forms/LoginForm';

export default async function LoginPage() {
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect('/admin');
	}
	return <LoginForm currentUser={currentUser} />;
}
