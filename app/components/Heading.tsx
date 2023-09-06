'use client';

interface HeadingProps {
    title: string;
    headerTitle?: string;
    subtitle?: string;
    center?: boolean;
    fontColor?: string;
    bold?: boolean;
    size?: string
}
const Heading: React.FC<HeadingProps> = ({
    title,
    headerTitle,
    subtitle,
    center,
    fontColor,
    bold,
    size
}) => {
    return (
      <div 
        className={`
          ${center ? `text-center` : `text-start`}
        `}
      >
        <h2 className={`
              font-bold
              mb-2
              mt-2
              text-gray-700
              ${size ? size : 'text-2xl'}
              ${bold ? `font-bold` : `font-light`}
        `}>{title}</h2>
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
    )
}

export default Heading;