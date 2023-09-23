"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  errors: FieldErrors;
  value: string;
}
const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
 
  errors,
 
}) => {
  return (
    <div className="w-full related">
   
      <div className="relative">
        <input
          id={id}
          disabled={disabled}
          value={value}
          placeholder=""
          type={type}
          className={`
              peer
              w-full
              p-4
              pt-6
              font-dark
              bg-white
              border-2
              rounded-md
              outline-none
              transition
              disabled:opacity-70
              disabled:cursor-not-allowed
              ${errors[id] ? "border-orange-500" : "border-neutral-300"}
              ${errors[id] ? "focus:border-orange-500" : "focus:border-black"}
            `}
        />
        <label
          htmlFor={id}
          className={`
              absolute
              text-md
              duration-150
              transform
              top-5
              -translate-y-3
              z-10
              pointer-events-none
              origin-[0]
              
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 
              peer-focus:-translate-y-4 
              ${errors[id] ? "text-rose-500" : "text-zinc-400"}
              ${errors[id] ? "text-sm" : ""}
            }
            `}
        >
          {label}
        </label>
      </div>
    </div>
  );
};
export default Input;