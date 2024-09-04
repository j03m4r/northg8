import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';

interface StyledFileInputProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  required?: boolean;
  error?: FieldError;
  accept?: string;
}

const StyledFileInput: React.FC<StyledFileInputProps> = ({
  id,
  label,
  register,
  required = false,
  error,
  accept = 'video/*'
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <input
        type="file"
        id={id}
        accept={accept}
        {...register(id, { required: required ? `${label} is required` : false })}
        className="hidden"
      />
      <label
        htmlFor={id}
        className="disabled:opacity-50 flex w-full border border-typography-black justify-start gap-x-6 items-center py-3 px-6 text-lg font-semibold text-typography-black rounded-md cursor-pointer"
      >
        <FaPlus size={12} />
        {label}
      </label>
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default StyledFileInput;
