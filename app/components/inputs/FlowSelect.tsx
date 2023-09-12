'use client';

import { Label, Select } from "flowbite-react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}
const Input: React.FC<InputProps> = ({
    id,
    label,
    type,
    disabled,
    formatPrice,
    required,
    register,
    errors
}) => {

    return (
        <div
        className="max-w-md"
        id="select"
      >
        <div className="mb-2 block">
          <Label
            htmlFor="countries"
            value="Select your country"
          />
        </div>
        <Select
          id="countries"
          required
        >
          <option>
            United States
          </option>
          <option>
            Canada
          </option>
          <option>
            France
          </option>
          <option>
            Germany
          </option>
        </Select>
      </div>
    )
}

export default Input;