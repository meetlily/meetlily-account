'use client';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useCallback, useState } from 'react';
import {
	AiOutlineMenu,
	AiOutlinePoweroff,
	AiOutlineSetting,
	AiOutlineTool,
	AiOutlineUser
} from 'react-icons/ai';
import Avatar from './AvatarNav';
import MenuItem from './MenuItem';

import useAccountModal from '@/app/hooks/useAccountModal';
import useRentModal from '@/app/hooks/useRentModal';
import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import Button from '../Button';

interface UserMenuProps {
	currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	const name = currentUser?.name || '';
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const rentModal = useRentModal();
	const accountModal = useAccountModal();
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);
	const onRent = useCallback(() => {
		if (!currentUser) {
			return loginModal.onOpen();
		}
		rentModal.onOpen();
	}, [currentUser, loginModal, rentModal]);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				{currentUser && (
					<div
						onClick={rentModal.onOpen}
						className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full
                    hover:text-orange-500
                    transition
                    cursor-pointer
                "
					>
						<AiOutlineSetting size={24} />
						<div className="hidden">Add Rentals</div>
					</div>
				)}

				<div
					onClick={toggleOpen}
					className="
                    p-4
                    md:py-1
                    md:px-2
                    flex
                    flex-row
                    items-center
                    gap-2
                    rounded-md
                    cursor-pointer
                    hover:shadow-md
                    transition
                "
				>
					{currentUser && (
						<>
							<AiOutlineMenu />
							<div
								className="
                            hidden
                            md:block
                        "
							>
								<Avatar currentUser={currentUser} />
							</div>
						</>
					)}
				</div>
				{!currentUser && (
					<>
						<div className="text-xs font-light">
							<Button label={'Log In'} onClick={loginModal.onOpen} />
						</div>
						<div className="text-xs font-light">
							<Button label={'Sign Up'} onClick={registerModal.onOpen} />
						</div>
					</>
				)}
			</div>
			{isOpen && (
				<div
					className="
                        absolute
                        rounded-md
                        shadow-2xl
                        w-[200px]
                        bg-white
                        overflow-hidden
                        right-2
                        top-12
                        mt-1
                        text-md
                    "
				>
					<div
						className="
                            flex
                            flex-col
                            cursor-pointer
                        "
					>
						{currentUser && (
							<>
								<MenuItem
									icon={AiOutlineUser}
									class_name="font-light"
									onClick={accountModal.onOpen}
									label="Account"
								/>
								<MenuItem
									icon={AiOutlineTool}
									class_name="font-light"
									onClick={() => {}}
									label="Settings"
								/>
								<hr />
								<MenuItem
									icon={AiOutlinePoweroff}
									class_name="font-light"
									onClick={signOut}
									label="Log Out"
								/>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
