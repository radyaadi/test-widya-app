import { cn } from "@/utils/tw-merge";
import { forwardRef, useState } from "react";
import { LucideProps, Eye, EyeOff } from "lucide-react";

interface TextInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  icon?: React.ElementType<LucideProps>;
  isPassword?: boolean;
  defaultValue?: string | number;
  disabled?: boolean;
  [key: string]: any; // Menambahkan indeks yang tidak pasti dari use form
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    {
      label,
      id,
      type,
      placeholder,
      icon: IconComponent,
      isPassword,
      defaultValue,
      disabled,
      ...rest
    }: TextInputProps,
    ref,
  ) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

    const inputType = isPassword
      ? passwordVisible
        ? "text"
        : "password"
      : type;
    const classPadding = IconComponent && "pl-11";
    const passwordPadding = isPassword && "pr-11";

    return (
      <>
        <label className="text-sm font-medium leading-6 text-black">
          {label}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          {IconComponent && (
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <IconComponent
                size={18}
                strokeWidth={1.8}
                className="text-slate-400"
              />
            </div>
          )}
          <input
            ref={ref}
            id={id}
            type={inputType}
            defaultValue={defaultValue}
            disabled={disabled}
            className={cn(
              "w-full rounded-md px-3 py-2 text-sm leading-none text-black placeholder-zinc-400 ring-1 ring-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:border-slate-200 disabled:bg-zinc-300 disabled:text-zinc-600 disabled:shadow-none",
              classPadding,
              passwordPadding,
            )}
            placeholder={placeholder}
            {...rest} // Menambahkan indeks yang tidak pasti dari use form
          />
          {isPassword && (
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500 focus:border-none focus:ring-transparent"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <EyeOff
                  size={19}
                  strokeWidth={1.8}
                  className="text-slate-400"
                />
              ) : (
                <Eye size={19} strokeWidth={1.8} className="text-slate-400" />
              )}
            </button>
          )}
        </div>
      </>
    );
  },
);

export default TextInput;
