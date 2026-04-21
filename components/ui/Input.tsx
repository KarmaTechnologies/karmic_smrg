import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <label className="input-wrapper">
      <span className="input-label">{label}</span>
      <input
        id={id}
        {...props}
        className="input-field"
      />
    </label>
  );
}
