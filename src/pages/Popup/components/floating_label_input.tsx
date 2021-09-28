import React from "react";

type FloatingLabelInputProps = {
  type?: string;
  label: string;
  error?: string;
};

export default function FloatingLabelInputWithValue({
  type,
  label,
  error,
  onChange,
  value,
  className,
  ...props
}: FloatingLabelInputProps & React.HTMLProps<HTMLInputElement>) {
  return (
    <div className="relative w-full">
      <input
        id={`${label}-input`}
        className={`px-3 peer h-10 w-full border-0 border-b-2 border-warmGray-400  placeholder-shown:border-warmGray-300 text-warmGray-900 placeholder-transparent focus:ring-transparent focus:outline-none focus:border-gradient-r-purple-pink focus:border-b-2 ${
          className ?? ""
        }`}
        placeholder="placeholder"
        type={type ?? "text"}
        {...props}
        value={value}
        onChange={onChange}
      />
      <label
        className="capitalize px-3 absolute left-0 -top-5 text-warmGray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-warmGray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-warmGray-600 peer-focus:text-sm"
        htmlFor={`${label}-input`}
      >
        {label}
      </label>
      {error ? (
        <span className="text-red-600 absolute top-10 left-3 text-xs font-bold">
          {error}
        </span>
      ) : null}
    </div>
  );
}
