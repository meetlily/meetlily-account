'use client';

interface HeadingProps {
	title: string;
	headerTitle?: string;
	subtitle?: string;
	center?: boolean;
	fontColor?: string;
	bold?: boolean;
	size?: string;
	icon?: React.ReactElement;
}
const Heading: React.FC<HeadingProps> = ({
	title,
	headerTitle,
	subtitle,
	center,
	fontColor,
	bold,
	size,
	icon
}) => {
	return (
		<div
			className={`
			mt-2
          ${center ? `text-center` : `text-start`}
        `}
		>
			<h2
				className={`
              font-bold
              mt-2
              text-gray-700
			  dark:text-gray-100
              ${size ? size : 'text-2xl'}
              ${bold ? `font-bold` : `font-light`}
        `}
			>
				<div className="flex flex-row">
					{icon && (
						<>
							<div className="mr-4">{icon}</div>
						</>
					)}
					{title}
				</div>
			</h2>
			<p
				className={`
            max-w-sm 
            mb-0
            font-sans 
            font-light 
            text-sm
            text-gray-500
          `}
			>
				{subtitle}
			</p>
		</div>
	);
};

export default Heading;
