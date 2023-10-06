'use client';

import { SafeUser } from '@/app/types';
import Container from '../Container';
import Logo from './Logo';

interface NavbarProps {
	currentUser?: SafeUser | null;
	showNavbar: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ currentUser, showNavbar }) => {
	return (
		<>
			{showNavbar && (
				<>
					<div className="fixed w-full bg-white z-10 shadow-sm">
						<div className="py-1">
							<Container>
								<div
									className="
                        flex 
                        flex-row 
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                        "
								>
									<Logo color={'black'} width={120} height={120} onClick={() => {}} />
									{/*<Search />*/}
								</div>
							</Container>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Navbar;
