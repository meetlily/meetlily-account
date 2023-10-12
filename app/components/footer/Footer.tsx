'use client';

import Container from '../Container';

interface FooterProps {
	children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
	return (
		<div className="fluid w-full bg-white z-10 shadow-sm bottom-0">
			<div className="py-1">
				<Container>{children}</Container>
			</div>
		</div>
	);
};

export default Footer;
