'use client'

interface FlowInputProps {
    type: string;
    name: string;
    id?: string;
    classNames?: string;
    placeholder?: string;
    required?: boolean;
    label?: string;
    showLabel?: boolean;
    color?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FlowInput: React.FC<FlowInputProps> = ({
    type,
    name,
    id,
    classNames,
    placeholder,
    required,
    label,
    showLabel,
    color,
    value,
    onChange
}) => {
    if (!classNames) {
        classNames = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    }
    return (
        <>
        {showLabel && (
            <label
                htmlFor={name}
                className={`block mb-2 text-sm font-medium text-${color}-900 dark:text-${color ==='white' ? 'black' : 'white'}`}
            >
                {label}
            </label>
        )}
        <input
            type={type}
            name={name}
            id={id}
            className={classNames}
            placeholder={placeholder}
            required={required}
        />
        </>
    )
}

export default FlowInput;