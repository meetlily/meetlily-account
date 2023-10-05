import TermsAndConditions from '../components/TermsAndConditionsPage';

export default async function TermsPage() {
	return (
		<>
			<div
				className="
              bg-gray-800
                justify-center
                items-start
                flex
                fixed
                inset-0
                z-50
                outline-none
                overflow-auto
                focus:outline-none"
			>
				<div
					className={`
                    relative 
                    flex 
                    flex-col 
                    bg-gray-50
                    shadow-2xl 
                    rounded-2xl 
                    md:flex-row 
                    md:space-y-0 
                    md:m-0
                    
                `}
				>
					<div
						className="
                        translate
                        flex
                        flex-col
                        my-auto
                        px-10
                        md:px-20
                    "
					>
						<TermsAndConditions />
					</div>
				</div>
			</div>
		</>
	);
}
