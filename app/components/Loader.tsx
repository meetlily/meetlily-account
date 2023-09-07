'use client'
interface LoaderProps {
  align?: string | 'center';
  size?: string | 'md';
  color?: string | 'dark';
  title?: string | 'Loading...';
  ariaLabel?: string;
}
import { Spinner } from "flowbite-react"

const Loader: React.FC<LoaderProps> = ({
  align,
  size,
  color,
  title,
  ariaLabel
}) => {
    return (
      <>
        <div className={`text-${align}`}>
          <Spinner color={color} size={size} title={title} aria-label={ariaLabel} />
        </div>
      </>
    )
}

export default Loader;