import prisma from '@/app/libs/prismadb';
const account: any = await prisma.account.findMany();
const useAccounts = () => {
	const getAll = account;
	const getByValue = (userId: string) => {
		return account.find((item: any) => item?.userId === userId);
	};
	return {
		getAll,
		getByValue
	};
};

export default useAccounts;
